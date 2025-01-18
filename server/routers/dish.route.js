const express = require("express");
const { addDish, getDish, deleteDish, updateDish } = require("../controllers/dish.controller");
const router = express.Router();

router.post("/", addDish);

router.route('/:id').get(getDish)
    .put(updateDish).delete(deleteDish)

module.exports = router;
