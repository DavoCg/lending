var { React, Router, Row, Col, styles} = require('../../utils/base');
var { RouteHandler } = Router;
var _ = require('lodash');

var outer = {
    height: '8px',
    borderRadius: '3px',
    backgroundColor: 'rgba(213, 213, 213, 0.25)',
    border: 'solid 1px rgba(170, 170, 170, 0.15)'
};

var StatusBar = React.createClass({

    getInitialState: function getInitialState(){
        return ({
            innerWidth: 0,
            percent: 0
        })
    },

    componentDidMount: function componentDidMount(){
        var self = this;
        this.setInnerWidth();
        window.addEventListener('resize', function(){
            self.setInnerWidth();
        })
    },

    componentWillUnmount: function componentWillUnmount(){
        window.removeEventListener('resize');
    },

    setInnerWidth: function setInnerWidth(){
        var outerWidth = document.getElementById('outer').offsetWidth;
        var ratio = this.props.current / this.props.max;
        return this.setState({
            innerWidth: ratio <= 1 ? outerWidth * ratio : outerWidth,
            percent: Math.round(ratio * 100)
        });
    },

    render: function render(){

        var inner = {
            height: '8px',
            width: this.state.innerWidth + 'px',
            borderRadius: '3px',
            backgroundColor: 'rgba(102, 230, 156, 0.83)'
        };

        return (
            <div>
                <div id='outer' style={outer}>
                    <div style={inner}>
                    </div>
                </div>
                <div style={{marginTop: '3px'}}>
                    <span><strong>{this.props.current}</strong> € collectés</span>
                    <span
                        style={{float: 'right'}}><strong>{this.state.percent}</strong>%</span>
                </div>
            </div>

        );
    }
});

module.exports = StatusBar;