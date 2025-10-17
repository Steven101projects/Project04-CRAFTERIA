/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        rocatwo: ["'Roca Two'", "serif"],
        spartan: ["'League Spartan'", "sans-serif"],
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
}