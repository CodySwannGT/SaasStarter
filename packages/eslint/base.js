/**
 * Base ESLint configuration for all TypeScript projects
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'eslint-comments'],
  rules: {
    // Disabled because we use TypeScript's inference for better developer experience
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // 'no-console' rule removed to allow console usage
    'eslint-comments/require-description': ['error', { ignore: [] }],
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
      env: {
        jest: true,
      },
      rules: {
        // Disabled in test files to allow flexible test data structures
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.js', '*.cjs'],
      env: {
        node: true,
      },
      rules: {
        // Disabled to allow CommonJS require in JavaScript/configuration files
        '@typescript-eslint/no-var-requires': 'off',
        // Disabled to allow CommonJS import pattern in JavaScript/configuration files
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
  ignorePatterns: ['node_modules/', 'dist/', 'build/', '.turbo/', '**/*.d.ts'],
};