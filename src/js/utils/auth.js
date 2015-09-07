module.exports = {
    checkAuth: function checkAuth(){
        return !!localStorage.asmr;
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