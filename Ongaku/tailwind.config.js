/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // fonts for 'Anime Neon' theme
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
      },
      // animation for the glow pulse
      animation: {
        'glow-pulse': 'glow-pulse 3s infinite alternate',
      },
      // Define keyframes for the glow pulse
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};