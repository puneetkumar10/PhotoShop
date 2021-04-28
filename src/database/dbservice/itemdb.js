var mongoose = require('mongoose');
var itemModel = require('../models/item');
var errorFactory = require('../../helper/errorFactory');

function saveRecord(name, description , price , make) {
    return new Promise((resolve, reject) => {
        var itemModel = mongoose.model('item');
        var itemRecord = new itemModel()
        itemRecord.name = name;
        itemRecord.description = description;
        itemRecord.price = price;
        itemRecord.make = make;
        itemRecord.save((err, data) => {
            if (err) {
                reject(errorFactory.dataBaseError(err));
            } else {
                console.log("data stored successfully");
                resolve(data);
            }
        });
    })
}

function getRecord() {
    return new Promise(async (resolve, reject) => {
        try {
            return resolve(await itemModel.find({}));
        }
        catch (error) {
            return reject(errorFactory.dataBaseError(error));
        }
    })
}

function getItem(itemName) {
    return new Promise(async (resolve, reject) => {
        try {
            return resolve(await itemModel.findOne({ "name" : itemName}));
        }
        catch (error) {
            return reject(errorFactory.dataBaseError(error));
        }
    })
}
module.exports = {saveRecord  , getRecord , getItem}