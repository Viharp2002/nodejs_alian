const mongoose = require("mongoose");

//Connect with database(MongoDB)
mongoose.connect("mongodb://localhost:27017/olympics").then(() => {
    console.log("Successfully Connected");
}).catch((e) => {
    console.log(e);
})