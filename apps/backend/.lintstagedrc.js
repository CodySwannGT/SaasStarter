module.exports = {
  "*.{js,ts}": ["eslint --fix", "prettier --write"],
  "*.{json,graphql,md}": ["prettier --write"],
};
