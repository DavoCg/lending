var { React, Router, Style } = require('./utils/base');
var {Route, DefaultRoute, NotFoundRoute} = Router;

var Home = require('./pages/home');
var App = require('./pages/app');
var NotFound = require('./pages/not-found');

var routes = (
    <Route name='dashboard' path='/' handler={App}>
        <Route name='home' path='/' handler={Home}/>
        <NotFoundRoute handler={NotFound} />
    </Route>
);

Router.run(routes, function runRouter(Handler){
    var app = document.getElementById('app');
    React.render(<Handler/>, app);
});