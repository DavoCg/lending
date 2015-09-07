var components = require('adotcomponents');
var HTTPStatus = require('http-status');
var passport = require('passport');
var initPassport = require('./passport');
var errors = require('http-errors');
var jwt = require('jsonwebtoken');
var _ = require('lodash');

module.exports = components.define({
    name: 'auth',
    required: ['server', 'users'],
    init: function initAuth(done){
        this.server.addRoute('post', '/login', this.login);
        this.server.addRoute('get', '/login/google', this.loginOAuth('google', {params: this.config.google.params}));
        this.server.addRoute('get', '/login/google/redirect', this.loginOAuth('google'));
        this.server.addRoute('get', '/who', this.who, {middlewares: [this.isAuth]});
        initPassport(this, done);
    },

    login: function login(req, res, next){
        var self = this;
        this.users.model.findOne({email: req.body.email}, function(err, user){
            if(err) return next(err);
            if(!user) return next(errors.NotFound('user not found'));
            if(!checkPwd(req.body.password, user.password)) return next(errors.BadRequest('password dont match'));
            return res.json(generateJWT.call(self, user));
        });
    },

    loginOAuth: function loginOAuth(type, options){
        var self = this;
        options || (options = {});
        var params = options.params;
        return function onRequest(req, res, next){
            if(req.query && req.query.redirect) params.state = req.query.redirect;
            console.log('query', req.query);
            return passport.authenticate(type, params || {}, function onAuthenticate(err, user){
                if(err) return next(err);
                if(!user) return next(errors.Unauthorized());
                return req.login(user, function onLoggedIn(err){
                    if(err) return next(err);
                    var token = generateJWT.call(self, user);
                    console.log('state', req.query.state);
                    if(req.query.state) return res.redirect(req.query.state + '?token=' + token);
                    return res.json(token);
                });
            })(req, res, next);
        };
    },

    who: function who(req, res, next){
        if(!req.user) return next(errors.NotFound('user not found'));
        return res.json(req.user)
    },

    isAuth: function isAuth(req, res, next){
        var token = req.headers.token || req.body.token;
        if(!token) return next(errors.Unauthorized('No token'));

        var user = decodeJWT.call(this, token);
        if(!user.id) return next(errors.Unauthorized('Token error'));

        this.users.model.findOne({_id: user.id}, function(err, user){
            if(err) return next(err);
            if(!user) return next(errors.Unauthorized('No user'));
            req.user = user;
            return next();
        })
    }
});



function checkPwd(pwd1, pwd2){
    return pwd1 === pwd2;
}

function generateJWT(user){
    return jwt.sign({ id: user._id }, this.config.authSecretKey);
}

function decodeJWT(token){
    return jwt.verify(token, this.config.authSecretKey)
}