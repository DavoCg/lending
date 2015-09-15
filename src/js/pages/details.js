var { React, Router, Reflux, Actions, Auth, Row, Box, Col, styles, Image } = require('../utils/base');
var { NavBar, ContentBox } = require('../components');
var { authStore, loanStore } = require('../stores');
var { RouteHandler, Navigation } = Router;
var _ = require('lodash');

var Details = React.createClass({

    mixins: [Reflux.ListenerMixin, Navigation, Auth],

    getInitialState: function getInitialState(){
        return ({
            loan: {user: {}}
        })
    },
    componentWillMount: function componentWillMount(){
        var {id} = this.props.params;
        this.listenTo(loanStore, this.onLoan);
        Actions.fetchLoan(id);
    },
    onLoan: function onLoan(loan){
        this.setState({
            loan: loan
        });
    },
    render: function render(){
        return (
        <div>
            <Row>
                <Col
                    raw={true}
                    lg={24}
                    md={24}
                    xs={24}
                    sm={24}>
                    <NavBar style={styles.details.navbar}/>
                </Col>
            </Row>
            <Row>
                <Col
                    style={{padding: '15px'}}
                    lg={6}
                    md={8}
                    sm={8}
                    xs={24}>
                    <div style={styles.details.userBox}>
                        <div style={styles.details.userBoxHeader}>
                        </div>
                        <div style={styles.details.userBoxContent}>
                            <span style={styles.details.userBoxName}>{this.state.loan.user.name}, {this.state.loan.user.age}</span>
                            <Image className='image-filter' speed={0.5} style={styles.details.userBoxPicture} src={this.state.loan.user.picture} alt=""/>
                        </div>
                        <div style={styles.details.userBoxDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci cumque, esse exercitationem nobis quo ullam unde. Accusantium animi consequuntur culpa dolorem ex exercitationem magni molestiae, quidem. Itaque iusto, totam.
                        </div>
                        <div style={styles.details.userBoxHistory}>
                            <span>3 emprunts terminés</span>
                            <span style={{float: 'right'}}>1 emprunts en cours</span>
                        </div>
                    </div>
                </Col>

                <Col
                    style={{padding: '15px'}}
                    lg={18}
                    md={16}
                    sm={16}
                    xs={24}>
                    <div style={styles.details.loanBox}>

                    </div>
                </Col>
            </Row>
        </div>
        );
    }
});


module.exports = Details;
