var itemdb = require('../database/dbservice/itemdb');
var errorFactory = require('../helper/errorFactory');

function list(){
    return new Promise(async (resolve, reject) => {
        try {
            let result = await itemdb.getRecord();
            return resolve(result)
        } catch (error) {
            return reject(errorFactory.dataBaseError(error));
        }
    })
}

module.exports = { list } 