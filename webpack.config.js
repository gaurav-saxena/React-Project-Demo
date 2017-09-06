const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, './build'),
		// filename: 'bundle.[chunkhash:8].js',
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer:{
		inline:true,
		contentBase: './build',
		port:3000,
    historyApiFallback:true
	},
	module:{
		loaders:[
			{ test:/\.js$/, exclude:/(node_modules)/, loader:'babel-loader',
				query:{ presets:['env','react'] }
			},
			{
				test: /\.css$/, loader: 'style-loader!css-loader'
			}
		]
	},
  plugins:[
      new htmlwebpackplugin({
      template: 'app/index.html'
    })
  ]
};
