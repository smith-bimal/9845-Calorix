const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    preferences: [{
        type: Schema.Types.ObjectId,
        ref: "Dish"
    }],
    history: [{
        type: Schema.Types.ObjectId,
        ref: "Dish"
    }]
});

const User = mongoose.model("users", userSchema);
module.exports = User;