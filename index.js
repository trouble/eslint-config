module.exports = {
  extends: [
    './configs/base',
    './configs/react',
  ].map(require.resolve),
  rules: {},
};
