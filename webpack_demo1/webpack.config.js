var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');


/*var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin = ({
  name: 'vendors',     // 这公共代码的chunk命名为 'vender'
  filename: '[name].js',  // 生成的文件名为 vender.bundle.js
  minChunks: 2,     // 设定要有2个chunk（即2个页面）加载的js模块才会被纳入公共代码。
  chunks: ['index', 'page'],  // 只使用这些入口的 chunk
})*/

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        app: ['./app/index.js', './app/sub.js'],
        page: ['./app/page.js'],
        vendors: ['./app/main.js']
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: '[name].[hash].js'
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: 'Hello page app',
            template: path.resolve(TEM_PATH, 'page.html'),
            filename: 'page.html',
            chunks: ['page', 'vendors'],
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ //压缩代码
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // 这公共代码的chunk命名为 'vendors'
            filename: '[name].[hash].js', // 生成的文件名为 vendors.js
            minChunks: 2, // 设定要有2个chunk（即2个页面）加载的js模块才会被纳入公共代码。
            chunks: ['app', 'page'], // 只使用这些入口的 chunk
        }),

    ],
    module: {
        loaders: [{
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                include: APP_PATH
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: APP_PATH
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        contentBase: "./build", //以public为根目录提供文件
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 8080 //端口你可以自定义
    }
};