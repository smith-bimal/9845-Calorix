const express = require("express");
const multer = require('multer')
const { storage } = require("../config/cloudConfig")
const upload = multer({ storage });

const { addDish, getDish, deleteDish, updateDish, searchDish } = require("../controllers/dish.controller");
const router = express.Router();

router.route('/').post(upload.single('image'), addDish).get(searchDish);

router.route('/:id').get(getDish)
    .put(updateDish).delete(deleteDish)

module.exports = router;
