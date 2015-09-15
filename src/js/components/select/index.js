var { React, Router, Row, Col, styles} = require('../../utils/base');
var { RouteHandler, Link } = Router;
var _ = require('lodash');

var Select = React.createClass({
    render: function render(){
        return (
            <select style={this.props.style || {}}>
                {_.map(this.props.options, function(option){
                    return (<option value={option.value}>{option.label}</option>)
                })}
            </select>
        );
    }
});

module.exports = Select;