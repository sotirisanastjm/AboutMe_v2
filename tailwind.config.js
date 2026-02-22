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
        '900': '#0f0f0f',
        '800': '#1c1c1e',
        '700': '#3a3a3c',
        '600': '#636366',
        '500': '#8e8e93',
        '400': '#aeaeb2',
        '300': '#c7c7cc',
        '200': '#e5e5ea',
        '100': '#f0eeeb',
      },
      'white':    '#faf8f5',
      'black':    '#0f0f0f',
      'dark-blue': '#0a0a0a',
      'accent':   '#c4856c',
      'accent-dark': '#d4a08a',
    }
  },
  plugins: [],
}

