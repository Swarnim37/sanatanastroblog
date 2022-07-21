module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
