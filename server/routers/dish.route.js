const express = require("express");
const Dish = require("../models/dish");
const router = express.Router();

router.post("/", (req, res) => {
    console.log(req.body);
    res.send("hello dishes");
})

router.route('/:id').get(async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id);
        res.status(200).send(dish);
    } catch (e) {
        res.status(500).send(e);
    }
})
    .put(async (req, res) => {
        try {
            await Dish.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                items: [

                ]
            })
        } catch (e) {

        }
    }).delete(async (req, res) => {
        try {
            await Dish.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Dish deleted successfully." });
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    })

module.exports = router;
