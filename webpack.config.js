const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'eventsource-polyfill', //hot module reload
    'webpack-hot-middleware/client',
    './src/index', //entrypoint for app
  ],
  output: {
    path: path.join(__dirname, 'dist'), //where to put the output
    filename: 'bundle.js',
    publicPath: '/static/',
    //essentially react will be bundled into the path /static/bundlejs which we bring in a script tag in html
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'postcss-loader'}],
        exclude: /node_modules/,
      },
    ],
  },
};
