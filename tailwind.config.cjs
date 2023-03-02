/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				"two":{
					// colors from image: #9E6928, #15D6B1, #FEF9EF, #502B00, #161006
					"primary": "#15D6B1",
					"secondary": "#9E6928",
					"accent": "#f44007", // accent is complementary to primary
					"neutral": "#161006", // #1b1513
					"base-100": "#1b1513",
					"info": "#502B00",
					"success": "#15D6B1",
					"warning": "#9E6928",
					"error": "#502B00",
				},
			},
		],
	},
}
