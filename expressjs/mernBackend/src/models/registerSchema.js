const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
    fname:{
        type: String,
        required:true
    },
    lname:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type:Number,
        required:true
    },
    monthOfBirth:{
        type:String,
        required:true
    },
    yearOfBirth:{
        type:Number,
        required:true
    },
    email:{
        type: String,
        required: true,
        validate(value)
        {
           if(!validator.isEmail(value))
           {
            throw new Error("Email is Invalid");
           }
        }
    },
    phone:{
        type: Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required: true,
        trim:true
    },
    city:{
        type:String,
        required: true
    },
    pincode:{
        type:Number,
        required: true
    },
    state:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required: true
    },
    hobbies:{
        type:[String],
        required: true
    },
    classx:{
        type:String,
        required: true
    },
    classxPR:{
        type:Number,
        required: true
    },
    classxYEAR:{
        type:Number,
        required: true
    },
    classXI:{
        type:String,
        required: true
    },
    classXIPR:{
        type:Number,
        required: true
    },
    classXIYEAR:{
        type:Number,
        required: true
    },
    classGrad:{
        type:String,
        required: true
    },
    classGradPR:{
        type:Number,
        required: true
    },
    classGradYEAR:{
        type:Number,
        required: true
    },
    classMas:{
        type:String,
        required: true
    },
    classMasPR:{
        type:Number,
        required: true
    },
    classMasYEAR:{
        type:Number,
        required: true      
    },
    course:{
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register",employeeSchema);

module.exports = Register;