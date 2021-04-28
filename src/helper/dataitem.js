const itemdb = require("../database/dbservice/itemdb")

async function initialize() {
    let items = [
        { name: "item1", description: "description1", price: 1000, make: 2018 },
        { name: "item2", description: "description2", price: 1250, make: 2009 },
        { name: "item3", description: "description3", price: 1500, make: 2019 },
        { name: "item4", description: "description4", price: 1300, make: 2018 },
        { name: "item5", description: "description5", price: 2000, make: 2020 },
        { name: "item6", description: "description6", price: 2200, make: 2014 },
        { name: "item7", description: "description7", price: 3500, make: 2017 },
        { name: "item8", description: "description8", price: 7000, make: 2021 },
      ];

    // adding items to database 
    for (let i = 0 ; i < items.length ; i ++ ) {
        await itemdb.saveRecord(items[i]["name"] , items[i]["description"] , items[i]["price"] , items[i]["make"]);
    }
}


module.exports = { initialize }