import webpack from 'webpack';
import path from 'path';

export default {
	entry: {
		main: ['./src/webpack/main.js']
	},

	output: {
		path: path.resolve(__dirname, './public/js'),
		filename: '[name].bundle.js'
	},

	resolve: {
		extensions: ['.js']
	},

	module: {
		rules: [
			{
				test: /\.js$/,
        exclude: /node_modules/,
				use: [{
					loader: "babel-loader"
				}]
			}
		]
	},
}