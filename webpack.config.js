var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/public',
        publickPath: 'build/',
        filename: 'app.js',
    }
}