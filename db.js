const mysql = require('mysql');


// Create the MySQL connection pool
const pool = mysql.createConnection ({
    
    host: "localhost",
    user: "root",
    password: "Golobull123#",
    database: "db",
    insecureAuth: true, // Add this line

});

pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


  module.exports=pool;