const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to MongoDB");
};

connectToMongo();

// Middleware to go here
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("Welcome to home page!");
});

app.get("/users", (req, res) => {
  res.send("Users page.");
});

app.listen(port, () => {
  console.log("Backend server is running");
});
