<template>
  <div id="app">
    <router-view />
    <van-tabbar route border v-model="active" @change="changeTabbar()">
      <van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/setting" icon="setting">设置</van-tabbar-item>
      <van-tabbar-item replace to="/clientUser" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
  name: 'app',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0
    }
  },
  methods:{
    changeTabbar:function(){
      window.console.log(this.active);      
    }
  }
}
</script>

<style>
body {
  background-color: #f8f8f8;
}
</style>
