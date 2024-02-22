
/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        blackBG: "url(assets/BG.png)",
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
