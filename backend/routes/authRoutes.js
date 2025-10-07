const express = require("express");
const multer = require("multer");
const router = express.Router();

// Multer setup (memory storage, good for uploading to Cloudinary)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Import controller functions
const {
  registerUser,
  loginUser,
  logoutUser,
  resetpasswordrequest,
  resetpassword,
  checkEmailExists,
} = require("../controllers/authController");

// Register route with image upload middleware
router.post("/register", upload.single("img"), registerUser);

router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/forgot-password", resetpasswordrequest);
router.post("/reset-password", resetpassword);
router.get("/check-email", checkEmailExists);

module.exports = router;
