const path = require('path')

function axiosModule (_moduleOptions) {
  const { nuxt } = this

  // Combine options
  const moduleOptions = {
    ...nuxt.options.skyloud,
    ..._moduleOptions,
    ...(nuxt.options.runtimeConfig && nuxt.options.runtimeConfig.skyloud)
  }

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'skyloud.js',
    options: moduleOptions
  })
}

module.exports = axiosModule
module.exports.meta = require('../package.json')
