const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/students",async(req,res)=>{
    try
    {
        const studentData = await Student.find();
        res.send(studentData);
    }catch(e)
    {
        res.send(e);
    }
})

app.listen(port,()=>{console.log("Ok")});