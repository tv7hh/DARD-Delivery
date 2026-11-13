
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

const healthRoutes = require("./routes/health");
const authRoutes = require("./routes/auth");
const storesRoutes = require("./routes/stores");
const productsRoutes = require("./routes/products");
const ordersRoutes = require("./routes/orders");

app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/stores", storesRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/orders", ordersRoutes);

app.get("/", (req, res) => {
  res.json({
    project: "DARB",
    message: "DARB Central Server",
    version: "1.0.0"
  });
});

const PORT = process.env.PORT || 3000;

async function startServer() {
  await connectDB();

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`DARB Server running on port ${PORT}`);
  });
}

startServer();
