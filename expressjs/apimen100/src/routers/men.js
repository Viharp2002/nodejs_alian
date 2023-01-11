const express = require("express");
const mongoose = require("mongoose");


//Import schema and collection
const MensRanking = require("../models/mens");


const router = new express.Router();

//We will handle post request for adding new data into api
router.post("/mens", async(req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    } catch (e) {
        res.status(400).send(e);
    }
})

//We will handle get req for reading data
router.get("/mens", async(req, res) => {
    try {
        const getMens = await MensRanking.find().sort({ "ranking": 1 }); //If we want to get our data in sorted format according to ranking field
        res.status(201).send(getMens);
    } catch (e) {
        res.status(400).send(e);
    }
})

//We will handle get req for reading data for individual
router.get("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id; //For Finding id from url
        const getMen = await MensRanking.findById({ _id }); //If api ma _id ne badle biju kai hot to {iid,_id},iid e tya lakhelu hase
        res.status(201).send(getMen);
    } catch (e) {
        res.status(400).send(e);
    }
})

//We will handle patch req for updating data
router.patch("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id; //For Finding id from url
        const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        }); //If api ma _id ne badle biju kai hot to {iid,_id},iid e tya lakhelu hase
        res.status(201).send(updateMen);
    } catch (e) {
        res.status(500).send(e); //500-server error,because data is already on server so it must be server error
    }
})

//We will handle delete req for deleting the data
router.delete("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id; //For Finding id from url
        const updateMen = await MensRanking.findByIdAndDelete(_id);
        res.status(201).send(updateMen);
    } catch (e) {
        res.status(500).send(e); //500-server error,because data is already on server so it must be server error
    }
})

module.exports = router;