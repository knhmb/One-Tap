// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
// });

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://one-tap-membership.dev.marvelconnect.com",
        ws: true,
        changeOrigin: true,
      },
      // "^/uat": {
      //   target: "https://quick-search.uat.marvelconnect.com",
      //   ws: true,
      //   changeOrigin: true,
      // },
    },
  },
};
