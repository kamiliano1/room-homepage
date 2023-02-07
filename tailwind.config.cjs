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
      backgroundColor: {
        darkend: "rgba(0,0,0,.6)"
      },
      fontWeight: {
        500: "500",
        600: "600",
        700: "700"
      },
      fontSize: {
        "4xl": ["2.17rem", "2.5rem"],
        sm: ["0.9125rem" , "1.125rem"]
      },
      gridTemplateColumns:
      {
        '20/80': '30% 30% 10% 30%',
      },
      gridTemplateRows: {
        '67/33' : 'minmax(300px, 535px) minmax(40px, 90px) 240px'
      },
      height: {
        320: "max(320px, 40vh)"
      },
      padding: {
        cl: "clamp(1rem, 5vw, 4rem)"
        // cl: "5vw"
      }
    },
  },
  plugins: [],
}
