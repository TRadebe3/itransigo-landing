/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498DB',
        secondary: '#F39C12',
        accent: '#2980B9',
        neutral: '#E0E0E0',
      },
    },
  },
  plugins: [],
}
