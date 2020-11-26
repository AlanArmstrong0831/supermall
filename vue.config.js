module.exports = {
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': resolve('src'),
  //       'assets': resolve('src/assets'),
  //       'components': resolve('src/components'),
  //       'network': resolve('src/network'),
  //       'vue$': 'vue/dist/vue.esm.js' 
  //     }
  //   },
  // }

  configureWebpack: config => {
    config.resolve = {
      extensions: [".js", ".vue", ".json", ".css"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("src")
      }
    };

}