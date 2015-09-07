var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');
var authStore = require('../stores/auth');
var { Box, Row, Col } = require('../librairies/react-flex-grid');
var { RouteHandler, Navigation } = Router;
var Auth = require('../utils/auth');
var _ = require('lodash');

var Home = React.createClass({

    mixins: [Reflux.ListenerMixin, Navigation, Auth],

    getInitialState: function getInitialState(){
        return ({
            user: {}
        })
    },

    componentWillMount: function componentWillMount(){
        this.checkAuth() || this.transitionTo('login');
        this.listenTo(authStore, this.setUser);
        Actions.getUser();
    },

    setUser: function setUser(user){
        this.setState({user: user});
    },

    render: function render(){
        return (
            <div>
                <p>{this.state.user.name}</p>
            </div>
        );
    }
});


module.exports = Home;
