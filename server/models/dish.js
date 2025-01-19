const { Schema, default: mongoose } = require("mongoose");

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true
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
    description: {
        type: String,
        default: "No description available."
    }
});

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;