/** @type {import('tailwindcss').Config} */
const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./Component/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "lily-script-one": ["Lily Script One", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      max1: { max: "1150px" },
      ...screens,
    },
  },

  variants: {
    extend: {
      display: ["group-focus"],
      opacity: ["group-focus"],
      inset: ["group-focus"],
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
