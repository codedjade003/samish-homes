// backend/routes/agentRoutes.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getAgentProfile,
  updateAgentProfile
} = require('../controllers/agentController');

// GET agent profile
router.get('/profile', protect, getAgentProfile);

// PUT update agent profile
router.put('/profile', protect, updateAgentProfile);

module.exports = router;
