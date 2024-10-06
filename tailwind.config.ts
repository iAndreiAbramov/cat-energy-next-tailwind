import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/lib/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'btn-green': '#68B738',
				'btn-green-darker': '#5EAA2F',
				'btn-gray': '#F2F2F2',
				'btn-gray-darker': '#EBEBEB',
			},
		},
	},
	plugins: [],
};
export default config;
