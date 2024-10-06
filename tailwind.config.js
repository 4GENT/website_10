module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // Указываем путь ко всем файлам в папке src
	],
	theme: {
		extend: {
			backgroundImage: {
				"custom-gradient":
					"linear-gradient(315deg, rgba(0,0,0,1) 14%, rgba(191,22,199,1) 60%, rgba(0,41,185,1) 100%)",
			},
		},
	},
	plugins: [],
};
