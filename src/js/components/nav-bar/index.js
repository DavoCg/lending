var { React, Router, Row, Col, styles} = require('../../utils/base');
var { RouteHandler } = Router;

var NavBar = React.createClass({

    render: function render(){
        return (
            <Row style={styles.home.navbar}>
                <Col
                    lg={24}
                    md={24}
                    sm={24}
                    xs={24}>
                    <Row>
                        <Col
                            lg={8}
                            md={8}
                            sm={8}
                            xs={8}>
                            <p style={styles.nav.logoHome}>Davo Lending</p>
                        </Col>
                        <Col
                            offLg={10}
                            offMd={10}
                            offSm={10}
                            offXs={10}
                            lg={2}
                            md={2}
                            sm={2}
                            xs={2}>
                            <p style={styles.nav.getCredit}>Obtenir un prêt</p>
                        </Col>
                        <Col
                            lg={2}
                            md={2}
                            sm={2}
                            xs={2}>
                            <p style={styles.nav.navItem}>
                                <span>Connexion</span>
                                <span style={{marginLeft: '15px'}}>Inscription</span>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
});

module.exports = NavBar;