const express = require("express");
const { getItems, addItem, updateItem, deleteItem, getOneItem } = require("../controllers/item.controller");
const router = express.Router();

router.route('/').get(getItems).post(addItem);
router.route("/:id").get(getOneItem).put(updateItem).delete(deleteItem);

module.exports = router;