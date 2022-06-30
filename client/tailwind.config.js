/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#bfdbfe",
        "primary-dark": "60a5fa",
        secondary: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
