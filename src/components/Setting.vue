<template>
  <div>
    <van-nav-bar :border="false" title="设置"></van-nav-bar>
    <van-cell-group >
      <van-cell title="串口" is-link to="/setting/comPort"/>
    </van-cell-group>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import { Cell, CellGroup } from 'vant';

export default {
  name: 'Setting',
  components: {
    [NavBar.name]: NavBar,
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
