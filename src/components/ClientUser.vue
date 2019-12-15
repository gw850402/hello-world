<template>
  <div>
    <van-nav-bar border title="我的"></van-nav-bar>
    <br>
    <van-row>
      <van-col span="4" offset="1">
        <van-image fit="fill" width="60" height="60" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </van-col>
      <van-col span="18">
       <van-row>
         高伟
       </van-row>
       <van-row>
         账号：gaow_1985
       </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import { Row, Col } from 'vant';
import { Image } from 'vant';

export default {
  name: 'clientUser',
  components: {
    [NavBar.name]: NavBar,
    [Row.name]: Row,
    [Col.name]: Col,
    [Image.name]: Image
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
