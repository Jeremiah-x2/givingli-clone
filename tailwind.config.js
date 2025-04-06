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
      sans: ["Underdog", ...defaultTheme.fontFamily.sans],
      larken: ["Larken", "sans serif"],
      underdog: ["Underdog", "system-ui"],
    },
  },
  plugins: [],
};
