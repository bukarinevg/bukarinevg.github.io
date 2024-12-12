/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': {'max':'649px'},
      // => @media (min-width: 576px) { ... }

      'md':  {'min':'650px'},
      // => @media (min-width: 960px) { ... }

      'lg': { 'min': '1169px'},
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      'darkPrimary': '#333',
      'darkSecondary': '#555',
      'lightPrimary': '#f1f1f1',
      'lightSecondary': '#ccc',
      'scrollBarThumb': '#888',
      'scrollBarThumbHover': '#555',


    },
    extend: {
      boxShadow: {
        custom: '0 7px 46px rgba(30,32,68,.24)',
      },
    },

  },
  plugins: [],
}

