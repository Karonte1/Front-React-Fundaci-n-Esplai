/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'pice-blue': 'hsl(220, 98%, 61%)',
        'pice-light-gray': 'hsl(0, 0%, 98%)',
        'pice-light-gray-blue': 'hsl(235, 19%, 35%)',
        'pice-dark-blue': 'hsl(235, 21%, 11%)',
        'pice-dark-gray-blue': 'hsl(234, 39%, 85%)',
        'pice-cyan': 'hsl(192, 100%, 67%)',
        'pice-violet': 'hsl(280, 87%, 65%)'
      },
      fontFamily: {
        'josefin': 'Josefin Sans'
      }
    },
  },
  plugins: [],
}
