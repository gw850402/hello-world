<template>
  <div>
    <van-nav-bar :border="false" title="串口设置" left-arrow @click-left="onClickNavBarLeft"></van-nav-bar>
    <van-list v-model="loading" :finished="finished" @load="comport_onLoad">      
      <van-cell-group >
        <van-cell v-for="comPort in comPortList" :key="comPort.num" :title="comPort.name" >          
          <van-switch slot="right-icon" v-model="comPort.openStatus" size="24px" @change="comPortSwitchChange"/>
        </van-cell>
      </van-cell-group>
    </van-list>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Switch } from 'vant';

export default {
  name: 'setting',
  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Switch.name]: Switch
  },
  data () {
    return {
      msg: "我是setting 组件",
      loading:false,
      finished:true,
      comPortList:[
        {
          num:4,
          name:"COM4",
          openStatus:false
        }
      ]
    }
  },
  methods:{
    onClickNavBarLeft: function(){
      // 点击回退的时候当做地址回退
      this.$router.go(-1);
    },
    comport_onLoad: function(){
      
    },
    comPortSwitchChange:function(){
      
    }
  }
}
</script>

<style>
</style>
