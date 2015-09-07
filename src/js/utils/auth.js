module.exports = {
    checkAuth: function checkAuth(){
        return !!localStorage.lending;
    },

    setToken: function setToken(name, content){
        return localStorage.setItem(name, content);
    },

    getToken: function getToken(name){
        return localStorage.getItem(name);
    },

    removeToken: function removeToken(name){
        return localStorage.removeItem(name);
    }
};