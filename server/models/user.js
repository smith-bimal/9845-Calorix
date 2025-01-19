const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    preferences: [{
        dish: {
            type: Schema.Types.ObjectId,
            ref: "Dish"
        },
        items: [
            {
                name: { type: Schema.Types.ObjectId, ref: "Item" },
                quantities: Number,
            }
        ]
    }],
    history: [{
        type: Schema.Types.ObjectId,
        ref: "Dish"
    }]
});

const User = mongoose.model("users", userSchema);
module.exports = User;