const express = require("express");
const { getItems, addItem, updateItem, deleteItem } = require("../controllers/item.controller");
const router = express.Router();

router.route('/').get(getItems).post(addItem);
router.route("/:id").put(updateItem).delete(deleteItem);

module.exports = router;