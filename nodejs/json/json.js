const fs = require("fs"); 

const bioData = {
    name: "Vihar",
    age: 21,
    skill: "c++"
}

const json = JSON.stringify(bioData);
// console.log(json);

// fs.writeFile("json1.json", json, (err)=>{
//     console.log("ok");
// });

// fs.readFile("json1.json","utf-8",(err, data)=>{
//     console.log(data);
// })

const fg = JSON.parse(json);
console.log(fg);