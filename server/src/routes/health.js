
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    project: "DARB",
    service: "Central API",
    status: "operational",
    version: "1.0.0"
  });
});

module.exports = router;
