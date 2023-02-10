/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': "704px",
        'lg': '1024px',
      },

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
      gridTemplateColumns: {
        'midScreen': "1fr 1fr 1fr 1fr",
        'bigScreen': "3fr 3fr max-content 3fr",
      },
      gridTemplateRows: {
        'midScreen' : 'minmax(300px, 435px) 80px min(30vw, 250px) min(30vw, 250px)',
        'bigScreen' : 'minmax(300px, 435px) 80px min(30vw, 250px)'
      },
      height: {
        320: "max(320px, 30vh)"
      },
      padding: {
        cl: "clamp(1rem, 25vw, 3rem)",
        cl2: "clamp(5rem, 15vw, 4rem)"
      }
    },
  },
  plugins: [],
}
