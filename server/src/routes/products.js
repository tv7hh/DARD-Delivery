const express = require("express");
const router = express.Router();

let products = [];
let nextId = 1;

// عرض جميع المنتجات
router.get("/", (req, res) => {
  res.json({
    success: true,
    products
  });
});

// إضافة منتج
router.post("/", (req, res) => {
  const { name, price, storeId, description } = req.body;

  if (!name || price == null || !storeId) {
    return res.status(400).json({
      success: false,
      message: "يرجى إدخال اسم المنتج والسعر ورقم المتجر"
    });
  }

  if (!Number.isFinite(Number(price)) || Number(price) < 0) {
    return res.status(400).json({
      success: false,
      message: "السعر غير صالح"
    });
  }

  const product = {
    id: nextId++,
    name,
    price: Number(price),
    storeId,
    description: description || ""
  };

  products.push(product);

  res.status(201).json({
    success: true,
    product
  });
});

// حذف منتج
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const oldLength = products.length;

  products = products.filter(p => p.id !== id);

  if (products.length === oldLength) {
    return res.status(404).json({
      success: false,
      message: "المنتج غير موجود"
    });
  }

  res.json({
    success: true,
    message: "تم حذف المنتج"
  });
});

module.exports = router;
