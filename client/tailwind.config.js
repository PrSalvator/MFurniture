/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blak: "#2B2B2B",
        gray: "#D6D6D6",
        table: "#3F434A",
        dark: {
          gray: "#757575",
        },
        light: {
          gray: "#F2F2F2",
          blue: "#DDEBFF",
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      fontSize: {
        h1: "28px",
        h3: "18px",
        h2: "24px",
        table: "16px"
      },
    },
  },
  plugins: [],
};
