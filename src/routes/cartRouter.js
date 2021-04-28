var express = require('express');
var router = express.Router();
var cartController = require('../controllers/cartController');


/**
 * @description api to add item to cart
 * @param itemname String
 */
 router.post("/add", cartController.add);

// fetch user cart

/**
 * @description get user cart
 * @param username String
 */
 router.get("/usercart", cartController.userCart);



module.exports = router;
