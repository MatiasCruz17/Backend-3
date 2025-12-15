const express = require ("express");
const User = require ("../models/User.js");
const router = express.Router();

router.get ("/", async (req, res) => {
    try {
        const users = await User.find().populate("pets");
        res.json({ status: "success", payload: users });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json ({ status: "success", payload: user });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

module.exports = router;