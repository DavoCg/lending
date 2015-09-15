var colors = require('./colors');

module.exports = {
    userBox: {
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        paddingBottom: '15px'
    },
    userBoxHeader: {
        height: '50px',
        background: 'url("../images/paper_fibers.png")',
        borderBottom: 'solid 1px rgba(170, 170, 170, 0.30)',
        opacity: 0.7
    },
    userBoxContent: {
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '5px'
    },
    userBoxName: {
        color: colors.textColor,
        fontSize: '1.1em',
        fontWeight: '900',
        marginTop: '50px'
    },
    userBoxPicture: {
        width: '60px',
        height: '60px',
        borderRadius: '30px',
        float: 'right',
        overflow: 'auto',
        marginTop: '-30px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    },
    userBoxDescription: {
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '15px',
        color: colors.textColor,
        fontWeight: '100',
        fontSize: '0.90em',
        opacity: 0.65
    },
    userBoxHistory: {
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '15px',
        color: colors.textColor,
        fontWeight: '100',
        fontSize: '0.90em'
    },
    navbar: {
        width: '100%',
        height: '50px',
        backgroundColor: colors.main,
        margin: '0'
    },
    loanBox: {
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        height: '200px'
    }
};


