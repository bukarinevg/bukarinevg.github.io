/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      'darkPrimary': '#333',
      'darkSecondary': '#555',
      'lightPrimary': '#f1f1f1',
      'lightSecondary': '#ccc',

    },
    extend: {
      boxShadow: {
        custom: '0 7px 46px rgba(30,32,68,.24)',
      },
    },

  },
  plugins: [],
}

