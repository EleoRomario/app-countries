/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#3361ff",
				ligth: "#fafbfc",
				bg: "#e6eaf2",
				title: {
					DEFAULT: "#192233",
					200: "#7d8fb2",
					500: "#5c7099",
				},
			},
		},
	},
	plugins: [],
};
