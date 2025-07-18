#!/bin/bash

echo "📦 Creating backend folder and initializing Node.js..."
mkdir backend && cd backend
npm init -y

echo "📥 Installing core packages..."
npm install express mongoose dotenv cors bcryptjs jsonwebtoken

echo "🧪 Installing dev dependencies..."
npm install -D nodemon

echo "🗂 Creating folder structure..."
mkdir config controllers models routes middleware utils

touch server.js .env

echo "🔧 Creating config/db.js..."
cat > config/db.js <<EOL
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error(\`Error: \${error.message}\`);
    process.exit(1);
  }
};

module.exports = connectDB;
EOL

echo "🔐 Creating utils/generateToken.js..."
cat > utils/generateToken.js <<EOL
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = generateToken;
EOL

echo "⚙️ Creating basic Express server..."
cat > server.js <<EOL
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API is running...'));

// Auth routes will be mounted here
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
EOL

echo "📄 Creating .env file..."
cat > .env <<EOL
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=supersecretkey
EOL

echo "🔁 Adding nodemon to package.json scripts..."
npx json -I -f package.json -e 'this.scripts.dev="nodemon server.js"'

echo "✅ Backend setup complete. Run 'cd backend && npm run dev' to start your server."
