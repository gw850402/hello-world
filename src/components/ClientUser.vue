<template>
  <div>
    <van-nav-bar border title="我的"></van-nav-bar>
    <UserInfo></UserInfo>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import UserInfo from './client_user/UserInfo.vue';

export default {
  name: 'clientUser',
  components: {
    [NavBar.name]: NavBar,
    [UserInfo.name]: UserInfo,
  },
  data () {
    return {
      msg: "我是client user 组件"
    }
  }
}
</script>

<style>
  
</style>
