
const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const bootstrapExtract = new ExtractTextPlugin({
  filename: 'bootstrap.css'
});

const extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
	entry: ['./app/app.jsx'], 
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public'
	},
	resolve: {
		modules: [
			'node_modules'
		], 
		alias: {
			Pryxma: path.resolve(__dirname, 'app/components/Pryxma.jsx'),
			iOSAppsService: path.resolve(__dirname, 'app/services/ios-apps-service.js')
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
				use: bootstrapExtract.extract({
						fallback: 'style-loader',
						use: ['css-loader']
				})
			}, {
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: [
						'css-loader',
						'sass-loader'
					]
				})
			}, {
				test: /\.(ttf|eot|svg|woff2)$/,
				use: ['file-loader']
			}, {
				test: /\.woff$/,
				use: [
					'url-loader?limit=10000&minetype=application/font-woff'
				]
			}]
	}, 
	plugins: [
		bootstrapExtract,
		extractPlugin,
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
	devtool: 'cheap-module-eval-source-map'
};