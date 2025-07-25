const express = require('express');
const router = express.Router();
const { createAdminUser } = require('../controllers/adminController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Add new admin/agent directly (only allowed by admin)
router.post('/create-user', protect, isAdmin, createAdminUser);

module.exports = router;
