/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    keyframes:{
      wave:{
        '0%':{
            backgroundPositionX:'100%'
        },'100%':{
            backgroundPositionX:'0%'
        },
        
      },rewave:{
        '0%':{
            backgroundPositionX:'0%'
        },'100%':{
            backgroundPositionX:'100%'
        },
        
      }
    },
    extend: {
      fontFamily: {
        Qwitcher:['Qwitcher Grypen', ],
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  plugins: [],
}

