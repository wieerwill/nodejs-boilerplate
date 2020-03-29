var express     = require('express'),
    router      = express.Router(),
    bodyParser  = require('body-parser'),
    methodOverride  = require("method-override"),
    mysql       = require('mysql');

var dbconfig = require('../config/database');
var con = mysql.createConnection(dbconfig.connection);

router.get('/getSomething', (req, res)=> {
    var sql='SELECT * FROM ' + dbconfig.database + "." + dbconfig.users_table;
    con.query(sql, function(err,rows){
        if(err){
            res.sendStatus(400).json(null);
        }else{
            res.sendStatus(200).json(rows);
        }
    });
});


module.exports = router;