# vue-cli-plugin-sass-resources-loader

Vue CLI 3.x plugin for [sass-resources-loader](https://github.com/shakacode/sass-resources-loader).

## Install

First you need to install @vue/cli globally.

Then create a project add add the `sass-resources-loader` plugin:

```bash
vue create hello-world
cd hello-world
vue add sass-resources-loader
```

You will be prompted for the resource file (defaults to `./src/assets/variables.scss`). This can be modified later via `vue.config.js`.

```js
module.exports = {
  chainWebpack: config => {
    const ofs = ['vue-modules', 'vue', 'normal-modules', 'normal']
    const cssRules = config.module.rule('css')
    const postRules = config.module.rule('postcss')

    const addSassResourcesLoader = (rules, type) => {
      rules
        .oneOf(type)
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: './src/assets/css/my-variables.scss' // your resource file or patterns
        })
    }
    ofs.forEach(type => {
      addSassResourcesLoader(cssRules, type)
      addSassResourcesLoader(postRules, type)
    })
    return config
  }
}
```
