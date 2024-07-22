import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'beige-dark': '#e5dace',
				beige: '#f3ece6'
			},
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
				montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans]
			},
			backgroundImage: {
				'fondo-home-hor': 'linear-gradient(to right, #e5dace 40%, white 40%)',
				'fondo-home-ver': 'linear-gradient(to top, #e5dace 65%, white 30%)'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
