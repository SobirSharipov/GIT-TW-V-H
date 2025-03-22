/ @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
   content: ["./src//*.{html,js}"],
   theme: {
     extend: {},
     screens: {

      'xs': '0px',   // Phones
      'md': '510px',   // ipad
      'lg': '1280px',  // Desktops

  },
   },
   plugins: [],
 }

