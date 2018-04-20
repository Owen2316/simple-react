const path = require('path');
const dist = path.resolve('./dist');
const srcPath = path.join(__dirname, '/../src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        'app.js': './src/main.js'
    },
    output: {
        path: dist,
        filename: '[name]'
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                include: [
                    srcPath
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.html/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            actions: path.resolve('./src/actions/'),
            reducers: path.resolve('./src/reducers/'),
            stores: path.resolve('./src/stores/'),
            components: path.resolve('./src/components/'),
            containers: path.resolve('./src/containers/')
        }
    },
    plugins: [
        new CleanWebpackPlugin(dist, {
            root: '/..'
        }),
        new HtmlWebpackPlugin({
            title: 'Hello React',
            template: path.resolve('./index.html')
        }),
        new CopyWebpackPlugin()
    ]
};
