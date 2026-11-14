
const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 15000,
    });

    console.log("DARB MongoDB connected successfully");
  } catch (error) {
    console.error("DARB MongoDB connection failed");
    console.error("Error name:", error.name);
    console.error("Error code:", error.code || "N/A");
    console.error("Error details:", error.message);
    throw error;
  }
}

module.exports = connectDB;
