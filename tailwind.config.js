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
        '900': '#27374D',
        '800': '#3d5268',
        '700': '#526D82',
        '600': '#7890a1',
        '500': '#9DB2BF',
        '400': '#bdccd6',
        '300': '#DDE6ED',
        '200': '#eef3f6',
        '100': '#f7f9fb',
      },
      'white':    '#EEEEEE',
      'black':    '#212121',
      'dark-blue': '#1E2832',
    }
  },
  plugins: [],
}

