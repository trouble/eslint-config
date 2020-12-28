module.exports = {
  plugins: [
    'node',
  ],
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  rules: {},
};
