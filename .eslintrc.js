module.exports = {
	root: true,

	parserOptions: { ecmaVersion: 2020 },

	env: {
		node: true,
		es2020: true
	},

	extends: ["lux", "lux/import", "lux/promise"],

	rules: { "import/no-unassigned-import": "off" },

	overrides: [
		{
			files: ["scripts/gulp/*"],
			parserOptions: { sourceType: "module" }
		}
	]
};
