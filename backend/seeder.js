const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  try {
    await User.deleteMany(); // optional if you want a clean DB

    await User.create([
      {
        name: 'Admin User',
        email: 'admin@samishhomes.com',
        password: 'admin123',
        phone: '08000000000',
        role: 'admin',
      },
      {
        name: 'Agent User',
        email: 'agent@samishhomes.com',
        password: 'agent123',
        phone: '08111111111',
        role: 'agent',
      },
    ]);

    console.log('✅ Admin and Agent seeded');
    process.exit();
  } catch (err) {
    console.error('❌ Failed to seed:', err);
    process.exit(1);
  }
});
