const fs = require('fs');

module.exports = (api, opts) => {
    return {
        updateWebpackConfig(callback) {
            let config;

            const rcPath = api.resolve('./vue.config.js');
            if (fs.existsSync(rcPath)) {
                config = callback(require(rcPath));
            } else {
                config = callback({})
            }

            const moduleExports = 'module.exports = ';

            console.log(config.toString());
            fs.writeFileSync(
                rcPath,
                `${moduleExports}${JSON.stringify(config, null, 2)}`,
                { encoding: 'utf8' }
            )
        },
        updateResourceFile() {
            const sourcePath = api.resolve('./src/assets/variables.css');
            if (!fs.existsSync(sourcePath)) {
                fs.writeFileSync(
                    sourcePath,
                    '',
                    { encoding: 'utf8' }
                )
            }
        }
    }
};
