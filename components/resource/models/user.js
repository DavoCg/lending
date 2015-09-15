var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {type: String},
    password: {type: String},
    name: {type: String},
    gender: {type: String},
    age: {type: Number},
    picture: {type: String},
    loans: [{ type: Schema.Types.ObjectId, ref: 'Loan' }]
});

var User = mongoose.model('User', userSchema);

module.exports = User;