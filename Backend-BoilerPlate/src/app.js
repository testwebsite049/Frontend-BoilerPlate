const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(cors({ credentials: true, origin: `http://localhost:5173` }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

module.exports = app;
