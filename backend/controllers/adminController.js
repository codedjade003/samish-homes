const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// POST /api/admin/create-user
exports.createAdminUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Email, password and role are required' });
  }

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      name: name || "", // optional
      email,
      password,
      role, // must be either 'admin' or 'agent'
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};