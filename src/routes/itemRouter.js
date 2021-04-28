var express = require('express');
var router = express.Router();
var itemController = require('../controllers/itemController');

 /**
 * @description api to get all items
 */
 router.get("/items", itemController.list);


module.exports = router;
