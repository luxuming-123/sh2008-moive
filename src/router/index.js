import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由模块化文件
import centerRouter from '@/router/routes/center'
import cinemaRouter from '@/router/routes/cinema'
import filmRouter from '@/router/routes/film'
import detailRouter from '@/router/routes/detail'
import cityRouter from '@/router/routes/city'
import vuexRouter from '@/router/routes/vuex'
import authRouter from "@/router/routes/auth";


const routes = [
  {
    path: '/',
    // 访问根路由跳转到电影页面
    redirect:'/film'
  },
  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,
  cityRouter,
  vuexRouter,
  ...authRouter,
]

const router = new VueRouter({
  mode: 'history',
  // 前缀 
  //base: process.env.BASE_URL,
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  let arr = [
      // 需要登录才能访问的集合，以“/cinema为例”
      "/cinema",
  ];
  if (!arr.includes(to.path)) {
      next();
  } else {
      if (localStorage.getItem("_token")) {
          next();
      } else {
          next({ path: "/login", query: { refer: to.fullPath } });
      }
  }
});

export default router
