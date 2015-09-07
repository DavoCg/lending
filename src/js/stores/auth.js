var Reflux = require('reflux');
var Actions = require('../actions');
var HTTPStatus = require('http-status');
var requester = require('../utils/requester');
var auth = require('../utils/auth');
var _ = require('lodash');

var config = require('../config');

var authStore = Reflux.createStore({
    init: function init(){
        this.listenTo(Actions.getUser, this.getUser);
        this.listenTo(Actions.refreshUser, this.refreshUser);
        this.user = null;
    },

    getUser: function getUser(){
        var self = this;
        if(this.user) this.trigger(this.user);
        requester.get('/who', function(err, user){
            if(err && err.status === 401) auth.removeToken('lending');
            self.user = user;
            self.trigger(self.user);
        });
    },

    refreshUser: function refreshUser(){
        var self = this;
        requester.get('/who', function(err, user){
            if(err && err.status === 401) auth.removeToken('lending');
            self.user = user;
            self.trigger(self.user);
        });
    }
});

module.exports = authStore;