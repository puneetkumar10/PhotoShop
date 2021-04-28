var cartdb = require('../database/dbservice/cartdb');
var errorFactory = require('../helper/errorFactory');

function add(user , itemname){
    return new Promise(async (resolve, reject) => {
        try {
            let result = await cartdb.saveRecord(user , itemname);
            return resolve(result)
        } catch (error) {
            return reject(errorFactory.dataBaseError(error));
        }
    })
}

function userCart(username){
    return new Promise(async (resolve, reject) => {
        try {
            let result = await cartdb.getCart(username);
            return resolve(result)
        } catch (error) {
            return reject(errorFactory.dataBaseError(error));
        }
    })
}

module.exports = { add , userCart} 