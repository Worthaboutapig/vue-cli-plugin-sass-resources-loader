const fs = require('fs')

module.exports = (api, options) => {
  return {
    updateWebpackConfig(callback) {
      const rcPath = api.resolve('./vue.config.js')
      const path = fs.existsSync(rcPath) ? require(rcPath) : {}
      const config = callback(path)

      const moduleExports = 'module.exports = '

      console.log(config.toString())
      fs.writeFileSync(rcPath, `${moduleExports}${JSON.stringify(config, null, 2)}`, { encoding: 'utf8' })
    },

    updateResourceFile() {
      const sourcePath = api.resolve(options.scssVariablesFileLocation)
      if (!fs.existsSync(sourcePath)) {
        fs.writeFileSync(sourcePath, '', { encoding: 'utf8' })
      }
    }
  }
}
