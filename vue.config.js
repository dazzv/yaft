const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: "YAFT - your travel advisor",
    themeColor: "#16615A",

    workboxPluginMode: 'InjectManifest',

    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/_redirects/]
    }
  }
})
