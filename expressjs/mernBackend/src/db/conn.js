const mongoose = require("mongoose");
 
mongoose.connect("mongodb://localhost:27017/registrationThapa").then(()=>{
  console.log("DB Success");
}).catch((e)=>{
    console.log(e);
});