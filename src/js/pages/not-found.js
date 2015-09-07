var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');
var { Box, Row, Col } = require('../librairies/react-flex-grid');
var { RouteHandler, Navigation } = Router;
var Auth = require('../utils/auth');
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