var path = require('path');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
module.exports = {
  mode: 'development',  // 新版webpack需要确定开发环境还是产品环境，否则warning
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: './index.js',
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,//不跳转
    //hot: true,  //webpack2之后均不支持，加上无法热更新
    inline: true,//实时刷新
    port: 8080,
    //progress: true,  //新版本不支持，加上会报错
  },
  plugins: [
  ]
};
