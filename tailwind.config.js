/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6A1B9A',
        navbg: '#AB47BC',
        navhover: '#8E24AA',
        navtext: '#8E24AA',
      },
      fontFamily:{
        worksans:"'worksans'"
      }
    },
  },
  plugins: [],
};

