const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    '@nuxtjs/axios',
    { handler: require('../../') }
  ],
  axios: {},
  skyloud: {
    appId: 'abc123abc123abc123abc123',
    apiAccountsBaseUrl: 'http://localhost:8000'
  }
}
