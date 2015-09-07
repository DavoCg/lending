var { React, Router, Reflux, Actions, Auth, Row, Box, Col, Style } = require('../utils/base');
var { RouteHandler, Navigation } = Router;
var _ = require('lodash');

var NotFound = React.createClass({
    mixins: [Reflux.ListenerMixin, Navigation, Auth],

    render: function render(){

        return (
            <div>
               <p>Oups route not found</p>
            </div>
        );
    }
});
module.exports = NotFound;