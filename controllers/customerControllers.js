const pool = require("../db");
const express = require('express');
const mysql = require('mysql');

const register = async(req, res) => {
    // Extract data from the request body
    const { first_name, last_name, age, monthly_income, phone_number } = req.body;

    // Calculate approved limit based on the formula
    const approved_limit = Math.round(36 * monthly_income / 100000) * 100000;
    console.log(approved_limit);
    // SQL query to insert new user into the customer table
    const sql = 'INSERT INTO CUSTOMERS (first_name, last_name, age, monthly_salary, phone_number, approved_limit) VALUES (?, ?, ?, ?, ?, ?)';

    // Values to be inserted into the table
    const values = [first_name, last_name, age, monthly_income, phone_number, approved_limit];

    // Execute the query
    pool.query(sql, values, (err, results) => {
        if (err) {
            console.error(err);
            // Handle MySQL errors
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        // Extract the generated customer_id from the insert result
        const customer_id = results.insertId;

        // Prepare the response body
        const responseBody = {
            customer_id,
            name: `${first_name} ${last_name}`,
            age,
            monthly_income,
            phone_number,
            approved_limit,
        };

        // Send a success response with the new user details
        res.status(201).json(responseBody);
    });



}





module.exports={register}

