var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BottleSchema = new Schema({
  oz:Number,
  dttm:{type:Date,default:Date.now},
  dttmFin:{type:Date, default:Date.now},
  comments:String
});

var Bottle = mongoose.model('bottleFeed',BottleSchema);

exports.bottleModel = Bottle;