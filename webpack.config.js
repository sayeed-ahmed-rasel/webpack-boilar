var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');


module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/bundle.js',
        publicPath: 'dist'


    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader'




                ]
            },
        ]
    },
    plugins: [

        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
        new HtmlWebpackPlugin()

    ]

}