/* eslint-disable */
// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8888,
    proxyTable: {
      '/apix/': {
        target: 'http://10.6.28.135:10501/business-service-core',
        changeOrigin: true,
        pathRewrite: {
          '^/apix/': ''
        },
        headers:{
          'User-Agent': 'scrm_o2o'
        }
      }
    }
  }
};
