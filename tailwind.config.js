const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'game-primary': '#6E44FF',
        'game-secondary': '#FF44E3',
        'game-accent': '#44FFED',
        'game-dark': '#1A1B26',
        'game-light': '#F3E8FF',
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        game: ['Press Start 2P', 'cursive'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-out',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            textShadow: '0 0 12px var(--game-accent-color)',
          },
          '50%': {
            opacity: '0.8',
            textShadow: '0 0 20px var(--game-accent-color)',
          },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}