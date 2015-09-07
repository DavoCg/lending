var Reflux = require('reflux');
var Actions = require('../actions');
var HTTPStatus = require('http-status');
var requester = require('../utils/requester');
var auth = require('../utils/auth');
var _ = require('lodash');

var config = require('../config');

var loginStore = Reflux.createStore({
    init: function init(){
        this.listenTo(Actions.login, this.login);
        this.listenTo(Actions.loginGoogle, this.loginGoogle);
        this.listenTo(Actions.logout, this.logout);
    },

    login: function login(payload){
        var self = this;
        requester.post('/login', payload, function(err, token){
            if(err) return self.trigger({err: err.message});
            auth.setToken('asmr', token);
            self.trigger(true);
        })
    },

    loginGoogle: function loginGoogle(){
        var redirect = document.URL;

        requester.get('/login/google?redirect=' + redirect, function(err, token){
            console.log('ERR', err);
            console.log('TOKEN', token);
        })
    },
    logout: function logout(){
        this.user = {};
        return auth.removeToken('asmr');
    }
});

module.exports = loginStore;