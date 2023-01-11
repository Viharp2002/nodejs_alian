const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 2
    },
    email:{
        type:String,
        required: true,
        unique: [true, "Email Id already present"],
        validate(value){
            if(!validator.isEmail("Invalid Email"));
        }
    },
    phone:{
        type: Number,
        min:10,
        required:true,
        unique:true
    }
})

const Student = new mongoose.model('Student',studentSchema);
module.exports = Student;