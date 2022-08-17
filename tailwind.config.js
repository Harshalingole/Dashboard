/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgPurple: "var(--bgPurple)",
        bgWhite: "var(--bgWhite)",
        bgGray: "var(--bgGray)",
        bgGray1: "var(--bgGray1)",
        bgLightGray: "var(--bgLightGray)",
        textBlack: "var(--textBlack)",
        textGreen: "var(--textGreen)",
        textGray: "var(--textGray)",
      },
    },
  },
  plugins: [],
}