var { React, Router, Reflux, Actions, Auth, Row, Box, Col, Image, styles } = require('../utils/base');
var { NavBar } = require('../components');
var ReactTabs = require('react-tabs');
var { RouteHandler, Navigation } = Router;
var { Tab, Tabs, TabList, TabPanel } = ReactTabs;
var _ = require('lodash');
var Highcharts = require('react-highcharts');

var Account = React.createClass({
    mixins: [Reflux.ListenerMixin, Navigation, Auth],

    handleSelected: function handleSelected(index, last){
        console.log('Selected tab: ' + index + ', Last tab: ' + last);
    },

    render: function render(){

        var config = {
            title: {
                text: 'Dépenses',
                x: -20,
                y: 20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            tooltip: {
                valueSuffix: '€'
            },
            series: [{
                name: 'Dépenses',
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
        };


        return (
            <div>
                <Row>
                    <Col
                        raw={true}
                        lg={24}
                        md={24}
                        xs={24}
                        sm={24}>
                        <NavBar style={styles.account.navbar}/>
                    </Col>
                </Row>
                <Row>
                    <Col
                        style={{padding: '15px'}}
                        lg={6}
                        md={8}
                        sm={8}
                        xs={24}>
                        <div style={styles.account.userBox}>
                            <div style={styles.account.userBoxHeader}>
                            </div>
                            <div style={styles.account.userBoxContent}>
                                <span style={styles.account.userBoxName}>{'David'}, {'22'}</span>
                                <Image className='image-filter' speed={0.5} style={styles.account.userBoxPicture} src={'https://scontent-ams3-1.xx.fbcdn.net/hphotos-prn2/v/t1.0-9/537928_10200506049067130_2048105753_n.jpg?oh=8e3b3742d6ae434623bc4fef386c0daf&oe=56A0140A'} alt=""/>
                            </div>
                            <div style={styles.account.userBoxDescription}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci cumque, esse exercitationem nobis quo ullam unde. Accusantium animi consequuntur culpa dolorem ex exercitationem magni molestiae, quidem. Itaque iusto, totam.
                            </div>
                        </div>
                    </Col>

                    <Col
                        style={{padding: '15px'}}
                        lg={18}
                        md={16}
                        sm={16}
                        xs={24}>
                            <Tabs
                                onSelect={this.handleSelected}
                                selectedIndex={0}>
                                <TabList>
                                    <Tab>Mes dépenses</Tab>
                                    <Tab>Mes investissements</Tab>
                                    <Tab>Mes gains</Tab>
                                </TabList>
                                    <TabPanel>
                                        <div style={styles.common.shadow}>
                                            <Highcharts config={config}></Highcharts>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>investissement</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>Gains</p>
                                    </TabPanel>
                            </Tabs>
                    </Col>
                </Row>
            </div>
        );
    }
});
module.exports = Account;
