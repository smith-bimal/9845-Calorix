const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
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

const User = mongoose.model("users", UserSchema);
module.exports = User;