
const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { fullName, phone, password, role } = req.body;

  if (!fullName || !phone || !password) {
    return res.status(400).json({
      success: false,
      message: "جميع البيانات مطلوبة"
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل"
    });
  }

  res.status(501).json({
    success: false,
    message: "قاعدة البيانات ونظام التسجيل قيد التجهيز"
  });
});

module.exports = router;
