const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/formregis").then(() => {
    console.log("Connection");
}).catch((e) => {
    console.log(e);
})