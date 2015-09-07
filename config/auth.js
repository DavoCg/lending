var infra = require('./infra');
var api = infra.api;

module.exports = {
    all: {
        authSecretKey: api.authSecretKey,
        google: {
            params: {
                scope: ['email']
            },
            auth: {
                clientID: api.google.clientID,
                clientSecret: api.google.clientSecret,
                callbackURL: 'http://' + api.host + ':' + api.port + '/login/google/redirect',
                passReqToCallback: true
            }
        }
    }
};