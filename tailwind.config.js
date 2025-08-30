/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				'squirrel-50': '#f9f8f7',
				'squirrel-100': '#f2efee',
				'squirrel-200': '#e7e3e1',
				'squirrel-300': '#d6cfcb',
				'squirrel-400': '#bdb2ac',
				'squirrel-500': '#9b8b83',
				'squirrel-600': '#8d7d75',
				'squirrel-700': '#746761',
				'squirrel-800': '#625752',
				'squirrel-900': '#544c48',
				'squirrel-950': '#2b2624',
			},
		},

		screens: {
			sm: '672px',
			md: '768px',
			lg: '1024px',

			xl: '1312px',
			xxl: '1440px',
			ll: '1525px',
		},
	},
	plugins: [],
}

export default config
