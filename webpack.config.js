const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    mode: 'development',

    entry: ['./src/index.tsx'],

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/static/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [{
            enforce: 'pre',
            test: /\.tsx?$/,
            use: 'source-map-loader',
            exclude: /node_modules/
        }, {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 2,
                            localIndentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ]
            })
        }],
    },

    devtool: 'inline-source-map',

    plugins: [
        new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })
    ]
};

module.exports = config;
