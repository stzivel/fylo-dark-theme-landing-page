/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs' : '375px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary-intro-mail' : 'hsl(217, 28%, 15%)',
        'primary-main' : 'hsl(218, 28%, 13%)',
        'primary-footer' : 'hsl(216, 53%, 9%)',
        'primary-testimonials' : 'hsl(219, 30%, 18%)',
        'accent-cyan' : 'hsl(176, 68%, 64%)',
        'accent-blue' : 'hsl(98, 60%, 50%)',
        'accent-light-red' : 'hsl(0, 100%, 63%)',

      },
    
    },
  },
  plugins: [],
}
