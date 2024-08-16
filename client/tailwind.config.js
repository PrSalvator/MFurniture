/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blak: "#2B2B2B",
        gray: "#D6D6D6",
        dark: {
          gray: "#757575"
        },
        light: {
          gray: "#F2F2F2"
        } 
      },
      fontFamily:{
        lato: ["Lato", "sans-serif"]
      },
      fontSize:{
        h3: "18px",
        h2: "28px"
      }
    },
  },
  plugins: [],
}

