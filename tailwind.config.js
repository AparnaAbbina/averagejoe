/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/*.{html,js,jsx,ts,tsx}", // Include all relevant file types
		"./public/index.html", // Include any other directories or files
	],
	theme: {
		extend: {
			gridTemplateRows: {
				"auto-1fr": "auto 1fr",
			},
		},
	},
	plugins: [],
};
