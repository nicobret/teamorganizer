/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      title: ["Instrument serif", "serif"],
    },
    extend: {},
  },
  // plugins: [require("@tailwindcss/forms")],
};
