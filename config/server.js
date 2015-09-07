var infra = require('./infra');
var api = infra.api;

module.exports = {
    all: {
        host: api.host,
        bind: api.bind,
        port: api.port,
        peerServer: {
            debug: true
        }
    }
};