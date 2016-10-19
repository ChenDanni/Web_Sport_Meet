/**
 * Created by chendanni on 16/10/18.
 */

module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',//在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.css$/,
                loader: 'style!css'//添加对样式表的处理
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {   test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
            // {
            //     test: /\.scss$/,
            //     loaders: [
            //         'isomorphic-style-loader',
            //         'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
            //         'postcss-loader'
            //     ]
            // }
        ]
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}