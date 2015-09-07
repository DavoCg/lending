var components = require('adotcomponents');
var errors = require('http-errors');
var async = require('neo-async');
var _ = require('lodash');

module.exports = components.define({
    name: 'users',
    required: ['resource'],
    init: function initUsers(done){
        this.middlewares = [];
        this.resource.load(this);
        return done();
    },

    list: function list(req, done){
        this.model.find(req.filters || {}, function(err, users){
            if(err) return done(err);
            return done(null, {body: users})
        });
    },
    get: function get(req, done){
        var id = req.params.id;
        this.model.findOne({_id: id}, function(err, user){
            if(err) return done(err);
            if(!user) return done(errors.NotFound('User not found'));
            return done(null, {body: user})
        });
    },
    create: function create(req, done){
        var self = this;
        var body = req.body;

        this.model.findOne({email: body.email}, function(err, user){

            if(err) return done(err);
            if(user) return done(errors.BadRequest('email already exists'));
            if(body.password !== body.password2) return done(errors.BadRequest('password dont match'));
            return self.model(body).save(function(err, user){
                if(err) return done(err);
                return done(null, {body: user})
            })
        });
    },
    update: function update(req, done){
        return this.model.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function(err, user){
            if(err) return done(err);
            return done(null, {body: user})
        })
    },

    changePassword: function changePassword(req, done){
        var body = req.body;
        var id = req.params.id;
        var self = this;

        this.model.findById(id, function(err, user){
            if(err) return done(err);
            if(!user) return done(errors.NotFound('User not found'));
            if(user.password !== body.old) return done(errors.BadRequest('not equal old password'));
            if(body.password1 !== body.password2) return done(errors.BadRequest('password doesnt match'));

            return self.model.findByIdAndUpdate(id, {$set: {password: body.password1}}, {new: true}, function(err, user){
                return done(null, {body: user})
            });
        });
    }
});
