var mongojs = require('mongojs');
var mongoose = require('mongoose');

mongoose.connect('mongodb://bkbartondesign-babyday-1867911:27017/babyday');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {});

// var Schema = mongoose.Schema;

// var bottleFeedSchema = new Schema({
//   oz:Number,
//   dttm:{type:Date,default:Date.now},
//   dttmFin:{type:Date, default:Date.now},
//   comments:String
// });

// var BottleFeed = mongoose.model('bottleFeed',bottleFeedSchema);

// module.exports = BottleFeed;