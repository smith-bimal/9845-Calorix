const express = require("express");
const { addDish, getDish, deleteDish, updateDish, searchDish } = require("../controllers/dish.controller");
const router = express.Router();

router.route('/').post(addDish).get(searchDish);

router.route('/:id').get(getDish)
    .put(updateDish).delete(deleteDish)

module.exports = router;
