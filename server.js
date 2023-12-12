const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const xlsx=require("xlsx");

const port = 3000;
const pool = require("./db")
const customerRoutes=require("./routes/customerRoutes")


const app = express();
app.use(bodyParser.json());

  
app.use("/", customerRoutes);

  


// Start a server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
