import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from "./router.js"
import "./assets/css/iconfont.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,  // 注入到根实例中
}).$mount('#app')
