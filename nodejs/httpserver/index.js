const fs = require("fs");
const http = require("http");

//The http.createServer() method includes request
//and response parameters which is supplied by node.js

const server = http.createServer((req,res)=>{

    const data = fs.readFileSync(`${__dirname}/api/index.json`, "utf-8");
        console.log(data);
        const vv = JSON.parse(data);
//The response object can be used to get information 
//about the current HTTP request
//e.g.,url,request header,and data

//The response object can be used to send a response for a current request
//console.log(req.url); //current url ma write karelu avse
if(req.url == "/userApi")
{ 
    res.writeHead(200, {"Content-type" : "text/html"});
    res.end(vv[0].login);
}
else{
    res.writeHead(404, {"Content-type" : "text/html"});
res.end("<h1>404...page doesn't exist</h1>"); //this is the response
}
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the port no. 8000");
}); //here this is a request which we are listening and we have to
                                  //give any random port number(not used) and localhost(which is fixed)
