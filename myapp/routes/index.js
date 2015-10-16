var express = require('express');
var router = express.Router();
var http = require("http");
var db = require("../mongoose/index.js");
var Bottle = require("./bottle/index.js");
var btlList = require("./btlList/index.js");
var btlProvider = require('../providers/bottleProvider.js');
//var btl = require("../models/bottle.js");


var bottleFeedings = new btlProvider.Bottle();
/* GET home page. */
router.get('/', function(req, res, next) {
    bottleFeedings.findAll(function(error, btlList){
        res.render('index', { title: "Baby's Day App",btlList:btlList });
    })  
});

router.get('/hi',function(req,res,next){
    res.render('index',{title:"PUNKz",show:true});
});

module.exports = router;
