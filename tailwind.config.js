/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./Component/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
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
