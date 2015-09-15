var auth = require('./auth');
var login = require('./login');
var register = require('./register');
var loan = require('./loan');

module.exports = {
    authStore: auth,
    loginStore: login,
    registerStore: register,
    loanStore: loan
};