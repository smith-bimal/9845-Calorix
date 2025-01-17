const { Schema, default: mongoose } = require("mongoose");

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    calories: {
        type: Number,
        required: true,
    }
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
