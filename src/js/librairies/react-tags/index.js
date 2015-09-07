var React = require('react');
var _ = require('lodash');

var ReactTags = React.createClass({

    getInitialState: function getInitialState(){
        return ({
            tags: [],
            input: ''
        })
    },

    componentWillReceiveProps: function componentWillReceiveProps(next){
        this.setState({
            tags: next.tags
        })
    },

    add: function add(tag){
        if(!tag) return;
        if(this.state.tags.indexOf(tag) === -1){
            this.setState({
                input: ''
            });
            this.props.add(tag)
        }
    },

    del: function(i){
        this.props.del(i);
    },

    onInputChange: function onInputChange(e){
        this.setState({
            input: e.target.value
        })
    },

    onSubmit: function onSubmit(){
        this.add(this.state.input)
    },

    render: function render(){
        var tags = [];
        var self = this;
        _.each(this.state.tags, function(tag, i){
            tags.push(
                <span className="tag" onClick={self.del.bind(self, i)}>{tag}</span>
            )
        });

        var defaultStyle = {
            width: 89.5 + '%',
            height: 35 + 'px',
            padding: 3 + 'px',
            display: 'inline-block'
        };

        var btnStyle = {
            width: '6.5%',
            height: '33px',
            lineHeight: '33px',
            display: 'inline-block',
            marginTop: '-7px'
        };

        return(

            <div style={{width: '100%'}}>
                <div style={{marginBottom: '10px'}}>
                    <input
                        style={defaultStyle}
                        value={this.state.input}
                        onChange={this.onInputChange}
                        type="text"/>
                    <div
                        style={btnStyle}
                        className='pecho-btn'
                        onClick={this.onSubmit}>
                        <i className="fa fa-plus"></i>
                    </div>
                </div>
                <div>
                    {tags}
                </div>
            </div>
        )
    }
});

module.exports = ReactTags;