var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var Row = React.createClass({
    render: function render(){
        var classes = ['box'];
        var style = {};
        var id = '';

        if(this.props.classes){
            _.each(this.props.classes, (classe) =>{
                classes.push(classe);
            })
        }

        if(this.props.style){
            style = this.props.style;
        }

        if(this.props.id){
            id = this.props.id
        }

        return (
            <div id={id} style={style} className={classNames(classes)}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Row;
