var React = require('react');

var Image = React.createClass({

    getInitialState: function getInitialState(){
        return ({
            opacity: 0
        })
    },

    fadeIn: function fadeIn(){
        return this.setState({
            opacity: 1
        })
    },

    render: function render(){
        let style = this.props.style || {};
        style.transition = `opacity ${this.props.speed || 1}s`;
        style.opacity = this.state.opacity;

        return (
            <img
                {...this.props}
                style={style}
                src={this.props.src}
                onLoad={this.fadeIn}
                />
        )
    }
});

module.exports = Image;