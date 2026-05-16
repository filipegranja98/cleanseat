/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077B6',
        secondary: '#00B4D8',
        accent: '#90E0EF',
        green: {
          DEFAULT: '#4ADE80',
          dark: '#22C55E'
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#128C7E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
