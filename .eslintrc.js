module.exports = {
  // root: true,
  // env: {browser: true, es2020: true},
  // extends: [
  //     'eslint:recommended',
  //     'plugin:@typescript-eslint/recommended',
  //     'plugin:react-hooks/recommended',
  //     'prettier'
  // ],
  // ignorePatterns: ['dist', '.eslintrc.js'],
  // parser: '@typescript-eslint/parser',
  // plugins: ['react-refresh'],
  // rules: {
  //     // 'react-refresh/only-export-components': [
  //     //     'warn',
  //     //     {allowConstantExport: true},
  //     // ],
  //     "prettier/prettier": "error",
  //     "@typescript-eslint/explicit-module-boundary-types": "off",
  //     "react/jsx-one-expression-per-line": "off",
  //     "no-use-before-define":"off",
  // },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    // 'plugin:storybook/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks', 'jest'],
  rules: {
    'react/display-name': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'react/prop-types': 0,
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
  },
};
