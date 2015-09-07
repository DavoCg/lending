var React = require('react');
var Field = require('./Field');
var _ = require('lodash');

var Text = React.createClass({
    onFieldChange(e){
        this.props.onFieldChange.call(this, this.props.field.name, e.target.value);
    },

    render(){

        var defaultStyle = {
            width: 97.5 + '%',
            maxWidth: 97.5 + '%',
            height: '160px',
            padding: 3 + 'px'
        };

        return (
            <div>
                <textarea
                    className='text-area'
                    style={defaultStyle}
                    value={this.props.field.value}
                    onChange={this.onFieldChange}>
                    </textarea>
            </div>
        )
    }
});


module.exports = Text;
