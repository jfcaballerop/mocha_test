var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './app/src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../buildWebpack'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            enforce: "pre", // preload the jshint loader
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            use: [{
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2']
                }
            }]
        }]

    },
    stats: {
        colors: true
    },
    devtool: 'cheap-module-source-map'
};