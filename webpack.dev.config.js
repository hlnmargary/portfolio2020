const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'global': './src/global.js',
        'hero': './src/hero.js',
        'expertise': './src/expertise.js',
        'projects': './src/projects.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'hero.html',
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [path.resolve(__dirname, './src/global/variables.scss')]
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "hero.html",
            chunks: ['global', 'hero'],
            title: 'Helene Margary\'s Portfolio',
            description: 'Description',
            template: 'src/hero.html',
        }),
        new HtmlWebpackPlugin({
            filename: "expertise.html",
            chunks: ['global', 'expertise'],
            title: 'Helene Margary\'s Portfolio',
            description: 'Helene Margary\'s Portfolio',
            template: 'src/expertise.html',
        }),
        new HtmlWebpackPlugin({
            filename: "projects.html",
            chunks: ['global', 'projects'],
            title: 'Helene Margary\'s Portfolio',
            description: 'Helene Margary\'s Portfolio',
            template: 'src/projects.html'
        })
    ]
};