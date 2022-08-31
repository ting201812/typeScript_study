/*
 * @Author: 张玉婷
 * @Date: 2022-08-29 16:13:53
 * @LastEditTime: 2022-08-29 17:44:53
 * @LastEditors: 张玉婷
 * @Description: 
 * @FilePath: \typeScript\typeScript\chapter01\part3\webpack.config.js
 */
// 引入包
const path = require('path')
// 引入html文件
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin, } = require('clean-webpack-plugin')

// webapack 所有配置需要写在module.exports
module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在目录
  output: {
    // 指定打包后目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件名, filename 一定要拼写正确
    filename: 'bundle.js',
    // 告诉webpack 不是用箭头函数
    enviroment: {
      arrowFunction: false
    }
  },

  // 指定webpack打包时候使用的模块
  module: {
    // 指定要加载的规则
    rules: [{
      // test 指定规则生效文件, 此处指的是所有以js结尾的ts文件
      test: /\.ts$/,
      // 使用的loader, 从后往前执行
      use: [
        // 配置babel
        {
          // 指定加载器
          loader: "babel-loader",
          // 设置babel加载器
          options: {
            // 设置预定义环境
            presets: [
              [
                // 指定环境插件
                "@babel/preset-env",
                {
                  // 要兼容的目标浏览器
                  targets: {
                    "chrome": "88",
                    "ie": 11
                  },
                  // 指定coreJS版本
                  "codejs": "3",
                  // 使用corejs的方式, usage表示按需加载
                  "useBuiltIns": "usage"
                }
              ]
            ]
          }
        },
        'ts-loader'
      ],
      // 要排除的文件
      exclude: /node-moudles/

    }]
  },
  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: '这是一个自定义标题',
    }),
  ],
  // 设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}