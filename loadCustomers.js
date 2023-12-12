const express = require('express');
 const mysql = require('mysql');
const xlsx=require("xlsx");
const pool = require("./db")

const app = express();

 


  //adding the excel data into the table
let workbook = xlsx.readFile('customer_data.xlsx')
let worksheet = workbook.Sheets[workbook.SheetNames[0]]
let range = xlsx.utils.decode_range(worksheet["!ref"])

for(let row=range.s.r + 1;row<=range.e.r;row++){
    let data = []

    for(let col=range.s.c ;col<=range.e.c;col++){
        let cell=worksheet[xlsx.utils.encode_cell({r:row,c:col})]
        if (cell && cell.v !== undefined) {
            data.push(cell.v);
          } else {
            // If cell is undefined or has no value, push null or handle it as needed
            data.push(null);
          }
          
    } 
    
    let sql = "INSERT INTO CUSTOMERS (customer_id, first_name, last_name, age, phone_number, monthly_salary, approved_limit) VALUES (?, ?, ?, ?, ?, ?, ?);";
    pool.query(sql,data,(err,results,fields)=>{
        if(err){
            console.log(err);
        }


    })
} 


  


 