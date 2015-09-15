var {Reflux, Actions, Auth, Requester} = require('../utils/base');
var HTTPStatus = require('http-status');
var _ = require('lodash');

var loanStore = Reflux.createStore({
    init: function init(){
        this.listenTo(Actions.fetchLoans, this.fetchLoans);
        this.listenTo(Actions.fetchLoan, this.fetchLoan);
        this.cache = [];
    },

    setCache: function setCache(loans){
        this.cache = loans;
    },

    updateCache: function updateCache(data){
        var index = _.findIndex(this.cache, function(loan) {
            return loan._id === data._id;
        });
        this.cache[index] = data;
        this.trigger(this.cache);
    },

    fetchLoans: function fetchLoans(options){
        options || (options = {});
        var self = this;
        if(this.cache.length) return this.trigger(this.cache);

        return Requester.get('/loans', function(err, loans){
            if(err) return console.log('Error when fetching loans', err);
            self.setCache(loans);
            return self.trigger(loans);
        });
    },

    fetchLoan: function fetchLoan(id){
        var self = this;
        var loan = this.findLoan(id);
        if(loan) return this.trigger(loan);

        return Requester.get('/loans' + '/' + id, function(err, loan){
            if(err) return console.log('Error when fetching loans', err);
            return self.trigger(loan);
        })
    },

    findLoan: function findLoan(id){
        return _.find(this.cache, function(loan){
            return loan._id === id;
        });
    }
});

module.exports = loanStore;