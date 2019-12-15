import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./components/Home.vue";
import setting from "./components/Setting.vue";
import clientUser from "./components/ClientUser.vue";
import singleLight from "./components/single_light/SingleLight.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
    path:"/home",
    component: home
  },
  {
    path: "/setting",
    component: setting
  },
  {
    path: "/clientUser",
    component: clientUser
  },
  {
    path:"/singleLight",
    component: singleLight
  },
  { 
    path: '/', 
    redirect: '/home' ,
  }
]

var router =  new VueRouter({
  routes
})
export default router;
