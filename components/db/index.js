var components = require('adotcomponents');
var mongoose = require('mongoose');

module.exports = components.define({
    name: 'db',
    init: function initDb(done){
        if(mongoose.connection.db) return done();
        this.debug('connecting to {uri}', this.config);
        this.connection = mongoose.connection;
        mongoose.connect(this.config.uri);
        this.connection.on('error', this.error.bind(this));
        this.connection.on('open', done);
    },
    dispose: function  dispose(done){
        return done();
    }
});