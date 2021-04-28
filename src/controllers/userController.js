var userService = require('../services/userService');
var responseService = require('../services/responseService');

async function register(req, res){
    try {
        let result = await userService.register(req.body.username, req.body.password);
        responseService.response(req, null, result, res);
    } catch (error) {
        responseService.response(req, error, null, res);
    }
};

async function login(req, res){
    try {
        let result = await userService.login(req.body.username, req.body.password);
        responseService.response(req, null, result, res);
    } catch (error) {
        responseService.response(req, error, null, res);
    }
};

module.exports = { register , login }