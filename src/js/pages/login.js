var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');
var loginStore = require('../stores/login');
var registerStore = require('../stores/register');
var { Navigation } = Router;
var { Form } = require('../librairies/adot-forms');
var { Box, Row, Col } = require('../librairies/react-flex-grid');
var loginSchema = require('form-schemas').login;
var registerSchema = require('form-schemas').register;
var Auth = require('../utils/auth');

var Login = React.createClass({
    mixins: [Reflux.ListenerMixin, Navigation, Auth],

    render: function render(){
        return (
            <p>Login Page</p>
        )
    }
});

module.exports = Login;