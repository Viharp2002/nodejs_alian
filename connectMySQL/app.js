const express = require("express");
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "connectMysql"
})

connection.connect(function (err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Connection Successfull");
    }

     connection.query("SELECT * FROM connect",(err,result,fields)=>{
        console.log(result);
     })
})