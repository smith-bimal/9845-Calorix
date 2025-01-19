const User = require("../models/user");

const saveDish = async (req, res) => {
    try {
        const { dish, items } = req.body;
        const user = await User.findOne({ email: req.query.email });
        if (!user) {
            return res.status(401).json({ message: "User not found." });
        }

        await User.findByIdAndUpdate(user.id, {
            preferences: [...user.preferences, { dish, items }]
        })

        return res.status(200).json({ message: "Preferences saved successfully." });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

module.exports = { saveDish }