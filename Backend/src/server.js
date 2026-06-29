console.log("file started");
const express = require('express');
const cors  = require('cors');
require("dotenv").config();

const paymentRoutes = require('./routes/paymentRoutes')

const app = express();


const allowedOrigins = [
  "http://localhost:5173",
  "https://mini-ecommerce-tq21-qi6pfdf30-rathodshaabs-projects.vercel.app/"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

app.use("/api/payment", paymentRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
console.log("file ended");