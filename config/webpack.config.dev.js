var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, './app/build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            enforce: "pre", // preload the jshint loader
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            use: [{
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }]
        }]

    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};