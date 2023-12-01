/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#2a61ff",
				bg: {
					DEFAULT: "#ecf4fd",
					200: "#f2f6ff",
				},
				ligth: "#fdfeff",
				title: {
					DEFAULT: "#152c5b",
					200: "#93b0c8",
					500: "#5c7099",
				},
			},
		},
	},
	plugins: [],
};
