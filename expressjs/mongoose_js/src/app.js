const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/vihardb",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Done")).catch((err)=>console.log(err));

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        unique : true.valueOf,
        lowercase: true
    },
    sname:String,
    age: Number,
    email:{
        type: String,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("Email is Invalid");
            }
        }
    },
    active: Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const Playlistt = new mongoose.model("Playlistt",playlistSchema);

const createDocument = async()=>{
    try{
         const nameVihar = new Playlistt({
            name: "VIHAR",
            sname: "PRAJAPATI",
            age: 23,
            email : "viharp2002@gmail.com",
            active : true
             })
     const result =await nameVihar.save();
     console.log(result);
    }catch(err)
    {
        console.log(err);
    }
}
createDocument();

// const getDocument = async(_id)=>{
//     const result = await Playlistt.deleteMany({age: {$gte: 15}});
//     console.log(result);
// }
// getDocument();