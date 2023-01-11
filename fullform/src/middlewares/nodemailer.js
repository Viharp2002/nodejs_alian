const nodemailer = require("nodemailer");

const nodemail = ()=>{
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "viharp2002@gmail.com",
        pass: "spsepdklpzpkymkv"
    }
});

const mailOptions = {
    from : 'viharp2002@gmail.com',
    to: "viharp2002@gmail.com",
    subject: "Done Nodemailer",
    text: "Done dana done"
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
}

module.exports = nodemail;