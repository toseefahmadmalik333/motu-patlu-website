/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0C0C0C',
        textLight: '#D7E2EA',
        brandOrange: {
          DEFAULT: '#FF6B00',
          hover: '#FF8533',
          dark: '#E05A00',
          glow: 'rgba(255, 107, 0, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
