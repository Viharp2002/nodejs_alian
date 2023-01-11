const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request',(req,res)=>{
    /*1st way*/
    // fs.readFile("input.text", (err,data)=>{
    //     if(err){
    //          console.log(err);
    //     }
    //     res.end(data.toString());
    // });

    /*2nd way*/
    // const rstream = fs.createReadStream("input.text");
    // rstream.on("data", (chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // rstream.on("end",()=>{
    //     res.end();
    // })
    // rstream.on("error",(err)=>{
    //     res.end("file doesn't exist")
    // })

    /*3rd way*/
    const rstream = fs.createReadStream("input.text");
    rstream.pipe(res);
});
server.listen(9000,"127.0.0.1");
 