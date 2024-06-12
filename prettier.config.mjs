/** @type {import("prettier").Config} */
const config = {
	trailingComma: "es5",
	tabWidth: 2,
	useTabs: true,
	semi: false,
	experimentalTernaries: true,
	singleQuote: false,
	arrowParens: "always",
	plugins: [
		"@ianvs/prettier-plugin-sort-imports",
		"prettier-plugin-packagejson",
		"prettier-plugin-tailwindcss",
	],
	importOrder: [
		"",
		"^react$",
		"^next(-[^/]+)?(/.*)?$",
		"<BUILTIN_MODULES>",
		"<THIRD_PARTY_MODULES>",
		"^@/(.*)$",
		"^[./]",
		"",
		"<TYPES>",
		"<TYPES>^[.]",
		"",
		"^(?!.*[.]css$)[./].*$",
		".css$",
	],
	importOrderTypeScriptVersion: "5.4.5",
}

export default config
