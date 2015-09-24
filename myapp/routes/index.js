var express = require('express');
var router = express.Router();
var http = require("http");
var Bottle = require("../db/mongoose.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  var z = Bottle.bottlefeeds.find({$and:[{oz:{$exists:true}},{oz:{$gt:0}}]});
  //console.log(z);
  res.render('index', { title: 'Express' });
});

router.post('/addBtl',function(req,res,next){
  //res.render('index', { title: req.body });
  //var dt = new Date();
  var btlObj = {
    oz:0,
    dttm:new Date(),
    dttmFin:new Date(),
    comments:""
  };
  if(req.body){
    if(req.body.oz!=""){ btlObj.oz = req.body.oz; }
    if(req.body.dttm!=""){ btlObj.dttm = req.body.dttm; }
    //if(req.body.dttmFin!=""){ btlObj.dttmFin = req.body.dttmFin; }
    if(req.body.comments!=""){ btlObj.comments = req.body.comments; }
  }
  var btl = new Bottle({oz:btlObj.oz,dttm:btlObj.dttm,dttmFin:btlObj.dttmFin,comments:btlObj.comments});
  btl.save(function(err,res){
    if (err) return console.error(err);
    else{
      console.log(res);
    }
  });
  // Bottle.find(function (err, btl) {
  //   if (err) return console.error(err);
  //   console.log(btl);
  // }); 
  console.log(req.body,"!!!!");
});


router.get('/hi',function(req,res,next){
    res.render('index',{title:"PUNKz",show:true});
});

module.exports = router;
