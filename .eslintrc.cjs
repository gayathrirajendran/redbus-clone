/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    "@typescript-eslint/no-explicit-any": 'off',
    "@typescript-eslint/no-implicit-any": 'off',
    "@typescript-eslint/no-unsafe-assignment": 'off',
    "@typescript-eslint/no-unsafe-member-access": 'off',
    "@typescript-eslint/no-unsafe-argument": 'off',
    "@typescript-eslint/no-unsafe-call": 'off',
    "@typescript-eslint/no-unsafe-return": 'off',
    "@typescript-eslint/no-unused-vars": 'off',
    "@typescript-eslint/no-misused-promises": 'off',
    "react-hooks/exhaustive-deps": 'off',
    "@typescript-eslint/restrict-template-expressions": 'off'
  },
}