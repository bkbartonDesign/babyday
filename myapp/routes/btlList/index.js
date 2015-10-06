//query db for all bottle feedings...
//return all bottle feedings...

//var express = require("express");
//var router = express.Router();
//var mongoose = require("../../mongoose");
var Bottle = require("../../models");



var getBtlList = (function(){
    
    var res = {};
    
    var query = Bottle.bottleModel.find({$and:[{oz:{$exists:true}},{oz:{$gt:0}}]});
    query.select('oz comments dttm dttmFin');
    query.exec(function (err, bottle) {
      if (err) console.log(err);
      else{
          res = bottle;
      }
      
    });
    
    return res;
});

module.exports = getBtlList;




