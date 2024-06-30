const js = require("@eslint/js")
const tseslint = require('typescript-eslint')
const prettierConfig = require('eslint-config-prettier')

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    ignores: ['**/.*', 'wp-content/*', 'esbuild.config.js'],
  },
  {
    rules: {
      'no-unused-vars': 'error',
      'no-const-assign': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]
