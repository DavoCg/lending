var components = require('adotcomponents');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var status = require('http-status');
var _ = require('lodash');
var path = require('path');
var cors = require('cors');

module.exports = components.define({
    name: 'server',
    required: ['db'],
    init: function initServer(done){
        this.app = express();
        this.app.use(this.logger());
        this.app.use(express.static(path.resolve(__dirname, '..', '..', 'dist')));
        this.app.use(bodyParser.json());
        this.app.use(cors({origin: 'http://127.0.0.1:9002'}));
        this.app.use(passport.initialize());
        this.server = http.Server(this.app);
        return done();
    },
    start: function startServer(done){
        var self = this;
        return this.server.listen(this.config.port, this.config.bind, function onListen(){
            self.info('adotapi listening on {host}:{port} in {env} environment', self.config);
            return done && done();
        });
    },
    addRoute: function addRoute(method, route, fn, options){
        if(options && options.middlewares){
            var args = _.flatten([route, options.middlewares, fn]);
            return this.app[method].apply(this.app, args)
        }
        return this.app[method](route, fn);
    },
    logger: function requestLogger(){
        var self = this;
        return function onRequest(req, res, next){
            var start = new Date().getTime();
            res.on('finish', function onFinish(){
                var latency = new Date().getTime() - start;
                return self.info('{method} {url} - statusCode: {status} - latency: {latency}ms', {
                    url: req.originalUrl,
                    method: req.method,
                    latency: latency,
                    status: res.statusCode
                });
            });
            return next();
        };
    },
    onError: function onError(err, req, res, next){
        var status = err.status || err.statusCode || status.INTERNAL_SERVER_ERROR;
        var body = {message: err.message, status: status};
        return res
            .status(status)
            .json(body);
    }
});