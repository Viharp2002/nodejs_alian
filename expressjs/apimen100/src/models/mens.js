const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true //Removes extra spaces from starting and ending
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true,
    },
    event: {
        type: String,
        default: "100m" //We have only one event so we declare it as default
    }
})

//We are creating a new collection
const MensRanking = new mongoose.model("MensRanking", menSchema);

//Export it so that we can use it in another file
module.exports = MensRanking;