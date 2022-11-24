/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkestIndigo: "#05050d",
        darkerIndigo: "#0f0e27",
        darkIndigo: "#191741",
        lightestIndigo: "#eaeaf2",
        lighterIndigo: "#c1c0d9",
        lightIndigo: "#9897c0",
      },
    },
  },
  plugins: [],
};
