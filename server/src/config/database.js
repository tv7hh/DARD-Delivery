
const mongoose = require("mongoose");

async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not configured");
    }

    await mongoose.connect(uri);

    console.log("DARB MongoDB connected successfully");
  } catch (error) {
    console.error("DARB MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
