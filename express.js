var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userrouter = require("./userrouter");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sendGrid',{useNewUrlParser:true});
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/",userrouter)
var server = app.listen(8081, function (){
    var host = server.address().address
    var port = server.address().port
    console.log("My server is running at http://%s:%s",host , port);

});

