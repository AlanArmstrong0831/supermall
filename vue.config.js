module.exports = {
  configurewebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'components': resolve('src/components'),
        'network': resolve('src/network')
      }
    },
  }
}