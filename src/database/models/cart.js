var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var cart = new Schema({
    id : ObjectId,
    user : {type: Schema.Types.ObjectId, ref: 'user', required: true}, 
    item : [{
        type:Schema.Types.ObjectId,
        ref:'item'
    }]
});
module.exports = mongoose.model('cart',cart);