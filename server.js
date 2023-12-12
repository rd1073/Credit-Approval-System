const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const xlsx=require("xlsx");
const pool = require("./db")
const app = express();
const port = 3000;

// Parse the requests of content-type 'application/json'
app.use(bodyParser.json());


  

  


// Start a server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
