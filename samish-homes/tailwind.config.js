/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          dark: '#1e40af',
        },
          samish: {
          primary: '#4F46E5',
          secondary: '#10B981',
          dark: '#1F2937',
          light: '#F9FAFB',
        },
      },
    },
  },
  plugins: [],
}
