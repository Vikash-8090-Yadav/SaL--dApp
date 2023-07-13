/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./Component/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'lily-script-one': ['Lily Script One', 'sans-serif'],
				'Inter': ['Inter','sans-serif'],
				'Poppins': ['Poppins', 'sans-serif']
			},
		},
	},

	variants: {
		extend: {
			display: ["group-focus"],
			opacity: ["group-focus"],
			inset: ["group-focus"],
		},
	},

	plugins: [require("@tailwindcss/line-clamp")],
};
