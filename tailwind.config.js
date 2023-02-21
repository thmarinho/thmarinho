/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
        }
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
