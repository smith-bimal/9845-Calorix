const { Schema, default: mongoose } = require("mongoose");

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    items: [
        {
            name: {
                type: Schema.Types.ObjectId,
                ref: "Item"
            },
            quantity: Number,
            calories: Number
        }
    ],
});

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;