import Vue from "vue";
import "./plugins/axios";
import "./plugins/vant";
import App from "./App.vue";
import router from "./router";
import store from "./store";


// 引入全部样式
import "vant/lib/index.less";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // if (!store.state.user.user) {
    //   console.log(!store.state.user.user);
    //   next({ path: "/login" });
    // } else {
    //   next();
    // }
  } else {
    next();
  }
});

window.wx.miniProgram.getEnv(e => {
  if (e.miniprogram) {
    // 当前是否是小程序环境
    store.commit("SET_IS_MINI_PROGRAM", true);
    console.log("------------------------SET_IS_MINI_PROGRAM-----------------");
  }
});

// 监听键盘收起事件 （）解决IOS下收起键盘出现空白区域问题
window.document.body.addEventListener("focusout", () => {
  window.scrollTo(0, 0);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
