/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			"backgroundImage": {
				"forspoken": "url(background_forspoken.png)",
				"blur": "url(login.svg)"
			},
			"fontFamily":{
				"sora": '"Sora", sans-serif'
			}
    },
	},
	plugins: [],
}
