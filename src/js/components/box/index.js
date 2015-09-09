var { React, Router, Row, Col, Image,  styles} = require('../../utils/base');
var StatusBar = require('../status-bar');
var { RouteHandler } = Router;

var Box = React.createClass({

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
                    </div>
                    <div style={styles.box.content}>
                        {this.props.data.name}, {this.props.data.age}
                        <div style={styles.box.pictureBox}>
                            <Image className='image-filter' speed={0.9} style={styles.box.picture} src={this.props.data.picture} alt=""/>
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