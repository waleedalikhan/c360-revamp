/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000073',
        secondary: '#FF006D',
        light: {
          gray: '#c4c4c4',
          'lighter-gray': '#ECECEC'
        }
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ebGaramond: ["EB Garamond", "serif"],
        alef: ['Alef', 'sans-serif']
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
