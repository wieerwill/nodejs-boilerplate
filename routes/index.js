const express   = require('express'),
      router    = express(),
      mysql     = require('mysql'),
      bodyParser= require('body-parser'),
      nodemailer    = require('nodemailer'),
      session   = require('express-session'),
      flash     = require('connect-flash'),
      cookieParser  = require('cookie-parser'),
      dbconfig  = require('../config/database'),
      mailconfig = require('../config/mail'),
      middlewear = require('./middlewear'),
      con = mysql.createConnection(dbconfig.connection);


// Index
router.route("/")
    .get((req, res)=> { // you got a GET request
    res.render('index/index'); // get your index view file
    })
    .post((req, res) => {
        //do something with a POST request
    });

module.exports = router;