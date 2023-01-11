const jwt = require("jsonwebtoken");
const Register = require("../models/formSchema");

const auth = async(req,res,next)=>{ //'next' describes that after complition of process it should go ahead
  try {
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token,process.env.SECRET_KEY); //Just G only this part that verify the token and secret_key,if they both same then only it moves next 
    console.log(verifyUser); 
    
    const user = await Register.findOne({_id:verifyUser._id}); //If we observe in our database,the another id is generated so we just find the whole user data from that _id
    console.log(user.email);

    req.token = token;
    req.user = user;
    //This part is not neseccary because it doesn't affect my actual code

    next();
} catch (error) {
    res.status(401).send(error);
  }
}

module.exports = auth;