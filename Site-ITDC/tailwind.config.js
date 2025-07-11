/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        itdc: 'rgb(225, 135, 40)',
        bleuIt : '#0faae7',
        grisFond : '#ecf0f2'
      },
      screens : {
        'small': '790px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.3s ease-out',
      },
      fontFamily :{
        
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        typing: 'typing 3s steps(22) forwards',
        blink: 'blink 0.7s step-end infinite',
      },
    },
  },
  plugins: [],
}

