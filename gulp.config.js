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
			all: './sass/**/*.scss',
			entry: './sass/styles.scss',
			output: {
				dev: './build',
				prod: './build'
			}
		}
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
		}
	},
	connect: {
		port: 8080,
		root: './'
	},
	liveReload: {
		port: 35729
	}
};