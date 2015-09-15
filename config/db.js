var infra = require('./infra');
var uri = require('mongodb-uri');

var mongo = infra['storage'].mongodb;

module.exports = {
    all: {
        uri: uri.format({
            username: mongo.username,
            password: mongo.password,
            hosts: mongo.hosts,
            database: 'lending'
        })
    },
    test: {
        uri: uri.format({
            username: mongo.username,
            password: mongo.password,
            hosts: mongo.hosts,
            database: 'lending'
        })
    }
};