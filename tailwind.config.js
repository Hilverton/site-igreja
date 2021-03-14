const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-blue': '#19446a',
        'my-green': '#16c79a',
        'cool-gray': colors.coolGray,
        'my-orange': '#e3651b',
        'my-yellow': '#ffc80b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
