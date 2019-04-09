let path = require('path'),
    webpack = require('webpack'),
    HtmlWebPackPlugin = require('html-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
    main: path.join(__dirname, 'src/main.js')
}

let wpConfig = {
    entry: PATHS.main,
    output: {
        path: PATHS.dist,
        filename: 'build.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  "presets": [
                      "es2015",
                      "react"
                   ],
                   "plugins": [
                      "transform-class-properties"
                   ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({ 
            title: 'My First React App',
            template: './index.html'
        })
    ]
}

module.exports = wpConfig