/**
 * ESLint configuration for Next.js projects
 */
module.exports = {
  extends: [
    './react.js',
  ],
  rules: {
    // Add any Next.js specific rules here
    // Disabled to allow custom link components and for pages outside the router
    '@next/next/no-html-link-for-pages': 'off',
    '@next/next/no-img-element': 'warn',
  },
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
};