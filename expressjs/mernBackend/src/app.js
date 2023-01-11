const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs"); //For using the partial files in hbs files
const mongoose = require("mongoose");

//Nodemailer
const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'viharp2002@gmail.com',
        pass: 'gcqywuwvujodehqa'
    }
})

require("./db/conn");
const Register = require("./models/registerSchema");

const port = process.env.PORT || 3000;
//This explains that when we host our website then its simply get port dynamically or on 3000,either one

const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views"); //This is new path of views directory
const partialsPath = path.join(__dirname, "../templates/partials"); //This is path for including partial files into hbs files

app.use(express.static(staticPath)); //By using it we can serve our static html file
//and if we delete index.html file then it simply moves further(means it will print home page / text)

app.set("view engine","hbs"); //For set the handlebar
app.set("views",viewsPath); //Because we have changed our viwes directory
hbs.registerPartials(partialsPath); //Registering the partials files in hbs files(views directory ma)

app.use(express.json());
app.use(express.urlencoded({extended:false}));//For reading data on browser from form

app.get("/",(req,res)=>{
    res.render('index') //This will read HBS file(index.hbs from views directory)
})

app.get("/register",(req,res)=>{
    res.render("register");
})

app.post("/register",async(req,res)=>{
    const email = req.body.email;
    const usermail =await Register.findOne({email:email});
    if(usermail)
    {
        res.render("index",{msg: "Email Already Exist"});
    }
    else
    {
       try{
         const registerData = new Register({
            fname :req.body.username,
            lname : req.body.usernamee,
            dateOfBirth: req.body.day,
            monthOfBirth: req.body.month,
            yearOfBirth:  req.body.year,
            email: req.body.email,
            phone: req.body.number,
            gender: req.body.gender,
            address: req.body.add,
            city: req.body.city,
            pincode: req.body.pin,
            state: req.body.state,
            country: req.body.COUNTRY,
            hobbies:req.body.HOBBIES,
            classx: req.body.state1,
            classxPR: req.body.pr1,
            classxYEAR: req.body.ye1,
            classXI: req.body.state2,
            classXIPR: req.body.pr2,
            classXIYEAR: req.body.ye2,
            classGrad: req.body.state3,
            classGradPR: req.body.pr3,
            classGradYEAR: req.body.ye3,
            classMas: req.body.state4,
            classMasPR: req.body.pr4,
            classMasYEAR: req.body.ye4,
            course: req.body.COURSES
         })
         const ress = await registerData.save();

         //Send out the mail
         const mailOptions = {
         from:'viharp2002@gmail.com',
         to:req.body.email,
         subject:"Hello world",
         text:'I am Vihar'
        }

        transport.sendMail(mailOptions,function(error,info){
            if(error)
            {
                console.log(error);
            }
            else{
                console.log("email sent" + info.response);
            }
        })

         res.status(201).render("index");
         }
         catch(e)
         {
            console.log(e);
         }
    }
})

app.listen(port,()=>{
    console.log(`Succesfuly connected on ${port}`);
})