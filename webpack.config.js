const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    production = (process.argv.indexOf("production") > -1)


let entry = ['./src/js/App.jsx']
if (!production) entry.push('webpack-dev-server/client?http://localhost:3000')

module.exports = {
    entry: {
        javascript: entry
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    devtool: 'source-map',
    plugins: (
        [
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            }),
            new ExtractTextPlugin('css/styles.css'),
            new webpack.DefinePlugin({
                __PROD__: production
            }),
        ]
        .concat(
            production ? [
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false,
                    },
                }),
            ] : []
        )
    )
};
