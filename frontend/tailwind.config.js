/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handjet: ["'Handjet'", "cursive"], // Extend with Handjet font
        arima: ["'Arima'", "cursive"],
        poppins: ["'Poppins'", "cursive"],
        roboto: ["'Roboto'", "cursive"],
      },
    },
  },
  plugins: [],
};
