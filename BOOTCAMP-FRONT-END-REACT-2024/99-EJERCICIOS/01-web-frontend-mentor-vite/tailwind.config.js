/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        'pice-orange': 'hsl(35, 77%, 62%)',
        'pice-red': 'hsl(5, 85%, 63%)',
        'pice-white': 'hsl(36, 100%, 99%)',
        'pice-light': 'hsl(233, 8%, 79%)',
        'pice-gray': 'hsl(236, 13%, 42%)',
        'pice-black': 'hsl(240, 100%, 5%)',
      },
      fontFamily: {
        inter: 'Inter'
      },
    },
  },
  plugins: [],
}
