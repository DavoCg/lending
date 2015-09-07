var models = require('./models');

module.exports = function campaignsModel(resource){
    var model = resource.config.model;
    if(!model) throw new Error('Missing model for resource ' + resource.name);
    return models[model];
};
