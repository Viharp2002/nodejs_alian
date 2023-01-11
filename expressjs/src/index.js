const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const filepath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/view");
const partialsPath = path.join(__dirname,"../templates/partials");


// app.get("/",(req,res)=>{
//     res.end("Home Page");
// })
// app.get("/about",(req,res)=>{
//     res.end("hello");
// })

app.set("views",templatePath);
// hbs.registerPartials(partialsPath);
app.set("view engine","hbs");
hbs.registerPartials(partialsPath);

app.use(express.static(filepath));

app.get("/",(req,res)=>{
    res.render("index",{
        viharM: "20",
   });
 })
 app.get('*',(req,res)=>{
    res.render("404",{
        errorcomp: "oops..page doesn't exist",
    })
 })

app.listen(9000,()=>{
    console.log("listening to the port at 9000");
})