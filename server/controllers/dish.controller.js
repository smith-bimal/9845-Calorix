const Dish = require("../models/dish");
const Item = require("../models/item");

const addDish = async (req, res) => {
    try {
        const { name, items } = req.body;
        const processedItems = await Promise.all(
            items.map(async (item) => {
                const existingItem = await Item.findOne({ name: item.name });
                return {
                    name: existingItem,
                    quantity: item.quantity,
                    calories: existingItem.calories * item.quantity,
                };
            })
        );

        const dish = new Dish({
            name,
            items: processedItems,
        });
        await dish.save();
        res.status(200).json({ message: "dish added successfully." })
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const searchDish = async (req, res) => {
    try {
        const dishes = await Dish.find({});
        res.status(200).json({ dishes })
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const getDish = async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id);
        res.status(200).send(dish);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}


const updateDish = async (req, res) => {
    try {
        const { name, items } = req.body;
        const processedItems = await Promise.all(
            items.map(async (item) => {
                const existingItem = await Item.findOne({ name: item.name });
                return {
                    name: existingItem,
                    quantity: item.quantity,
                    calories: existingItem.calories * item.quantity,
                };
            })
        );

        await Dish.findByIdAndUpdate(req.params.id, {
            name,
            items: processedItems,
        });

        res.status(200).json({ message: "dish updated successfully." })
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}


const deleteDish = async (req, res) => {
    try {
        await Dish.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Dish deleted successfully." });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = { addDish, getDish, updateDish, deleteDish, searchDish };