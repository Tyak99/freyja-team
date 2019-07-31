const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const common = require('./webpack.common.js');

const uglifyPlugin = new UglifyJsPlugin({
  cache: true,
  parallel: true,
  sourceMap: true,
});
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    uglifyPlugin,
    new ImageminPlugin({
      pngquant: ({ quality: [0.5, 0.5] }),
      plugins: [imageminMozjpeg({ quality: 50 })],
    }),
  ],
});
