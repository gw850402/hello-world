<template>
  <div>
    <van-nav-bar :border="true" title="定时设置" left-arrow @click-left="onClickNavBarLeft">
      <template v-slot:right>
        <van-icon name="plus" color="#1296db" @click="onClickScheduleSetPlus()"/>
      </template>
    </van-nav-bar>
    <van-search placeholder="搜索" shape="round" :maxlength="50" v-model="searchValue" @search="onSearchScheduleSet"/>
    <van-list v-model="loading" :finished="finished" finished-text="" @load="onScheduleSetListLoad">
      <van-cell-group >
        <van-swipe-cell v-for="schedule in scheduleSetList" :key="schedule.num">
          <van-cell :border="true">
            <template v-slot:title>
              <span>{{schedule.title}}</span>
              <van-tag round type="primary">{{schedule.number}}</van-tag>
            </template>
            <template v-slot:right-icon>
              <van-switch slot="right-icon" size="24px" v-model="schedule.state" @change="scheduleSetSwitchChange"/>
            </template>
          </van-cell>
          <template slot="right">
            <van-button square type="primary" text="修改"/>
            <van-button square type="danger" text="删除" />
          </template>
        </van-swipe-cell>
      </van-cell-group >
    </van-list>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import { Search } from 'vant';
import { List } from 'vant';
import { SwipeCell } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Button } from 'vant';
import { Icon } from 'vant';
import { Tag } from 'vant';
import { Switch } from 'vant';
  
export default {
  name: 'SingleLight',
  components: {
    [NavBar.name]: NavBar,
    [Search.name]: Search,
    [List.name]: List,
    [SwipeCell.name]: SwipeCell,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Tag.name]: Tag,
    [Switch.name]: Switch
  },
  data () {
    return {
      msg: "我是GroupControl 组件",
      searchValue:'',
      loading:false,
      finished:true,
      scheduleSetList:[
        {
          num:1,
          title:"每天早上6点定时开灯",
          number:2,
          state:true
        },
        {
          num:2,
          title:"每天晚上11点定时关灯",
          number:2,
          state:false
        }
      ],
    }
  },
  methods:{
    onClickNavBarLeft:function(){
      // 点击回退的时候当做地址回退
      this.$router.go(-1);
    },
    onSearchScheduleSet:function(){
      
    },
    onScheduleSetListLoad:function(){
      
    },
    scheduleSetSwitchChange:function(){
      
    },
    onClickScheduleSetPlus:function(){
      this.$router.push({path: '/addScheduleSet'})
    }
  }
}
</script>

<style>
</style>
