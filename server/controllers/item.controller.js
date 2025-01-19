const Item = require("../models/item");

const getItems = async (req, res) => {
    try {
        const item = await Item.find({});
        res.status(200).json({ data: item });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const getOneItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.status(200).json({ data: item });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const addItem = async (req, res) => {
    try {
        const { name, calories } = req.body;
        const newItem = new Item({ name, calories });
        await newItem.save();
        res.status(200).json({ message: "sucessfully saved new item!" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
}

const updateItem = async (req, res) => {
    try {
        const { name, calories } = req.body;
        await Item.findByIdAndUpdate(req.params.id, {
            name, calories
        });
        res.status(200).json({ message: "sucessfully updated the item!" });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const deleteItem = async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "sucessfully deleted the item!" });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = { addItem, getItems, updateItem, deleteItem, getOneItem };