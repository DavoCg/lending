var { React, Router, Style } = require('../utils/base');
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