const express = require('express');
const {
  registerUser,
  loginUser,
  getProfile,
  forgotPassword,
  updateProfile,
} = require('../controllers/authController');

const { protect, authorizeRole } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);
router.post('/forgot-password', forgotPassword);

router.put('/profile', protect, updateProfile);

// Example protected route (admin only)
router.get(
  '/admin-stats',
  protect,
  authorizeRole('admin'),
  (req, res) => res.json({ message: 'Admin data here' })
);

module.exports = router;
