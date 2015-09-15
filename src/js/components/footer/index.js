var { React, Router, Row, Col, styles} = require('../../utils/base');
var { RouteHandler, Link } = Router;
var Select = require('../select');
var _ = require('lodash');

var availableOptions = {
    currencies: [
        {label: 'Euros', value: 'euros'},
        {label: 'Dollars', value: 'dollars'}
    ],
    lang: [
        {label: 'Francais', value: 'fr'},
        {label: 'English', value: 'en'}
    ]
};

var availableLinks = {
    society: [
        {label: 'À propos'},
        {label: 'Carrières'},
        {label: 'Presse'},
        {label: 'Blog'}
    ],
    discover: [
        {label: 'Confiance et sécurité'},
        {label: 'Inviter des amis'},
        {label: 'La selection Davo Lending'},
        {label: 'Application Mobile'}
    ],
    services: [
        {label: 'Ce que nous faisons'},
        {label: 'lorem'},
        {label: 'lorem ipsum'},
        {label: 'upsus lean'}
    ]
};

var Footer = React.createClass({

    generateLinks: function generateLinks(type){
        var links = availableLinks[type];
        var list = _.map(links, function(link){
            return <li style={styles.footer.liStyle}>{link.label}</li>
        });
        return (<ul style={styles.footer.ulStyle}>{list}</ul>)
    },

    render: function render(){
        return (
            <Col
                style={styles.footer.container}
                lg={24}
                md={24}
                xs={24}
                sm={24}>
                <Row>
                    <Col
                        style={styles.footer.firstRow}
                        offLg={7}
                        offMd={6}
                        offSm={6}
                        lg={10}
                        md={12}
                        sm={12}
                        xs={24}>

                        <Row>
                            <Col
                                lg={6}
                                md={6}
                                sm={6}
                                xs={6}>
                                <Select
                                    style={styles.footer.select}
                                    options={availableOptions.currencies}/>
                                <Select
                                    style={styles.footer.select}
                                    options={availableOptions.lang}/>
                            </Col>
                            <Col
                                style={styles.footer.paraph}
                                lg={6}
                                md={6}
                                sm={6}
                                xs={6}>
                                Société
                                {this.generateLinks('society')}
                            </Col>
                            <Col
                                style={styles.footer.paraph}
                                lg={6}
                                md={6}
                                sm={6}
                                xs={6}>
                                Découvrir
                                {this.generateLinks('discover')}
                            </Col>
                            <Col
                                style={styles.footer.paraph}
                                lg={6}
                                md={6}
                                sm={6}
                                xs={6}>
                                Services
                                {this.generateLinks('services')}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col
                        offLg={8}
                        offMd={8}
                        offSm={6}
                        lg={8}
                        md={8}
                        sm={12}
                        xs={24}>
                        <div style={styles.footer.meetUs}>
                            Rejoignez-nous sur
                        </div>
                        <div style={styles.footer.socialIconsContainer}>
                            <i style={styles.footer.socialIcon} className="fa fa-facebook"></i>
                            <i style={styles.footer.socialIcon} className="fa fa-google-plus"></i>
                            <i style={styles.footer.socialIcon} className="fa fa-twitter"></i>
                            <i style={styles.footer.socialIcon} className="fa fa-instagram"></i>
                            <i style={_.merge(styles.footer.socialIcon, {paddingLeft: '6px'})} className="fa fa-linkedin"></i>
                            <i style={styles.footer.socialIcon} className="fa fa-youtube-play"></i>
                        </div>
                        <div style={styles.footer.copyright}>
                            © Davo Lending, Inc.
                        </div>
                    </Col>
                </Row>
            </Col>
        );
    }
});

module.exports = Footer;