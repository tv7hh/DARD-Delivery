
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const healthRoutes = require("./routes/health");

app.use("/api/health", healthRoutes);
const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);
const storesRoutes = require("./routes/stores");

app.use("/api/stores", storesRoutes);
app.get("/", (req, res) => {
  res.json({
    project: "DARB",
    message: "DARB Central Server",
    version: "1.0.0"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`DARB Server running on port ${PORT}`);
});
