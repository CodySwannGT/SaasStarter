/**
 * ESLint configuration for Node.js projects
 */
module.exports = {
  extends: ['./base.js'],
  env: {
    node: true,
  },
  plugins: ['node'],
  rules: {
    'no-process-exit': 'error',
    'node/no-deprecated-api': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'import/no-commonjs': 'off',
  },
};