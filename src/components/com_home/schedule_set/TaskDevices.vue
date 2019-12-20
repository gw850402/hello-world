<template>
  <div>
    <van-nav-bar :border="true" title="任务设备" left-arrow @click-left="onClickNavBarLeft">      
    </van-nav-bar>
    <van-tree-select :items="devicesItems" :main-active-index.sync="deviceTypeIndex" @click-nav="onClickDeviceType()">
      <template v-slot:content>
        <van-list v-model="loading" :finished="finished" finished-text="" @load="onListLoad">
          <van-cell-group >
            <van-cell v-for="device in devicesItems[deviceTypeIndex].children" :key="device.id" :title="device.text" >              
              <template v-slot:right-icon>
                <van-checkbox v-model="device.checked"></van-checkbox>
              </template>
            </van-cell>
          </van-cell-group>
        </van-list>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import { TreeSelect } from 'vant';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Checkbox } from 'vant';

export default {
  name: 'TaskDevices',
  components: {
    [NavBar.name]: NavBar,
    [TreeSelect.name]: TreeSelect,
    [List.name]: List,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Checkbox.name]: Checkbox,
  },
  data () {
    return {
      loading:false,
      finished:true,
      devicesItems:[
        {
          id:1,
          text: '电表',
        },
        {
          id:2,
          text: '水表',
        },
        {
          id:4,
          text: '阀门',
        },
        {
          id:8,
          text: '灯控',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '逸夫楼/A座1层/77',
              // id，作为匹配选中状态的标识符
              id: 77,
              checked:true,
              // 禁用选项
              disabled: false,
            },
            {
              // 名称
              text: '逸夫楼/A座1层/66',
              // id，作为匹配选中状态的标识符
              id: 66,
              checked:false,
              // 禁用选项
              disabled: false
            },
          ]
        },
        {
          id:16,
          text: '湿度',
        },
        {
          id:32,
          text: '温度',
        },
        {
          id:64,
          text: '光感度',
        },
        {
          id:128,
          text: '水浸',
        },
        {
          id:256,
          text: '阀控水表',
        }
      ],
      deviceTypeIndex:3,
    }
  },
  methods:{
    onClickNavBarLeft:function(){
      // 点击回退的时候当做地址回退
      this.$router.go(-1);
    },
    onClickDeviceType:function(){
      // DOM 还没有更新
      this.$nextTick(function () {
        window.console.log(this.deviceTypeIndex);
      });      
    },
    onListLoad:function(){
      
    }
  }
}
</script>

<style>
  
</style>
