module.exports = {
  extends: ["@saas-starter/eslint-config/react"],
  overrides: [
    {
      files: ["*.tsx", "*.jsx"],
      rules: {
        "react/jsx-sort-props": "off", // Turn off prop sorting for frontend
      },
    },
    {
      files: ["components/ui/**/*.{ts,tsx,js,jsx}"],
      rules: {
        // Ignore all rules for UI components
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "react/prop-types": "off",
        // Add other rules as needed
      },
    },
  ],
  ignorePatterns: ["components/ui/**/*"],
};
