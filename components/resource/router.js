var Router = require('express').Router;

module.exports = function resourceRoutes(resource){
    var router = new Router();
    var routes = resource.routes;
    var middlewares = resource.middlewares;

    Array.isArray(middlewares) && middlewares.forEach(use(router));
    if(routes) Object.keys(routes).forEach(add);

    return router;

    function add(route){
        var path = routes[route].path;
        var method = routes[route].method;
        router[method](path, handleRequest.bind(null, route));
    }

    function handleRequest(route, req, res, next){
        var handler = resource[route];
        return handler(req, function(err, result){
            if(err) return next(err);
            if(!result.status) return res.json(result.body);
            return res.status(result.status).json(result.body);
        })
    }
};

function use(router){
    return function onUse(middleware){
        return router.use(middleware);
    };
}
