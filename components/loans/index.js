var components = require('adotcomponents');
var errors = require('http-errors');
var async = require('neo-async');
var _ = require('lodash');

module.exports = components.define({
    name: 'loans',
    required: ['resource', 'users'],
    init: function initLoans(done){
        console.log('init loan');
        this.middlewares = [];
        this.resource.load(this);
        return done();
    },
    list: function list(req, done){
        this.model.find(req.filters || {})
            .populate('user')
            .exec(function(err, loans){
                if(err) return done(err);
                return done(null, {body: loans})
            });
    },
    get: function get(req, done){
        var id = req.params.id;
        this.model.findOne({_id: id})
            .populate('user')
            .exec(function(err, loan){
                if(err) return done(err);
                if(!loan) return done(errors.NotFound('User not found'));
                return done(null, {body: loan})
            });
    },
    create: function create(req, done){
        var self = this;
        var body = req.body;
        if(!body.user) return done(errors.BadRequest('missing user'));

        return this.model(body).save(function(err, loan){
            self.users.addLoan(body.user, loan._id, function(err){
                if(err) return done(err);
                return done(null, {body: loan})
            });
        })
    },
    update: function update(req, done){
        return this.model.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function(err, loan){
            if(err) return done(err);
            return done(null, {body: loan})
        })
    }
});
