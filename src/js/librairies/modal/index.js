var React = require('react');
var classnames = require('classnames');

var Modal = React.createClass({

    getInitialState: function getInitialState(){
        return ({
            backgroundClasses: ['modal-background', 'modal-no-display'],
            classes: ['modal', 'box-shadow-1']
        })
    },

    componentDidMount: function componentDidMount() {
        window.addEventListener("keydown", this.listenKeyboard, true);
    },

    listenKeyboard: function listenKeyboard(e) {
        if(e.key === "Escape" || e.keyCode === 27) this.hide();
    },

    show: function show(){
        this.setState({
            backgroundClasses: ['modal-background'],
            classes: ['modal', 'box-shadow-1', 'modal-open']
        })
    },

    hide: function hide(){
        this.setState({
            backgroundClasses: ['modal-background', 'modal-no-display-animation'],
            classes: ['modal', 'box-shadow-1', 'modal-close']
        })
    },

    noOp: function noOp(e){
        e.stopPropagation();
    },

    render: function render(){

        var backgroundClasses = classnames(this.state.backgroundClasses);
        var classes = classnames(this.state.classes);

        var modalStyle = {
            width: this.props.width + 'vw' || '30vw'
        };

        return (
            <div onClick={this.hide} className={backgroundClasses}>
                <div onClick={this.noOp} style={modalStyle} className={classes} >
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = Modal;