var mongoose = require('mongoose');
var BottleSchema = require("../models/bottle.js");
var _ = require("lodash");

var Bottle = function(){
    this.bottleSchema = BottleSchema;
};



Bottle.prototype.findAll = function(callback){
    var query = this.bottleSchema.bottleModel.find({$and:[{oz:{$exists:true}},{oz:{$gt:0}}]});
    query.select('oz comments dttm dttmFin');
    query.exec(function (err, bottle) {
      if (err) return err;
      else{
          //console.log(bottle)
          _.forEach(bottle,function(btlobj,key){
            console.log("!!",btlobj);
          })
          callback(null, bottle);
      }
      
    });
};

Bottle.prototype.addBtl = function(btlObj, callback){

    var newbtl = new this.bottleSchema.bottleModel({oz:btlObj.oz,dttm:btlObj.dttm,dttmFin:btlObj.dttmFin,comments:btlObj.comments});
    console.log(newbtl);
    newbtl.save(function(err,res){
        if (err) return err;
        else{
            callback(null,res);
        }
    });

      
};


exports.Bottle = Bottle;