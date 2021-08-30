const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  productionSourceMap: false,
  css: {
    extract: false
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 8000,
    compress: true,
    disableHostCheck: true
  },
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'report.html'
      })
    ]
  }
}
