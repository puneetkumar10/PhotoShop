var itemService = require('../services/itemService');
var responseService = require('../services/responseService');

async function list(req, res){
    try {
        let result = await itemService.list();
        responseService.response(req, null, result, res);
    } catch (error) {
        responseService.response(req, error, null, res);
    }
};

module.exports = { list }