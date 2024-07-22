/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#ee6c4d',
        secondary: '#98C1D9',
        darkBlue: '#293241'
      },
      aspectRatio: {
        story: '9/16'
      }
    },
  },
  plugins: [],
}
