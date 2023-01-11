const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");

const fs = require("fs");
const pdf = require("pdf-creator-node");
const html = fs.readFileSync("index.html", "utf8");

const auth = require("../middlewares/auth"); //Note:If we remove cookie then it can't stay on that page ,it will return an error
const Register = require("../models/formSchema");
const nodemailer = require("nodemailer");


var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "80mm",
        contents: '<div style="text-align: center; font-size: 100px">Users Details</div>'
    },
    footer: {
        height: "70mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};


router.get("/", (req, res) => {
    res.render("index");
})

router.get("/index", auth, (req, res) => { //'auth' will be worked as middleware because it will execute before app.render("index") and after 'next' if it satisfies then it render index page
    // console.log(req.cookies.jwt); //And 'auth' explains that if user's token and secret_key is matched then only it will render
    res.render("index");
})

router.get("/register", (req, res) => {
    res.render("index");
})

router.post("/", async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    const useremail = await Register.findOne({ email: email });
    if (useremail) {
        res.status(300).render("index", { msg: "Email Already Exist" });
    } else {
        if (password === cpassword) {
            try {
                const regiForm = new Register({
                    email: req.body.email,
                    password: req.body.password,
                    cpassword: req.body.cpassword
                })

               const token = await regiForm.generateAuthToken(); //This is a middleware,it will redirect control to this function where it is defined
                //  console.log("The token: " + token);

                res.cookie("jwt", token, {
                    httpOnly: true
                })

                const ress = await regiForm.save();

                //........................................................................................................
                //Nodemailer
                
                // var users = [
                //     {
                //       name: req.body.email,
                //       age: req.body.password
                //     }
                //   ];
                //   var document = {
                //     html: html,
                //     data: {
                //       users: users,
                //     },
                //     path: "./output.pdf",
                //     type: "",
                //   };

                // pdf.create(document, options).then((res) => {
                //     console.log(res);
                // })
                // .catch((error) => {
                //     console.error(error);
                // });


                // const transporter = nodemailer.createTransport({
                //     service: "gmail",
                //     auth: {
                //         user: "viharp2002@gmail.com",
                //         pass: "spsepdklpzpkymkv"
                //     }
                // });
                
                // const mailOptions = {
                //     from : 'viharp2002@gmail.com',
                //     to: req.body.email,
                //     subject: "Scheme Name",
                //     text: "Daer user you have resgistered in this scheme succsfully..kindly check the attached pdf please",
                //     attachments: [
                //         { filename: 'output.pdf', path: './output.pdf'}
                //     ]
                // };
                
                // transporter.sendMail(mailOptions,function(error,info){
                //     if(error)
                //     {
                //         console.log(error);
                //     }
                //     else
                //     {
                //         console.log("Email sent: " + info.response);
                //     }
                // });
                //..............................................................................................................
                 
                res.render("home");
            } catch (e) {
                res.status(400).send(e);
            }
        } else {
            res.render("index", { msg2: "Passwords are not matching" })
        }
    }
})

router.post("/contact", (req,res)=>{

    //  var users = [
    //     {
    //       name: req.body.email,
    //       age: req.body.message
    //     }
    //   ];
    //   var document = {
    //     html: html,
    //     data: {
    //       users: users,
    //     },
    //     path: "./output.pdf",
    //     type: "",
    //   };

    // pdf.create(document, options).then((res) => {
    //     console.log(res);
    // })
    // .catch((error) => {
    //     console.error(error);
    // });


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "viharp2002@gmail.com",
            pass: "spsepdklpzpkymkv"
        }
    });
    
    const mailOptions = {
        from: req.body.email,
        to : 'viharp2002@gmail.com',
        subject: req.body.message,
        text: req.body.messages,
        // attachments: [
        //     { filename: 'output.pdf', path: './output.pdf'}
        //]
    };
    
    transporter.sendMail(mailOptions,function(error,info){
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log("Email sent: " + info.response);
        }
    });

    res.render("contact");
})

router.get('/contactme',(req,res)=>{
    res.render("contact");
})

router.get("/login", (req, res) => {
    res.render("login");
})

router.post("/login", async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const usermale = await Register.findOne({ email: email });
    // if(usermale && usermale.password==password)
    // {
    //   res.render("home");
    // }
    // else
    // {
    //   res.render("login",{msg:"Invalid Email...SignUp First"});
    // }
    try {
        if (usermale) {
            /*The above comment part was good when we weren't introduced bcryptjs for password hashing*/
            const compare = await bcrypt.compare(password, usermale.password);

            if (compare) {
                const token = await usermale.generateAuthToken(); //This is a middleware,it will redirect control to this function where it is defined,but before it we should set cookies and other things
                console.log("The token: " + token);

                res.cookie("jwt", token, {
                    httpOnly: true
                })
                res.render("home");
            } else {
                res.render("login", { msg2: "Invalid Password..." });
            }
        } else {
            res.render("login", { msg: "Invalid Email...SignUp First" });
        }
    } catch (e) {
        console.log(e);
    }
})


router.get("/logout", auth, async(req, res) => { //we call 'auth' function because we want to check whether user login or not because without login there is no meaning of logout
    try {
        /*For Single Logout*/ //For Now G, V-84
        //  req.user.tokens = req.user.tokens.filter((currElement)=>{
        //   return currElement.token != req.token;
        //  })

        /*Logout From All Devices*/ //For Now GainNode,v-85
        //req.user.tokens = []; 


        res.clearCookie("jwt");
        console.log("Logout Successfully");
        await req.user.save(); //G //This part is not neseccary because it doesn't affect my actual code
        res.render("login")
    } catch (error) {
        res.status(401).send(error);
        console.log(error);
    }
})

module.exports = router;