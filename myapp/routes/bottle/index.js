var express = require("express");
var router = express.Router();
//var mongoose = require("../../mongoose");
var Bottle = require("../../models");
var btlProvider = require("../../providers/bottleProvider.js");

var bottleFeedings = new btlProvider.Bottle();

router.post('/addBtl',function(req,res,next){
    var dt = new Date();
    var btlObj = {
        oz:0,
        dttm:new Date(),
        dttmFin:new Date(),
        comments:""
    };    

    if(req.body){
        if(req.body.oz!=""){ btlObj.oz = req.body.oz; }
        if(req.body.dttm!=""){ btlObj.dttm = new Date(req.body.dttm); }
        if(req.body.dttmFin!=""){ btlObj.dttmFin = new Date(req.body.dttmFin); }
        if(req.body.comments!=""){ btlObj.comments = req.body.comments; }
        console.log(btlObj);
        
        bottleFeedings.addBtl(btlObj,function(error, docs){
            console.log(docs);
        });
        //bottleFeedings.addBtl(function(error, btlObj){
        //console.log(btlObj);
        
    }
    
    

});
        
      //res.render('index', { title: req.body });
      //var dt = new Date();
    //   var btlObj = {
    //     oz:0,
    //     dttm:new Date(),
    //     dttmFin:new Date(),
    //     comments:""
    //   };
      
    //   if(req.body){
    //     if(req.body.oz!=""){ btlObj.oz = req.body.oz; }
    //     if(req.body.dttm!=""){ btlObj.dttm = new Date(req.body.dttm); }
    //     if(req.body.dttmFin!=""){ btlObj.dttmFin = new Date(req.body.dttmFin); }
    //     if(req.body.comments!=""){ btlObj.comments = req.body.comments; }
    //   }
    //   var btl = new Bottle.bottleModel({oz:btlObj.oz,dttm:btlObj.dttm,dttmFin:btlObj.dttmFin,comments:btlObj.comments});
    //   btl.save(function(err,res){
    //      if (err) return console.error(err);
    //      else{
    //       console.log(res);
         
    //      }
    //   });
       
        // Bottle.bottleModel.find(function (err, bottle) {
        //     if (err) return console.error(err);
        //     console.log("!!!!!");
        //     console.log(bottle);
        //     res.send(JSON.stringify({ btl: bottle }));
        //     //res.render('index',{bottle:bottle});
        // });

    //});
module.exports = router;