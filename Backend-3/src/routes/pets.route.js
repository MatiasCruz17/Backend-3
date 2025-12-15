const express = require("express");
const Pet = require("../models/Pet");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json({ status: "success", payload: pets });
    } catch (error) {
        res.status(500).json ({ status: "error", message: error.message});
    }
});

router.post("/", async (req, res) => {
    try {
        const pet = await Pet.create(req.body);
        res.json({ status: "success", payload: pet });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});
module.exports = router;