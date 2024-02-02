/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content:["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    screens: {
      'sm': '768px',
     
      'md': '980px',
     
      'lg': '1240px',
      
      'xl': '1280px',
      
      '2xl': '1536px',

    },
    colors:{
      blue: {
        'black':  '#27374D',
        'dark': '#526D82',
        'bright': '#9DB2BF',
        'light': '#DDE6ED',
      },
      'white':    '#EEEEEE',
      'black':    '#212121',
      'dark-blue': '#1E2832',
    }
  },
  plugins: [],
}

