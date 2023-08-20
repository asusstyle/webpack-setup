const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	output: {
		chunkFilename: 'assets/scripts/chunks/[name][chunkhash].bundle.js',
		filename: (chunkData) => {
			return chunkData.chunk.name + '/[name].js';
		},
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/scripts/[name][contenthash].bundle.js',
		clean: true
	},
	optimization: {
		minimizer: [`...`, new CssMinimizerWebpackPlugin()],
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']  // for prod server
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'assets/styles/[name][contenthash].bundle.css' })
	]
});