var { React, Router, Row, Col, Image, styles} = require('../../utils/base');
var StatusBar = require('../status-bar');
var { RouteHandler, Link } = Router;
var _ = require('lodash');

var Box = React.createClass({

    renderTags: function renderTags(tags){
        return _.map(tags, function(tag){
            return <span style={styles.box.tag}>{tag}</span>
        })
    },
    render: function render(){
        return (
            <Col
                lg={6}
                lgm={8}
                md={12}
                sm={12}
                xs={24}>
                <div style={styles.box.box}>
                    <div style={styles.box.header}>
                        {this.renderTags(this.props.data.tags)}
                    </div>
                    <div style={styles.box.content}>
                        <Link style={styles.common.link} to="details" params={{id: this.props.data._id}}>
                            {this.props.data.user.name}, {this.props.data.user.age}
                        </Link>
                        <div style={styles.box.pictureBox}>
                            <Image className='image-filter' speed={0.2} style={styles.box.picture} src={this.props.data.user.picture} alt=""/>
                        </div>
                    </div>
                    <div style={styles.box.description}>
                        {this.props.data.description}
                    </div>
                    <div style={styles.box.status}>
                        <StatusBar max={this.props.data.goal} current={this.props.data.current}/>
                    </div>
                </div>
            </Col>
        );
    }
});

module.exports = Box;