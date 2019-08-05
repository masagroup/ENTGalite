const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  plugins: [
    new UglifyJsPlugin({uglifyOptions: {
      mangle: {
        keep_fnames: true,
      }
    }}),
  ]
};