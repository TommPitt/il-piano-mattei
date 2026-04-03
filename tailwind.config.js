/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mattei-white': '#FFFFFF',
        'mattei-black': '#0A0A0A',
        'mattei-ochre': '#C4A747',
        'mattei-blue': '#2C3E50',
        'mattei-yellow': '#F4D03F',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}// JavaScript Document