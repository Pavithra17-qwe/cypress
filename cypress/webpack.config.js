const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      url: require.resolve('url'),
    },
  },
};
