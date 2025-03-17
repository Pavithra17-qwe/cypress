const webpack = require('webpack');

module.exports = {
  resolve: {
    alias: {
      process: "process/browser", // Resolving 'process/browser'
      url: require.resolve('url')  // Resolving 'url'
    },
    fallback: {
      // Any additional fallback modules can be added here
    }
  },
};
