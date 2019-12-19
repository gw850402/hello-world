<template>
  <div>
    <van-nav-bar border title="首页"></van-nav-bar>
    <van-grid :column-num="3" :border="false" square>
      <van-grid-item text="单灯控制" to="/singleLight">
        <template v-slot:icon>
          <van-icon class-prefix="my-icon" name="deng-kai" color="#1296db" size="48"/>
        </template>
      </van-grid-item>
      <van-grid-item text="群组控制" to="/groupControl">
        <template v-slot:icon>
          <van-icon class-prefix="my-icon" name="shebei" color="#1296db" size="48"/>
        </template>
      </van-grid-item>
      <van-grid-item text="定时设置" to="/scheduleSet">
        <template v-slot:icon>
          <van-icon class-prefix="my-icon" name="dingshi-" color="#1296db" size="48"/>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import { Grid, GridItem } from 'vant';
import { Icon } from 'vant';

export default {
  name: 'home',
  components: {
    [NavBar.name]: NavBar,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Icon.name]: Icon
  },
  data () {
    return {
      msg: "我是home 组件"
    }
  }
}
</script>

<style>
</style>
