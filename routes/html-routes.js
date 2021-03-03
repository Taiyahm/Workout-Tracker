// Imports express router
const router = require("express").Router();

// Imports the path
const path = require("path");

// Get request for home page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/views/index.html'));
});

// GET request for stats page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/views/stats.html'));
});

// GET request for exercise page
router.get("/exercise",  (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/views/exercise.html'));
});

// Exports the HTML  routes
module.exports = router;
