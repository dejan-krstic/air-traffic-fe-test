var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'index_bundle.js'
    },
    mode: "production",
    devtool: 'source-map',
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: "file-loader"
            },
			{
				test: /\.scss$/,
				use: [
                    MiniCssExtractPlugin.loader,
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			}
        ]
    },
	plugins: [
        new HtmlWebpackPlugin({
            title: 'Air Traffic FE',
            template: 'resources/ejs/index-prod.ejs',
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new FaviconsWebpackPlugin('./resources/assets/img/octopod.png')
    ]
};
