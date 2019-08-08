const px2rem = require('postcss-px2rem');
const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}

const postcss = px2rem({
	remUnit: 32
})

module.exports = {
	publicPath: './',
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					postcss
				]
			}
		}
	},
	chainWebpack: (config) => {
			config.resolve.alias
				.set('@', resolve('src'))
				.set('@assets', resolve('src/assets'))
				.set('common', resolve('src/common'))
		}
}