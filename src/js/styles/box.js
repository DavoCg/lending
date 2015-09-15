var colors = require('./colors');

module.exports = {
    header:{
        height: '35px',
        background: 'url("../images/paper_fibers.png")',
        padding: '8px',
        paddingTop: '10px',
        borderBottom: 'solid 1px rgba(170, 170, 170, 0.30)',
        opacity: 0.7
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
        marginTop: '-40px',
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
        padding: '10px',
        fontWeight: '900',
        fontSize: '1.1em'
    },
    description: {
        padding: '5px',
        paddingTop: '5px',
        paddingLeft: '10px',
        paddingRight: '15px',
        height: '65px',
        fontWeight: '100',
        fontSize: '0.95em',
        opacity: 0.6
    },
    status: {
        paddingLeft: '15px',
        paddingRight: '15px',
        marginTop: '10px',
        paddingBottom: '10px'
    },
    tag: {
        border: 'solid 1px rgba(170, 170, 170, 0.50)',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '3px',
        paddingBottom: '3px',
        borderRadius: '2px',
        margin: 0,
        backgroundColor: 'rgba(209, 209, 209, 0.4)',
        fontSize: '0.90em',
        marginRight: '8px'
    }
};