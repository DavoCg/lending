var react = require('react');
var router = require('react-router');
var reflux = require('reflux');
var actions = require('../actions');
var auth = require('./auth');
var requester = require('./requester');
var style = require('../styles');
var { Box, Row, Col } = require('../librairies/react-flex-grid');
var image = require('../librairies/fade-image');
var modal = require('../librairies/modal');

module.exports = {
    React: react,
    Router: router,
    Reflux: reflux,
    Requester: requester,
    Actions: actions,
    Auth: auth,
    Row: Row,
    Box: Box,
    Col: Col,
    styles: style,
    Image: image,
    Modal: modal
};