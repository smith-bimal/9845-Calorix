const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const dishRouter = require("./routers/dish.route");
const itemRouter = require("./routers/item.route");

dotenv.config(); // Load environment variables
console.log(process.env.PORT);
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/dishes", dishRouter);
app.use("/api/items", itemRouter);

// Placeholder route for testing
app.get('/', (req, res) => {
    res.send('QR Food Calorie Backend is running!');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
