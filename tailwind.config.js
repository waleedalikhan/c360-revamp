/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
    extend: {
      colors: {
        primary: "#000073",
        secondary: "#FF006D",
        light: {
          gray: "#c4c4c4",
          "lighter-gray": "#ECECEC",
          purple: "#7878e833",
          slate: "#E5E5E5",
        },
        dark: {
          gray: "#1E1E1E",
          purple: "#3636A5",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ebGaramond: ["EB Garamond", "serif"],
        alef: ["Alef", "sans-serif"],
      },
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
