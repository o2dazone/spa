var webpack = require('webpack');

module.exports = {
	build: Date.now(),
	scripts: {
		paths: {
			all: './scripts/*.js',
			entry: './scripts/index.js',
			output: {
				dev: './build',
				prod: './build'
			}
		}
	},
	styles: {
		paths: {
			all: './styles/**/*.scss',
			entry: './styles/styles.scss',
			output: {
				dev: './build',
				prod: './build'
			}
		},
		sourcemaps: true
	},
	ports: {
		express: 8080,
		livereload: 35729,
		expressRoot: './build'
	},
	webpack: {
		cache: true,
		output: {
			filename: 'index.js'
		},
		resolve: {
			modulesDirectories: ['node_modules']
		},
		resolveLoader: {
			modulesDirectories: ['node_modules']
		},
		module: {
			loaders: [{
				test: /\.js$/,
				loader: 'es6-loader'
			}]
		}
	},
	connect: {
		port: 8080,
		root: './build'
	},
	liveReload: {
		port: 35729
	}
};