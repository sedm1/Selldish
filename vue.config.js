module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/_vars.sass"
        `
      }
    }
  },
  publicPath: ''
}