var nodemailer = require("nodemailer")
var randomString = require('random-string');
var mongojs = require('mongojs')
var ObjectId = mongojs.ObjectId;

import * as accounts from "../../accounts"
import * as events from "events";
import * as _ from "lodash";

export var name = "admin";



export function handlePacket(db: any, packet: any, cb: any) {
}

export function init(app: any, db: any, eventHub: events.EventEmitter) {


  app.get("/verify/:id", (req: any, res: any) => {
    //console.log(req.user._id)
    //console.log(req.params.id)
    db.users.findOne({ "_id": ObjectId(req.params.id) }, (err: Error, user: any) => {
      if (err) { console.log(err); return; }
      if (user == null) {
        res.json({ err: "user not found" })
        return;
      }

      if (user) {
        console.log("found")

        user.emailverified = true;
        db.users.update({ "_id": ObjectId(req.params.id) }, user, (err: Error, result2: any) => {
          if (err) { console.log(err); return; }
          if (result2) {
            console.log("result2:"); console.log(result2);
            res.redirect("/")
          }
        })


      }
    })


  })


  app.get("/api/v3/admin/requestverificationemail", (req: any, res: any) => {

    var verifyLink = req.headers.referer + "verify/" + req.user._id
        
    try {
      getRegistration(db, (err:Error, result:any)=>{

        var smtpTransport = nodemailer.createTransport({
          host: result.nodeMailerTransportHost,
          port: result.nodeMailerTransportPort,
          auth: {
              user: result.nodeMailerTransportAuthUser,
              pass: result.nodeMailerTransportAuthPass
          }
        });

        var mail = {
          from: 'prototype@iotnxt.com',
          to: req.user.email,
          subject: 'Account Verification',
          text: 'To verify your account please go to '+verifyLink,
          html: '<p>To verify your account please go to <a href="'+verifyLink+'">'+verifyLink+'</a></p>'
        }

        smtpTransport.sendMail(mail, (err:any, info:any)=>{
          if (err) { console.log(err); return;}
          if (info) {
            console.log(info);
            res.json({err:{}, result:{ mail: "sent" }})
          }
        })      
      })
    } catch (err) {
      res.json({err})
    }

  })
app.post("/api/v3/admin/changepassword", (req: any, res: any) => {
db.users.update({recoverToken:req.body.person},{ $set: {"password":req.body.pass}}, (err:Error, response:any) => {
      if (response) {
        if(response.nModified == 0){
          res.json(response)
        }else{
          res.json(response)
        }
       } else if(err){
        res.json(err)
      }
})
var changeToken=randomString({length:128});
db.users.update({recoverToken:req.body.person},{ $set: {"recoverToken":changeToken}})
})

app.post("/api/v3/admin/userpassword", (req: any, res: any) => {
db.users.update({$and:[{username:req.body.user},{password:req.body.current}]},{ $set: {"password":req.body.pass}}, (err:Error, response:any) => {
      if (response) {
        if(response.nModified == 0){
          res.json(response)
        }else{
          res.json(response)
        }
       } else if(err){
        res.json(err)
      }
})
})

  //####################################################################
//Recover Password Link sent via email
app.post("/api/v3/admin/recoverEmailLink", (req: any, res: any) => {
var recoverToken=randomString({length:128});
 db.users.update({email:req.body.email},{ $set: {"recoverToken":recoverToken}})
 try {
 getRegistration(db, (err:Error, result:any)=>{
    var verifyLink = req.headers.referer + "recover/" +recoverToken
        var smtpTransport = nodemailer.createTransport({
               host: result.nodeMailerTransportHost,
               port: result.nodeMailerTransportPort,
          auth: {
               user: result.nodeMailerTransportAuthUser,
               pass: result.nodeMailerTransportAuthPass
          }
        });

        var mail = {
          from: 'prototype@iotnxt.com',
          to: req.body.email,
          subject: 'Password Recovery',
          text: 'To reset forgotten Password go to '+verifyLink,
          html: '<p>To reset forgotten Password go to <a href="'+verifyLink+'">'+verifyLink+'</a></p>'
        }

        smtpTransport.sendMail(mail, (err:any, info:any)=>{
          if (err) { console.log(err); return;}
          if (info) {
           
            res.json({err:{}, result:{ mail: "sent" }})
          }
        })    
         })  } catch (err) {
      res.json({err})
    } 
  })
//Recover Password Link sent via email
//####################################################################
 

  app.get("/api/v3/admin/registration", (req: any, res: any) => {
    // public api to get information if server allows registration/requires email verification
    // if level > 100 then adds the server private email config.
    // if level < 100 then just sends through the public safe data.
    
    if (req.user.level >= 100) {
      getRegistration(db, (err: Error, result: any) => {
        res.json({ err, result })
      })
    } else {
      getRegistration(db, (err: Error, secret: any) => {

        if (secret) {
          var result = {
            userEmailVerify: secret.userEmailVerify,
            userRegistration: secret.userRegistration
          }
          res.json({ err, result })
        } else {
          res.json({})
        }

        
      })
    }
  });

  app.post("/api/v3/admin/registration", (req: any, res: any) => {
    if (req.user.level >= 100) {
      var userinput = req.body
      userinput.settings = "registration"
      updateRegistration(db, userinput, (err: Error, result: any) => {
        res.json({ err, result })
      })
    } else {
      console.log("USER NOT AUTHORIZED!" + req.user.email)
      res.json({ err: "not sufficient user level", result: null })
    }
  });

  // handle incoming account registrations (new with optional email verification)
  app.post("/api/v3/admin/register", (req: any, res: any) => {
    console.log("account registration")
    console.log(req.body)

    // accounts.registerExistingAccount(db, req.body.email, req.get('User-Agent'), req.ip, (err:Error,user:any)=>{
    //   res.json({err, user})
    // }, {password:req.user.pass})

    req.user.email = req.body.email
    req.user.password = req.body.pass
    req.user.level = 1

    accounts.registerExistingAccount(db, req.user, (error: Error, result: any) => {
      res.json({ error, result, account:req.user })
    })

  })

}


function getRegistration(db: any, cb: any) {
  db.plugins_admin.findOne({ settings: "registration" }, cb);
}

function updateRegistration(db: any, userInput: any, cb: any) {
  var cleanInput = {
    settings: "registration",
    userRegistration: userInput.userRegistration,
    userEmailVerify: userInput.userEmailVerify,
    nodeMailerTransportHost: userInput.nodeMailerTransportHost,
    nodeMailerTransportPort: userInput.nodeMailerTransportPort,
    nodeMailerTransportAuthUser: userInput.nodeMailerTransportAuthUser,
    nodeMailerTransportAuthPass: userInput.nodeMailerTransportAuthPass,
    nodeMailerTransportFrom: userInput.nodeMailerTransportFrom
  }

  db.plugins_admin.update({ settings: "registration" }, cleanInput, { upsert: true }, cb);
}



