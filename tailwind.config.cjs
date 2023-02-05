/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: "hsl(0, 0%, 63%)",
        black: "hsl(0, 0%, 0%)",
        white: "hsl(0, 0%, 100%)",
        veryDarkGrey: "hsl(0, 0%, 27%)"
      },
      fontWeight: {
        500: "500",
        600: "600",
        700: "700"
      }
    },
  },
  plugins: [],
}
