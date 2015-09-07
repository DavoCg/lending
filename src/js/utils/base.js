var react = require('react');
var router = require('react-router');
var reflux = require('reflux');
var actions = require('../actions');
var auth = require('./auth');
var style = require('../styles');
var { Box, Row, Col } = require('../librairies/react-flex-grid');
var image = require('../librairies/fade-image');

module.exports = {
    React: react,
    Router: router,
    Reflux: reflux,
    Actions: actions,
    Auth: auth,
    Row: Row,
    Box: Box,
    Col: Col,
    styles: style,
    Image: image
};