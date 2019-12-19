import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./components/Home.vue";
import setting from "./components/Setting.vue";
import clientUser from "./components/ClientUser.vue";
import singleLight from "./components/com_home/SingleLight.vue";
import groupControl from "./components/com_home/GroupControl.vue";
import AddGroupControl from "./components/com_home/AddGroupControl.vue";
import comPort from "./components/com_setting/ComPort.vue";
import userMessage from "./components/client_user/UserMessage.vue";


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
    path:"/groupControl",
    component: groupControl
  },
  {
    path:"/addGroupControl",
    component: AddGroupControl
  },
  {
    path:"/setting/comPort",
    component: comPort
  },
  {
    path:"/setting/userMessage",
    component:userMessage
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
