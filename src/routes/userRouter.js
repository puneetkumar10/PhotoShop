var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/**
 * @description api to register user
 * @param username String
 * @param password String
 */
router.post("/register", userController.register);

/**
 * @description api to login user
 * @param username String
 * @param password String
 */
router.post("/login", userController.login);

module.exports = router;