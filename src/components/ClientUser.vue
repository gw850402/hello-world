<template>
  <div>
    <van-nav-bar border title="我的"></van-nav-bar>
    <UserInfo></UserInfo>
    <ComSplit></ComSplit>
    <van-cell-group >
      <van-cell title="消息" is-link to="/setting/userMessage"/>
    </van-cell-group>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import UserInfo from './client_user/UserInfo.vue';
import ComSplit from './common/ComSplit.vue';
import { Cell, CellGroup } from 'vant';

export default {
  name: 'clientUser',
  components: {
    [NavBar.name]: NavBar,
    [UserInfo.name]: UserInfo,
    [ComSplit.name]: ComSplit,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
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
