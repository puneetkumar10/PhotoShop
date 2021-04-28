var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var item = new Schema({
    id: ObjectId,
    name : {type: String, unique: true, required: true},
    description : {type: String, required: true},
    price : {type: Number, required: true},
    make : {type: Number, required: true},
});
module.exports = mongoose.model('item',item);