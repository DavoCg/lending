var Reflux = require('reflux');
var Actions = require('../actions');
var HTTPStatus = require('http-status');
var requester = require('../utils/requester');
var auth = require('../utils/auth');
var _ = require('lodash');

var config = require('../config');

var registerStore = Reflux.createStore({
    init: function init(){
        this.listenTo(Actions.register, this.register);

    },
    register: function register(payload){
        var self = this;
        requester.post('/users', payload, function(err, user){
            if(err) return self.trigger({err: err.message});
            return self.trigger(true);
        })
    }
});

module.exports = registerStore;