var express = require("express");
var router = express.Router();
var userapi = require("./userapi")

router.get('/',(req,res)=>{
    res.render('homepage');
})

router.get('/login',(req,res)=>{
    res.render('loginForm');
})

// router.get('/adduser',(req,res)=>{
//     res.render('register');
// })

router.post('/adduser', async function(req,res){
    try{
    var result = await userapi.Adduser(req.body);
    res.send(result);
    }
    catch(err){
        res.send(err);
    }
})




router.get('/verify/:email', async function(req, res){

    try{
    var result = await userapi.verifyUser(req.params.email);
    res.send(result);
    }

    catch(err){
        res.send(err);
    }

})

 

router.post('/login', async function(req, res){
   try{
       var result = await userapi.loginuser(req.body);
       res.send(result);
   }
   catch(err){
       res.send(err);
   }
})





module.exports = router;









