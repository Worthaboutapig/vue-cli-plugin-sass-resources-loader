module.exports = (api, options) => {
  // TODO: if sass-resources-loader is configured.
  api.chainWebpack(conf => {
    const ofs = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    const cssRules = conf.module.rule('css');
    const postRules = conf.module.rule('postcss');

    const addSassResourcesLoader = (rules, type) => {
      rules
        .oneOf(type)
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: options.scssVariablesFileLocation
        });
    };

    ofs.forEach(type => {
      addSassResourcesLoader(cssRules, type);
      addSassResourcesLoader(postRules, type);
    });

    return conf;
  });
};
