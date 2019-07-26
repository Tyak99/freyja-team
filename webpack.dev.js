const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    // TODO: Change this back to 3000
    port: 3001,
    open: true,
    historyApiFallback: true,
  },
});
