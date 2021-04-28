var mongoose = require('mongoose');
var userModel = require('../models/user');
var errorFactory = require('../../helper/errorFactory');

function saveRecord(username, password) {
    return new Promise((resolve, reject) => {
        var userModel = mongoose.model('user');
        var userRecord = new userModel()
        userRecord.username = username;
        userRecord.password = password;
        userRecord.save((err, data) => {
            if (err) {
                reject(errorFactory.dataBaseError(err));
            } else {
                console.log("data stored successfully");
                resolve(data);
            }
        });
    })
}

function getUser(userId) {
    return new Promise(async (resolve, reject) => {
        try {
            return resolve(await userModel.findOne({ "username": userId }));
        }
        catch (error) {
            return reject(errorFactory.dataBaseError(error));
        }
    })
}
module.exports = {saveRecord , getUser}