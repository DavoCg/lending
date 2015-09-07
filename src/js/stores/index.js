var auth = require('./auth');
var login = require('./login');
var register = require('./register');

module.export = {
    authStore: auth,
    loginStore: login,
    registerStore: register
};