/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			...colors,
			base: '#eeedec',
			'second-base': '#d1d2d4',
			primary: '#a6cdcd',
			secondary: '#d5c4b4',
			third :'#242c35',

		}
	},
	plugins: [],
};
