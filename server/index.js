const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const societyRoutes = require("./routes/society.route");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(
  cors()
);

// Middleware
app.use(express.json());

// Routes
app.use("/api/societies", societyRoutes);

// Connect to MongoDB
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTERNAME}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
