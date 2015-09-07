var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var sizes = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    lgm: 'lgm',
    mdm: 'mdm'
};

var offsets = {
    offXs: 'xs-offset',
    offSm: 'sm-offset',
    offMd: 'md-offset',
    offLg: 'lg-offset'
};

var Col = React.createClass({
    render: function render(){
        var classes = [];

        _.forIn(this.props, (value, key) =>{
            if(sizes[key]) classes.push('col-' + key + '-' + value);
            if(offsets[key]) classes.push('col-' + offsets[key] + '-' + value);
        });

        if(this.props.classes){
            _.each(this.props.classes, (classe) =>{
                classes.push(classe);
            })
        }

        var style = this.props.style || {};

        return (
            <div style={style} className={classNames(classes)}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Col;
