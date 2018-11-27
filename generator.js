module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api, opts)

  api.onCreateComplete(() => {
    utils.updateResourceFile()
  })
}
