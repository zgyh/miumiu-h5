import Vue from "vue";
import VueRouter from "vue-router";

import AppLayout from "../layouts/AppLayout";
import Home from "../views/Home";
import FragranceResult from "../views/FragranceResult";

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (to) {
  return VueRouterPush.call(this, to).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  // 入口
  {
    path: "/",
    name: "index",
    component: AppLayout,
    redirect: "/home",
    children: [
      // 首页
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: {
          requiresAuth: false,
          title: "首页",
          index: 0
        }
      },
      {
        path: "fragrance-result",
        name: "FragranceResult",
        component: FragranceResult,
        meta: {
          title: ""
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash", //"history",
  base: process.env.BASE_URL,
  routes
});

export default router;
