/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: '#FB2E86',
      secondary: '#FB2E86',
      white: '#FFF',
      fontColor: '#FB2E86'
    },
    fontFamily: {
      jos: ['Josefin Sans'],
      lato: ['lato']
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [require("daisyui")],
}

