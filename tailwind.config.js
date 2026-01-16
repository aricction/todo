/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // enables class-based dark mode
  theme: {
    extend: {
      colors: {
        darkbg: "#0f172a",  // dark page background
        darkinput: "#1e293b", // dark input/button background
      },
    },
  },
  plugins: [],
};
