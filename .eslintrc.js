module.exports = {
	// So parent files don't get applied
	root: true,
	globals: {
		preval: false,
		AMap: true
	},
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier"
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 7,
		sourceType: 'module',
		project: "./tsconfig.json"
	},
	plugins: [
		"@typescript-eslint",
		"prettier"
	],
	rules: {
		"prettier/prettier": 2,
		'no-extra-boolean-cast': 0,
		'react/jsx-filename-extension': 0,
		'react/destructuring-assignment': 0,
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
		'react/no-array-index-key': 0,
		'max-len': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'react/sort-comp': 0,
		'react/state-in-constructor': 0,
		'prefer-destructuring': 0,
		'import/prefer-default-export': 0,
		'no-param-reassign': 0,
		'no-await-in-loop': 0,
		'no-plusplus': 0,
		'no-nested-ternary': 0,
		'react/display-name': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/interface-name-prefix': 0,
		'no-case-declarations': 0,
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-var-requires': 0,
		"@typescript-eslint/no-use-before-define": 0,
		"@typescript-eslint/camelcase": 0,
	},
	settings: {
		'react': {
			'pragma': "React",
			'version': "16.4"
		},
	},
};
