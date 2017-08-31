var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var vue = require('vue-loader');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');




module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        app: ['./src/index.js']
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: '[name].[hash].js'
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Index',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app'],
            //要把script插入到标签里
            inject: 'body'
        }),
        /*new webpack.optimize.UglifyJsPlugin({ //压缩代码
            compress: {
                warnings: false
            }
        }),*/
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // 这公共代码的chunk命名为 'vendors'
            filename: '[name].[hash].js', // 生成的文件名为 vendors.js
            minChunks: 2, // 设定要有2个chunk（即2个页面）加载的js模块才会被纳入公共代码。
            chunks: ['app', 'page'], // 只使用这些入口的 chunk
        }),*/


    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file-loader?name=imgs/[name].[hash:8].[ext]" 
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src'] //需要转的标签跟属性
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer: {
        historyApiFallback: true, //不跳转
        hot: true,
        inline: true,
        open: true
    }
};