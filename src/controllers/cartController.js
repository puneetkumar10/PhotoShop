var cartService = require('../services/cartService');
var responseService = require('../services/responseService');

async function add(req, res){
    try {
        let result = await cartService.add( res.locals['userId'] , req.body.itemname);
        responseService.response(req, null, result, res);
    } catch (error) {
        responseService.response(req, error, null, res);
    }
};

async function userCart(req, res){
    try {
        let result = await cartService.userCart(res.locals['userId']);
        responseService.response(req, null, result, res);
    } catch (error) {
        responseService.response(req, error, null, res);
    }
};

module.exports = { add , userCart}