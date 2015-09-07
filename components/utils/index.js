var JSONStream = require('JSONStream');
var components = require('adotcomponents');
var HTTPStatus = require('http-status');
var _ = require('lodash');

module.exports = components.define({
    name: 'utils',
    getRoute: function getRoute(path){
        return '/' + path;
    },
    stringify: function stringify(options){
        return new JSONStream.stringify(options);
    },
    stringifyObject: function stringifyObject(options){
        return new JSONStream.stringifyObject(options);
    }
});