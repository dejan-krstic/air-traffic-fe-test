var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
		port: 9000,
		open: true,
        lazy: false
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
                test: /\.png$/,
                exclude: /node_modules/,
                use: [{

                    loader: 'image-webpack-loader'
                },
                { 
                    loader: "url-loader" 
                }]
            },
			{
				test: /\.scss$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			},
        ]
    },
	plugins: [
        new HtmlWebpackPlugin({
            title: 'Air Traffic FE',
            template: 'resources/ejs/index-dev.ejs'
        }),
    
        new FaviconsWebpackPlugin('./resources/assets/img/octopod.png'),
          
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,                       
            proxy: 'http://localhost:9000/'   
          },
          {
            reload: false              
          })
    ]
};
