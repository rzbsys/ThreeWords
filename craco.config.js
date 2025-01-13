const path = require("path");

module.exports = {
	webpack: {
		alias: {
			"@src": path.resolve(__dirname, "./src"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@styles": path.resolve(__dirname, "./src/styles"),
		},
	},
};
