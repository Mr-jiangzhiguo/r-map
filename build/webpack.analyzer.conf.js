const prodConfig = require('./webpack.prod.conf');
const merge = require('webpack-merge');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = merge(prodConfig, {
  plugins: [
    // 分析依赖
    new BundleAnalyzerPlugin(),
  ],
});
