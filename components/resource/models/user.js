var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {type: String},
    password: {type: String}
});

var User = mongoose.model('user', userSchema);

module.exports = User;