#!/bin/bash

# Create Vite + React + TypeScript project
echo "Creating Vite project..."
npm create vite@latest samish-homes -- --template react-ts

cd samish-homes

# Initialize Git
echo "Initializing Git..."
git init

# Install dependencies
echo "Installing dependencies..."
npm install

# Install Tailwind CSS and related packages
echo "Installing Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configure Tailwind to remove unused styles in production
echo "Configuring Tailwind..."
cat > tailwind.config.js <<EOL
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Create main CSS file with Tailwind directives
mkdir -p src/styles
cat > src/styles/index.css <<EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# Create initial folder structure
echo "Creating project folders..."
mkdir -p src/components
mkdir -p src/pages
mkdir -p src/layouts
mkdir -p src/context
mkdir -p src/hooks
mkdir -p src/types
mkdir -p src/assets
mkdir -p src/data

# Update main.tsx to import Tailwind CSS
echo "Updating main.tsx..."
sed -i '/import React/a import "./styles/index.css";' src/main.tsx

# Initialize routing setup (react-router)
echo "Installing React Router..."
npm install react-router-dom

# Done
echo "✅ Setup complete. cd into 'samish-homes' and run 'npm run dev' to start the server."
