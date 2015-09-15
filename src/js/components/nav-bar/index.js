var { React, Router, Row, Col, Modal, styles} = require('../../utils/base');
var { LoginModal } = require('../../components/modals');
var { RouteHandler, Link } = Router;

var NavBar = React.createClass({

    showModal: function showModal(){
        this.refs.loginModal.show();
    },

    render: function render(){

        var style = this.props.style || styles.home.navbar;
        var lendingColor = this.props.lendingColor || 'white';

        return (
            <Row style={style}>

                <Modal width={18} ref='loginModal'>
                    <LoginModal/>
                </Modal>



                <Col
                    lg={24}
                    md={24}
                    sm={24}
                    xs={24}>
                    <Row>
                        <Col
                            offLg={1}
                            offMd={1}
                            offSm={1}
                            offXs={1}
                            lg={6}
                            md={6}
                            sm={6}
                            xs={6}>
                            <Link style={styles.common.link} to="home">
                                <p style={styles.nav.logoHome}>Davo <span style={{color: lendingColor}}>Lending</span></p>
                            </Link>
                        </Col>
                        <Col
                            offLg={11}
                            offMd={11}
                            offSm={11}
                            offXs={11}
                            lg={2}
                            md={2}
                            sm={2}
                            xs={2}>
                            <p  className='nav-item nav-item-bordered' style={styles.nav.getCredit}>Obtenir un prêt</p>
                        </Col>
                        <Col
                            lg={2}
                            md={2}
                            sm={2}
                            xs={2}>
                            <p style={styles.nav.navItem}>
                                <span className='nav-item' onClick={this.showModal}>Connexion</span>
                                <span className='nav-item' style={{marginLeft: '15px'}}>Inscription</span>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
});

module.exports = NavBar;