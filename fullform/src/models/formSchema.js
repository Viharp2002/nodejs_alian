const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const formRegi = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

//Generating new Tokens
formRegi.methods.generateAuthToken = async function(){ //'methods' etla mate lakhyu kemke apde schema na instance sathe kam kariye 6ie...line: const token = await regiForm.generateAuthToken(); describes that regiForm is the instance of Register model
   try 
   {
    // console.log(this._id);
     const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
    
     this.tokens = this.tokens.concat({token:token}); //ahi tokens na object ma value store karavi che to this.tokens ma string concat karavi jemathi first che e tokens no object token che ane bijo variable vihar
     await this.save(); //save karvu pade je add karyu e
    //  console.log(token); //Here it will be undefined...Because we have to return token and also we have to store that token in our database because each and every registration we have to store its token
     return token;
   } 
   catch (e) {
    res.send(`Error is ${e}`);
     console.log(e);
   }
}

//Convert Passwords into Hash
formRegi.pre("save",async function(next){
    // const passwordHash = await bcrypt.hash(password,10); //Here,pre tells that it should be run before this line:const ress = await regiForm.save();
if(this.isModified("password")) //This will only execute when password is changed otherwise what happened that everytime some other fields are changed then this function will be called
{
//    console.log(`The password on that form which is typed by user is ${this.password}`);
   this.password = await bcrypt.hash(this.password,10); //10 represents number of rounds...The more number of rounds are there,the more loading on user's browser
   this.cpassword = await bcrypt.hash(this.password,10);
   next(); //And this tells that after executing this pre function it should go on further line: res.status(201).render("index");
 
//    this.cpassword = undefined; //This is because we don't want to store confirm password in our database because it displays clear original password
   
   
}
})

const Register = new mongoose.model("Register",formRegi);

module.exports = Register;