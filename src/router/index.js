import Vue from "vue";
import VueRouter from "vue-router";

import AppLayout from "../layouts/AppLayout";
import Home from "../views/Home";
import Home1 from "../views/Home1";
import FragranceResult from "../views/FragranceResult";
import Dress from "../views/Dress";
import Complete from "../views/Complete";
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
        path: "home1",
        name: "Home1",
        component: Home1,
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
      },
      {
        path: "dress",
        name: "Dress",
        component: Dress,
        meta: {
          title: ""
        }
      },
      {
        path: "complete",
        name: "Complete",
        component: Complete,
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
