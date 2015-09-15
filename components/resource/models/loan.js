var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loanSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    description: {type: String},
    goal: {type: Number},
    current: {type: Number},
    tags: {type: Array}
});

var Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;