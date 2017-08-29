var webpack = require('webpack');
module.exports = {
  entry: [
    "webpack-hot-middleware/client",
    "./src/js/index.js"
  ],
  output: {
    path: require("path").resolve("./dist"),
    filename: "bundle.js",
    publicPath: '/'
  },


  plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
      loaders: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      }
    ]
  }
}
