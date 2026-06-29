console.log("file started");
const express = require('express');
const cors  = require('cors');
require("dotenv").config();

const paymentRoutes = require('./routes/paymentRoutes')

const app = express();


app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

app.use("/api/payment", paymentRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
console.log("file ended");