var Reflux = require('reflux');

module.exports = {
    login: Reflux.createAction(),
    register: Reflux.createAction(),
    loginGoogle: Reflux.createAction(),
    logout: Reflux.createAction(),
    getUser: Reflux.createAction(),
    refreshUser: Reflux.createAction(),

    fetchLoans: Reflux.createAction(),
    fetchLoan: Reflux.createAction()
};