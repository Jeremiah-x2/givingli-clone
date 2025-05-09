const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pro-light": "#c0c6fe",
        bg: "#b8cedc",
        "heart-dark": "#184363",
        heart: "#b8cedc",
        creativity: "#c3b2e7",
        passion: "#f682a5",
        balance: "#c9da8f",
      },
    },
    fontFamily: {
      larken: ["Larken", "sans serif"],
      underdog: ["Underdog", "system-ui"],
      larkin: ["Larkin Capitals", 'sans'],
      mauline: ["Mauline", 'sans'],
      worn:['"worn path"', 'sans'],
      jane:['"Jane Roe"', 'sans'],
      poppins: ["Poppins", 'sans']
    },
  },
  plugins: [],
};
