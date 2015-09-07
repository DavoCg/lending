var components = require('adotcomponents');

components.start(function onStart(err){
    if(err) throw err;
    components.get('server').start();
});