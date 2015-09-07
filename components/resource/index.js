var components = require('adotcomponents');
var model = require('./model');
var router = require('./router');
var errors = require('http-errors');

module.exports = components.define({
    name: 'resource',
    required: ['server', 'utils'],
    load: function load(resource){
        this.app = this.server.app;
        this.loadModel(resource);
        this.loadRoutes(resource);
    },
    loadModel: function loadModel(resource){
        resource.model = model(resource);
    },
    loadRoutes: function loadRoutes(resource){
        resource.routes = resource.config.routes;
        resource.router = router(resource);
        resource.route = this.utils.getRoute(resource.name);
        this.app.use(resource.route, resource.router);
    }
});
