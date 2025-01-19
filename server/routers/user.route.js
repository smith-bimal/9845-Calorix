const express = require("express");
const { saveDish } = require("../controllers/user.controller");
const router = express.Router();

router.post("/save-dish", saveDish)

module.exports = router;