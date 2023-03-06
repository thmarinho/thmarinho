/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/public/hero.webp')",
      },
      colors: {
        navBar: {
          DEFAULT: "#242936",
        },
        fileFinder: {
          DEFAULT: "#1f2430",
        },
        main: {
          DEFAULT: "#242936",
        },
        superLightGray: {
          DEFAULT: "#80808040"
        },
        ayu: {
          yellow: "#e6b450",
          green: "#d5ff80",
          blue: "#95e6cb",
          orange: "#f29e74",
        },
      },
      borderWidth: {
        1: "1px",
      },
      minWidth: {
        12: "3rem"
      },
      fontSize: {
        "md": ["0.9375rem", "22px"],
      }
    },
  },
  plugins: [],
}
