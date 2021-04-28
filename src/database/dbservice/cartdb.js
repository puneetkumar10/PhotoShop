var mongoose = require('mongoose');
var cartModel = require('../models/cart');
var errorFactory = require('../../helper/errorFactory');
var itemdb = require("./itemdb");

function saveRecord(user, item) {
    return new Promise(async (resolve, reject) => {
        try {
            // fetch item using name
            let itemObj = await itemdb.getItem(item);

            // if user cart already exists
            let cart = await getCart(user);
            if (cart && cart.item) {
                // add item in items array
                let result = await cartModel.update({ _id: cart._id }, { $push: { item: itemObj } })
                resolve(result);
            } else {
                // create new cart and add first item
                const cartRecord = new cartModel();
                cartRecord.user = user;
                cartRecord.item = itemObj;
                let result = await cartRecord.save();
                resolve(result);
            }
        } catch (error) {
            reject(error)
        }
    })
}

function getCart(username) {
    return new Promise(async (resolve, reject) => {
        try {
            return resolve(await cartModel.findOne({ "user": username }));
        }
        catch (error) {
            return reject(errorFactory.dataBaseError(error));
        }
    })
}

module.exports = { saveRecord, getCart }