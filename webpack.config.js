var webpack = require('webpack');

module.exports = {
    entry: './src/app.jsx',

    output: {
        filename: 'app.js',
        path: './public'
    },

    module : {
        loaders: [
            {
              test: /\.jsx?/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a valid name to reference
              query: {
                "presets": ["es2015", "es2016", "es2017","stage-1", "react"]
              }
            }
        ]  
    }
}