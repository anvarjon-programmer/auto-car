/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#0B1736',
        hover:'#0B1736',
        lineRed:'#A4031F',
        primaryBG:'#F5F5F5',
        textWhite:'#F5F5F5',
      },
      screens: {
        xs: '30rem',
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
        xl: '80rem',
        '2xl': '90rem',
      },
    },
  },
  plugins: [],
}

