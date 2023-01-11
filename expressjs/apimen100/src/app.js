const express = require("express");
const app = express();
const router = require("./routers/men");

//Import connection with Database
require("../src/db/conn");

//If we host our website in any day then it will get dynamically port number,we can't give it manuelly
const port = process.env.PORT || 3000;

//This is because if we get data from postman's body part then it should be convert first in json format because it doesn't know whether data is json formatted or not
app.use(express.json());

//It's imported part of app.get,app.post,etc..(basically it is called express router)
app.use(router);
//Just for checking whether it is working or not
/*app.get("/", async(req, res) => {
    res.send("Home Page");
})*/

//Requst to the website
app.listen(port, () => {
    console.log(`Success: Port Number: ${port}`);
})