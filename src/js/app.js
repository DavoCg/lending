var React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute, NotFoundRoute} = Router;

var Login = require('./pages/login');
var Home = require('./pages/home');
var App = require('./pages/app');
var NotFound = require('./pages/not-found');

var routes = (
    <Route name='dashboard' path='/' handler={App}>
        <Route name='login' path='login' handler={Login}/>
        <Route name='home' path='/' handler={Home}/>
        <NotFoundRoute handler={NotFound} />
    </Route>
);

Router.run(routes, function runRouter(Handler){
    React.render(<Handler/>, document.getElementById('app'));
});