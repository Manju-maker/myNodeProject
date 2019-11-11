var mongoose = require('mongoose');
var details = mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    pass:{type:String},
    verify:{type:Boolean , default:false}
});
module.exports=mongoose.model("user",details);

