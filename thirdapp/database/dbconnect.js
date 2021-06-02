var mysql = require('mysql');
const express = require('express')
const app = express();
const port = 8000;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "gpstrail"
});

con.connect(function (err) {
    if (err) console.log(err);
    else console.log("Connected!");
});



module.exports = con;