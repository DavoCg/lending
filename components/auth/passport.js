var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function initPassport(context, done){
    passport.use(new GoogleStrategy(context.config.google.auth, function authenticate(req, access, refresh, profile, done){
        var email = profile.emails[0].value;
        if(!email) return done(errors.BadRequest('Could not find email in google data'));
        return context.users.model.findOne({email: email}, function onFound(err, user){
            if(err) return done(err);
            if(user) return done(null, user);

            return context.users.model({
                email: profile.emails[0].value,
                password: 'test-google'
            }).save(function(err, user){
                if(err) return done(err);
                return done(null, user);
            });
        });
    }));

    passport.serializeUser(function onSerialize(user, done){
        return done(null, user);
    });

    passport.deserializeUser(function onUserDeserialize(user, done){
        return done(null, user);
    });

    return done();
};