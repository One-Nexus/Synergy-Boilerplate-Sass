import path from 'path';
import webpack from 'webpack';
import Autoprefixer from 'autoprefixer';
import SynergySassImporter from '@onenexus/synergy-sass-importer';

export default () => ({
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'app.js',
        publicPath: '/',
        libraryTarget: 'umd'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: './',
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                resolve: {
                    extensions: ['.js', '.jsx', '.scss']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    {loader: 'postcss-loader', options: {
                        sourceMap: true,
                        plugins: () => [Autoprefixer]
                    }},
                    {loader: 'sass-loader', options: {
                        sourceMap: true,
                        importer: SynergySassImporter,
                        outputStyle: 'expanded'
                    }},
                    {loader: 'sass-resources-loader', options: {
                        resources: './src/index.scss',
                    }}
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
});