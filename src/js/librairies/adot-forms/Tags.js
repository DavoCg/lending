var React = require('react');
var Field = require('./Field');
var _ = require('lodash');
var ReactTags = require('../react-tags');

var Text = React.createClass({
    onFieldChange(tags){
        this.props.onFieldChange.call(this, this.props.field.name, tags);
    },

    del: function del(i) {
        var tags = this.props.field.value;
        tags.splice(i, 1);
        this.onFieldChange(tags);
    },

    add: function(tag) {
        var tags = this.props.field.value;
        tags.push(tag);
        this.onFieldChange(tags);
    },

    render(){
        console.log(this.props.field.value);
        return (
            <div>
                <ReactTags tags={this.props.field.value}
                           del={this.del}
                           add={this.add} />
            </div>
        )
    }
});


module.exports = Text;
