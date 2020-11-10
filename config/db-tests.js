var mysql = require('mysql'),
    dbconfig = require('./database'),
    con = mysql.createConnection(dbconfig.connection);

// test mysql connection
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");
    var sql = 'SELECT * FROM ' + dbconfig.database + "." + dbconfig.users_table;
    con.query(sql, function(err, rows) {
        if (err) {
            console.log(err); //error while connecting
        } else {
            console.log("Database reached successfully");
        }
    });
});