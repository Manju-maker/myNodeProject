var userapi = require("./mongooseSchema");

var SGmail = require("@sendgrid/mail");
SGmail.setApiKey("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")

module.exports = {


Adduser:function(data){
    return new Promise((resolve,reject)=>{


userapi.find({"email":data["email"]},function(err,result){
    if(result.length>0){
        resolve("email already exist");
    }
    else{
        userapi.create(data, function(err,result){
            if(result){
                const msg = {
                    to: data["email"],
                    from: "bhattmanju46@gmail.com",
                    subject: "Sending with Twilio SendGrid is Fun",
                    text: "Registered Successfully",
                    html: "You're on your way!<br>Let's confirm your email addressBy clicking on the following link, you are confirming your email address<br> http://localhost:8081/verify/"+result["id"]
                    };
                    SGmail.send(msg);
                    resolve("registered Successfully, Please confirm your email id");
            }
            if(err){
                reject(err);
            }
           
            
                })
            }
            if(err){
                rejecct(err);
            }
            
        })
            })
        },

verifyUser:function(data){
    return new Promise((resolve, reject)=>{
    
            userapi.updateOne({"_id":data},{$set:{verify:true}},function(err,result){
                
                if(result){
                   
                    resolve("Verified Successfully");
                }
                else{
                    resolve("Not verified");
                   
                }
                if(err){
                    reject(err);

                    console.log(err);
                }
               
            });
            
        })
    
},

loginuser:function(logdata){
    return new Promise((resolve,reject)=>{


        userapi.find({$and:[{email:logdata["email"]},{"pass":logdata["pass"]}]}, function(err,result){
          if(result.length>0){
            userapi.find({verify:true},function(err,result){
                if(result.length>0){
                resolve("Login Successfully");
                }
                else{
                    resolve("Verify your email id first");
                }
                if(err){
                    reject(err);
                }
             });
          }
          else{
              resolve("Invalid Username or Password");
          }
          if(err){
              reject(err);
          }
        })

    })
}
}









