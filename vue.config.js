module.exports = {
  publicPath: process.env.PUBLIC_URL || "",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/_vars.sass"
        `
      }
    }
  }
}