/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: "360px",
      sm: "580px",
      md: "760px",
      lg: "976px",
      l: "1150px",
      xl: "1300px",
      xxl: "1440px",
    },
    extend: {
      boxShadow: {
        'card-100': '0px 0px 2.5px .67138px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary_green : '#34CAA5',
        bg_white : '#F7F8FA',
        dark : '#333',
        neutral_dark : '#525252a9',
        primary_black : "#26282C"
       },
      background: {
        'gradient': 'linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)',
      },
    },
  },
  plugins: [],
};
