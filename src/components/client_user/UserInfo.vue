<template>
  <van-cell :center="true" is-link>
    <div>
      <div class="div-user-img">
        <van-image fit="fill" width="60px" height="60px" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="div-user-info">
        <div class="div-user-name">高伟</div>
        <div class="div-user-account">账号：gaow_1985</div>
      </div>
      <div class="div-clear"></div>
    </div>
  </van-cell>
</template>

<script>
import { Cell } from 'vant';
import { Image } from 'vant';

export default {
  name: 'UserInfo',
  components: {
    [Cell.name]: Cell,
    [Image.name]: Image    
  }
}
</script>

<style>
.div-user-img{
  float: left;
  width:60px;
  height:60px;
}

.div-user-info{
  float: left; 
  margin-left: 10px;
}

.div-clear{
  clear:both;
}

.div-user-name{
  height: 30px;
  line-height: 30px;
  font-weight: bolder;
  font-size: larger;
}

.div-user-account{
  height: 30px;
  line-height: 30px;
  font-size:small;
}
</style>
