/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '540px',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      colors: {
        primary: {
          100: '#2E8B57',
          200: '#eaf3ee',
          300: '#00646F',
          400: '#d5e8dd',
          500: '#b3d1d4',
          600: '#00C8F1',
          700: '#BEFBFF',
        },
        secondary: {
          100: '#0088BE',
          200: '#e6f3f9',
          300: '#CE5348',
        },
        grey: {
          100: '#ced4da',
          200: '#868e96',
          300: '#f8f9fa',
        },
        decor: {
          100: '#abcbc2',
          200: '#99cfdb',
          300: '#becdea',
        },
        width: {
          128: '32rem',
        },
      },
    },
  },
  plugins: [],
};
