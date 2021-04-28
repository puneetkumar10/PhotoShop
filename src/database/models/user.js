var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var user = new Schema({
    id: ObjectId,
    username : {type: String, unique: true, required: true},
    password : {type: String, required: true},
});
module.exports = mongoose.model('user',user);