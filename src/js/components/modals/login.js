var { React, Router, Row, Col, Modal, styles, Image} = require('../../utils/base');
var _ = require('lodash');

var LoginModal = React.createClass({
    render: function render(){
        return (
        <Row>
            <Col
                style={styles.modals.login.container}
                lg={24}
                md={24}
                sm={24}
                xs={24}>
                <div style={styles.modals.login.buttonGoogle}>
                    <span><Image style={styles.modals.login.logoGoogle} src='../images/google-official.png' /></span>
                    <strong>Connexion avec Google</strong>
                </div>
                <div style={styles.modals.login.buttonFacebook}>
                    <span><Image style={styles.modals.login.logoFacebook} src='../images/fb.png' /></span>
                    <strong>Connexion avec Facebook</strong>
                </div>
            </Col>
        </Row>
        );
    }
});

module.exports = LoginModal;
