var devConfig = require('./env/config.dev');
var localConfig = require('./env/config.local');


var config = {
    dev: devConfig,
    local: localConfig,
}

module.exports = {
    config: function () { return config[process.env.NODE_ENV] || config.local }
}