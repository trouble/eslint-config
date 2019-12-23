module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/react-a11y',
    './rules/react-hooks',
    './rules/react',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  rules: {},
};
