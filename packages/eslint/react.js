/**
 * ESLint configuration for React/React Native projects
 */
module.exports = {
  extends: [
    './base.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // Disabled because we use TypeScript for type checking instead of PropTypes
    'react/prop-types': 'off',
    // Disabled because React 17+ doesn't require importing React for JSX
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-sort-props': ['warn', {
      callbacksLast: true,
      shorthandFirst: true,
      ignoreCase: true,
      reservedFirst: true,
    }],
  },
  overrides: [
    {
      files: ['**/*.tsx', '**/*.jsx'],
      rules: {
        // Disabled because of the new JSX transform in React 17+
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'warn',
      },
    },
  ],
};