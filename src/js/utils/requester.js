var config = require('../config');
var request = require('superagent');
var auth = require('./auth');
var qs = require('querystring');
var host = config.server.host + ':' + config.server.port;

module.exports = {
    get(path, options, done){
        if(typeof options === 'function') done = options;

        request.get(host + path)
            .query(options.query || {})
            .set('token', auth.getToken('asmr'))
            .end(function(err, result){
                if(err) return done(err);
                return done(null, result.body);
            });
    },

    post(path, body, done){
        request.post(host + path)
            .type('json')
            .set('token', auth.getToken('asmr'))
            .send(body)
            .end(function(err, result){
                if(err) return done(err);
                return done(null, result.body);
            })
    },

    put(path, body, done){
        request.put(host + path)
            .type('json')
            .set('token', auth.getToken('asmr'))
            .send(body)
            .end(function(err, result){
                if(err) return done(err);
                return done(null, result.body);
            })
    }
};