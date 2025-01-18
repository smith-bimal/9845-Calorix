const User = require("../models/user");
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let hashedPassword = bcrypt.hashSync(password, 10);

        let newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        return res.status(200).json({ message: "User registered successfully" });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "User not found." });
        }

        const isAuthenticated = bcrypt.compareSync(password, user.password);
        if (!isAuthenticated) {
            return res.status(401).json({ message: "Wrong credentials." });
        }

        return res.status(200).json({ message: "User Logged in successfully." });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

module.exports = { register, login }