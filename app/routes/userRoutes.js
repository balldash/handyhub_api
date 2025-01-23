const express = require("express");
const router = express.Router();

router.get("/users/", (req, res) => {
    res.status(200).json([{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]);
});

module.exports = router;
