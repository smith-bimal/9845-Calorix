const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { items, dishes } = require('./data');
const Item = require('../models/item');
const Dish = require("../models/dish");


dotenv.config({ path: "../.env" }); // Load environment variables
main().then(() => {
    console.log("database connected");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
}

async function saveItems() {
    try {
        await Item.deleteMany({});

        for (let item of items) {
            let i = new Item({
                name: item.name,
                calories: item.calories,
            });

            await i.save();
            console.log(`${item.name} item inserted successfully.`);
        }
    } catch (e) {
        console.log(e);
    }
}

saveItems();

async function saveDishes() {
    try {
        await Dish.deleteMany({});
        for (let dish of dishes) {
            const itemPromises = dish.items.map(async (item) => {
                let i = await Item.findOne({ name: item.name });
                item = { name: i, quantity: item.quantity, calories: item.calories };
                return item;
            });

            const updatedItems = await Promise.all(itemPromises);

            const newDish = new Dish({
                name: dish.name,
                items: updatedItems,
                description: dish.description,
            });
            await newDish.save();
            console.log(`${newDish.name} Dish saved successfully.`)
        }
    } catch (e) {
        console.log(e);
    }
}

saveDishes();