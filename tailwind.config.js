/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'Frank': ['Frank Ruhl Libre', ' serif '],
      
    },
    extend: {
      colors: {
      
        BannerColor: '#FAE3B6 ',
        BtnColor: '#FDBB57 ',
  
        
      }
    },
  },
  plugins: [],
}
