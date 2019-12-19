<template>
  <div>
    <van-nav-bar :border="true" title="添加群组" left-arrow @click-left="onClickNavBarLeft">
      <template v-slot:right>
        <van-button round type="info" size="small" text="完成" @click="onFinshBtnClick"/>
      </template>
    </van-nav-bar>
    <van-search placeholder="搜索" shape="round" :maxlength="50" v-model="searchValue" @search="onSearchDevice"/>
    <van-dropdown-menu>
      <van-dropdown-item v-model="deviceType" :options="deviceOptions" />
      <van-dropdown-item v-model="sortType" :options="sortOptions" />
    </van-dropdown-menu>
    <van-list v-model="loading" :finished="finished" finished-text="" @load="onDeviceListLoad">
      <van-cell-group >
        <van-cell :border="true" v-for="device in deviceList" :key="device.num" :title="device.name">
          <template v-slot:right-icon>
            <van-checkbox v-model="device.checked"></van-checkbox>
          </template>
        </van-cell>
      </van-cell-group >
    </van-list>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import { Search } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Button } from 'vant';
import { Icon } from 'vant';
import { Checkbox } from 'vant';

export default {
  name: 'AddGroupControl',
  components: {
    [NavBar.name]: NavBar,
    [Search.name]: Search,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [List.name]: List,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Checkbox.name]: Checkbox,
  },
  data () {
    return {
      msg: "我是AddGroupControl 组件",
      searchValue:'',
      deviceType: 8,
      sortType: 1,
      deviceOptions: [
        { text: '电表', value: 1 },
        { text: '水表', value: 2 },
        { text: '阀门', value: 4 },
        { text: '灯控', value: 8 },
        { text: '湿度', value: 16 },
        { text: '温度', value: 32 },
        { text: '光感度', value: 64 },
        { text: '水浸', value: 128 },
        { text: '阀控水表', value: 256 },
      ],
      sortOptions: [
        { text: '名称升序', value: 1 },
        { text: '名称降序', value: 2 },
      ],
      loading:false,
      finished:true,
      deviceList:[
        {
          num:77,
          name:"逸夫楼/A座1层/77",
          checked:false,
        },
        {
          num:66,
          name:"逸夫楼/A座1层/66",
          checked:true,
        }
      ],
    }
  },
  methods:{
    onClickNavBarLeft:function(){
      // 点击回退的时候当做地址回退
      this.$router.go(-1);
    },
    onFinshBtnClick:function(){
      
    },
    onSearchDevice:function(){
      
    },
    onDeviceListLoad:function(){
      
    }
  },
}
</script>

<style>
</style>
