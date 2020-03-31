/*## Get all necassary packages for this route ##*/
const express = require('express'),
      router    = express(),
      bodyParser= require('body-parser'),
      nodemailer    = require('nodemailer'),
      flash     = require('connect-flash'),
      mailconfig = require('../config/mail');

/*## SETUP nodemailer ''*/
var transporter = nodemailer.createTransport({
    host: mailconfig.connection.host,
    port: mailconfig.connection.port, 
    secure: mailconfig.connection.secure, 
    auth: {
        user: mailconfig.connection.auth.user, 
        pass: mailconfig.connection.auth.pass
    },
});
// verify mail connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

/*## Start with routing ##*/
// Index
router.route("/")//all routes from url "/"
    .get((req, res) => { // you got a GET request to "/"
        res.render('index/index'); // get your index view file
    })
    .post((req, res) => {   //you got a POST request to "/"
        //do something with a POST request
    })
    .delete((req, res) => { //you got a POST request to '/?method="DELETE"' but is overritten with DELETE request
        //delete something
    });

// MAIL
router.route("/mail")
    .get((req, res) => { //GET request to "/mail"
        //do something
        res.render('index/mail');
    })
    .post((req, res) => { //you got a POST request to "/mail"
        let mailOptions = {
            from: req.body.email,
            to: mailconfig.connection.auth.user,
            subject: "Mail from NodeJS boilerplate",
            text: req.body.message
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                req.flash('error', "Mail error. Please try again");
            } else {
                req.flash('success', "Thanks for your Mail");
            }
        });
        res.redirect("/");
    });

module.exports = router;