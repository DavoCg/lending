var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;

var App = React.createClass({
    render: function render(){
        return (
            <div>
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = App;