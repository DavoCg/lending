var colors = require('./colors');

module.exports = {
    header:{
        height: '80px',
        background: 'url("../images/symphony.png")',
        borderBottom: 'solid 1px rgba(170, 170, 170, 0.30)'
    },
    box: {
        backgroundColor: 'white',
        padding: 0,
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        marginTop: '15px',
        color: colors.textColor
    },
    pictureBox: {
        width: '60px',
        height: '60px',
        borderRadius: '30px',
        float: 'right',
        marginRight: '5px',
        marginTop: '-30px',
        overflow: 'auto',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    },
    picture: {
        width: '60px',
        height: '60px',
        borderRadius: '30px',
        '-webkit-saturate': '250%'
    },
    content: {
        padding: '5px',
        fontSize: '1.1em'
    },
    description: {
        padding: '5px',
        paddingTop: '10px',
        paddingLeft: '10px',
        paddingRight: '15px',
        height: '75px',
        fontFamily: 'sourceSansProLight',
        fontSize: '0.9em'
    },
    status: {
        paddingLeft: '15px',
        paddingRight: '15px',
        marginTop: '10px',
        paddingBottom: '10px'
    }
};