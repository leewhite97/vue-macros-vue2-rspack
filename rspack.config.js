const rspack = require("@rspack/core");
const { VueLoaderPlugin } = require("vue-loader");
const VueMacrosPlugin = require('unplugin-vue-macros')
/** @type {import('@rspack/cli').Configuration} */
const config = {
	context: __dirname,
	entry: {
		main: "./src/main.js"
	},
	plugins: [
		new VueLoaderPlugin(),
		new rspack.HtmlRspackPlugin({
			template: "./index.html"
		}),
		VueMacrosPlugin.default.rspack()
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					experimentalInlineMatchResource: true
				}
			}
		]
	},
};
module.exports = config;
