const path = require("path");
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test" ? "././" : "/",
  lintOnSave: false, //加入此行 , false为关闭true为开启
  chainWebpack: config => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          // 全局变量文件路径，只有一个时可将数组省去
          resources: "./src/styles/index.scss"
        })
        .end();
    });

    config.plugin("html").tap(args => {
      args[0].title = process.env.VUE_APP_TITLE;
      return args;
    });
  },
  css: {
    loaderOptions: {
      less: {
        // 注意：这里没有lessOptions
        modifyVars: {
          hack: `true; @import "${path.join(__dirname, "./src/styles/theme.less")}";`
        }
      }
    }
  },
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "0.0.0.0",
    port: "8880",
    https: false, //开启https
    hotOnly: false,
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "https://zklm.shdsyy.com.cn/",
        changeOrigin: true,
        ws: true,
        secure: false
      }
    }
  }
};
