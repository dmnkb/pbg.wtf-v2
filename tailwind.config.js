/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
				heading: [
					"Trap",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
			},
			colors: {
				primary: "#E3F8EE",
				black: "#2C232E",
				grey: "#F0F0F0",
			},
			fontSize: {
				h1: "40px",
				"copy-large": "20px",
				copy: "16px",
			},
			letterSpacing: {
				h1: "-0.05em",
				"copy-large": "-0.02em",
				copy: "-0.02em",
			},
			lineHeight: {
				h1: "120%",
				"copy-large": "170%",
				copy: "170%",
			},
			boxShadow: {
				main: "-5px 5px 0px #2C232E",
				// main: "-5px 5px 0px #80F5C6",
				"main-off": "0px 0px 0px #80F5C6",
			},
		},
	},
	plugins: [],
}
