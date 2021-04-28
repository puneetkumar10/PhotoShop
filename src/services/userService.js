var config = require('../../config/config').config();
var userdb = require('../database/dbservice/userdb');
var errorFactory = require('../helper/errorFactory');
var jwtToken = require('../helper/jsonWebToken');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(config.salt);

function register(username, password) {
    return new Promise(async (resolve, reject) => {
        try {
            // save password in encrypted form
            await userdb.saveRecord(username, cryptr.encrypt(password));
            return resolve("user created successfully");
        } catch (error) {
            return reject(error);
        }
    })
}

function login(username, password) {
    return new Promise(async (resolve, reject) => {
        try {
            // fetch the password from db and decrypt it to compare
            let user = await userdb.getUser(username);
            if (!user) {
                reject(errorFactory.notFoundData("user not found"));
            }
            // check for correct password
            let userPass = cryptr.decrypt(user.password)
            if (userPass != password) {
                reject(errorFactory.invalidLoginCredentials("invalid login credentials"));
            }
            // generate jwt
            let jwt = jwtToken.genAccessToken({ userId: user._id, username: username });
            return resolve(jwt);
        } catch (error) {
            return reject(error);
        }
    })
}

module.exports = { register, login }