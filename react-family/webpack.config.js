const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
/*
    publicPath 主要服务静态服务器
*/
module.exports = {
    devtool:'cheap-module-source-map',
    entry :{
    app:[
        path.join(__dirname,'src/index.js')
    ],
    vendor:['react','react-router-dom','redux','react-dom','react-redux']
},  
    
    output: {
        path:path.join(__dirname,'./dist'),
        filename:'[name].[chunkhash].js',
        chunkFilename:'[name].[chunkhash].js',
        publicPath:'/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        },
        {
            test:/\.css$/,
            use:ExtractTextPlugin.extract({
                fallback:'style-loader',
                use:'css-loader'
            })
        },
        {
            test:/\.(png|jpg|png|gif)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:24576
                }
            }]
        }
        ]
    },
    plugins:[ new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname,'src/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor'
    }),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
        'process.env':{
            'NODE_ENV':JSON.stringify('production')
        }
    }),
    new webpack.HashedModuleIdsPlugin({
        name:'runtime'
    }),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
        filename:'[name].[contenthash:5].css',
        allChunks:true
    })
],
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'), 
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
        }
    },
   };
