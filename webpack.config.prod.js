var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

try {
  require('os').networkInterfaces()
} catch (e) {
  require('os').networkInterfaces = () => ({})
}

module.exports = {
  entry: [
    './src/app/App.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
        include: path.resolve(__dirname),
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/
      },
      {
        test: /.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }, {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=65000&name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist/'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/static/index.html'
    }),
    new CopyWebpackPlugin([{ from: 'src/static/' }], { ignore: ['index.html'] }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
