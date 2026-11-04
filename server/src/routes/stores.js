
const express = require("express");
const router = express.Router();

// عرض جميع المتاجر
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "DARB Stores API",
    stores: []
  });
});

// عرض متجر محدد
router.get("/:id", (req, res) => {
  res.json({
    success: true,
    message: "Store details",
    storeId: req.params.id
  });
});

// إضافة متجر جديد
router.post("/", (req, res) => {
  const { name, type, address, phone } = req.body;

  if (!name || !type || !address) {
    return res.status(400).json({
      success: false,
      message: "Name, type and address are required"
    });
  }

  res.status(501).json({
    success: false,
    message: "Store database connection is pending"
  });
});

module.exports = router;
