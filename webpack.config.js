'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

const extractPlugin = new ExtractTextPlugin({
  filename: 'css/main.css'
});

module.exports = {
	entry: {
		app: './app/app.jsx'
	}, 
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: 'public/'
	},
	resolve: {
		modules: [
			'node_modules'
		], 
		alias: {
			Pryxma: path.resolve(__dirname, 'app/components/Pryxma.jsx'),
			iOSAppsService: path.resolve(__dirname, 'app/services/ios-apps-service.js'),
			Utils: path.resolve(__dirname, 'app/utils/')
		}
	},
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				use: [{
						loader: 'babel-loader',
						options: {
							presets: ['react','es2015', 'stage-0']
						}
				}],
				exclude: /(node_modules|bower_componets)/
			}, {
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}, {
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: [
						'css-loader',
						'sass-loader'
					]
				})
			}, 
		]
	}, 
	plugins: [
		extractPlugin,
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
	devtool: !isProd ? 'cheap-module-eval-source-map' : ''
};