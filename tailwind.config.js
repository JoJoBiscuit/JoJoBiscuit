const colors = require('tailwindcss/colors')

// tailwind.config.js
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      spa: {
        900: '#80350D',
        600: '#F18D02',
        500: '#F5A200',
        100: '#FFFDE5',
        50: '#F4F4F4',
      },
      ...colors
    },
    extend: {
      height: {
        '102': '28rem',
        '108': '32rem',
        '116': '38rem',
        'screen-90': '90vh',
        'screen-75': '75vh',
        'screen-50': '50vh',
      },
      minHeight: {
        '32': '12rem',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['active'],
      opacity: ['active'],
    },
  },
  plugins: [],
}