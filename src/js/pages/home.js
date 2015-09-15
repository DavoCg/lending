var { React, Router, Reflux, Actions, Auth, Row, Box, Col, styles } = require('../utils/base');
var { NavBar, ContentBox, Footer } = require('../components');
var { authStore, loanStore } = require('../stores');
var { RouteHandler, Navigation } = Router;
var _ = require('lodash');

var Home = React.createClass({

    mixins: [Reflux.ListenerMixin, Navigation, Auth],

    getInitialState: function getInitialState(){
        return ({
            loans: []
        })
    },
    componentWillMount: function componentWillMount(){
        this.listenTo(loanStore, this.onLoans);
        Actions.fetchLoans();
    },
    onLoans: function onLoans(loans){
        this.setState({
            loans: loans
        });
    },
    renderBoxes: function renderBoxes(boxes){
        return _.map(boxes, function(boxe){
            return ( <ContentBox data={boxe}/>)
        });
    },
    render: function render(){
        return (
            <div>
                <Row style={styles.home.banner}>
                    <Col
                        raw={true}
                        lg={24}
                        md={24}
                        xs={24}
                        sm={24}>
                        <NavBar/>
                        <Row>
                            <Col
                                style={{marginTop: '130px'}}
                                lg={24}
                                md={24}
                                sm={24}
                                xs={24}>
                                <p style={styles.home.slogan}>Bienvenue sur Davo Lending</p>
                                <p style={styles.home.subSlogan}>Soyez prêt à emprunter.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col
                        lg={24}
                        md={24}
                        xs={24}
                        sm={24}>
                        <Row>
                            {this.renderBoxes(this.state.loans)}
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Footer/>
                </Row>

            </div>
        );
    }
});


module.exports = Home;
