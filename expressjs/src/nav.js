const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.end("Home");
})
app.get("/about",(req,res)=>{
    res.status(200).end("About");
})
app.get("/temp",(req,res)=>{
    res.writeHead(404);
    res.end("404...Page not found");
})
app.listen(9000,()=>{
    console.log("listening");
})