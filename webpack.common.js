const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		vendor: path.resolve(__dirname, 'src/assets/scripts/vendor.js'),
		main: path.resolve(__dirname, 'src/assets/scripts/index.js')
	},
	devServer: {
		port: 3005,
		open: true,
		compress: true,
		hot: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { url: false }
					},
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'assets/styles/[name].css' }),
		new CopyWebpackPlugin({
			patterns: [
				{ from: path.resolve(__dirname + '/src/assets/images'), to: './assets/images' }
			]
		}),
		new HtmlWebpackPlugin({
			title: 'Webpack Plain Setup',
			filename: 'index.html',
			template: 'src/template.html',
			inject: 'body',
			minify: {
				collapseWhitespace: true,
				removeComments: true
			}
		})
	]
};