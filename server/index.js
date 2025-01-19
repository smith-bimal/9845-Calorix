const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

// Routers
const dishRouter = require("./routers/dish.route");
const itemRouter = require("./routers/item.route");
const userRouter = require("./routers/user.route");
const authRouter = require("./routers/auth.route");

dotenv.config();

// Initialize app and database
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

// Middleware
app.use(cors({
    origin: "https://calorix.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
    },
}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging middleware (for debugging)
app.use((req, res, next) => {
    console.log("Session:", req.session);
    console.log("Cookies:", req.cookies);
    next();
});

// API Routes
app.use("/api/dishes", dishRouter);
app.use("/api/items", itemRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Root route
app.get("/", (req, res) => {
    res.send("QR Food Calorie Backend!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
