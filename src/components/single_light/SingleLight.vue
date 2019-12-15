<template>
  <div>
    <van-nav-bar border title="单灯控制" left-arrow @click-left="onClickNavBarLeft"></van-nav-bar>
    <van-search placeholder="搜索" shape="round" :maxlength="50" v-model="searchValue" @search="onSearchSingleLight"/>
    <van-list v-model="loading" :finished="finished" finished-text="" @load="onListLoad">
      <van-cell-group >
        <van-cell v-for="light in singleLightList" :key="light.num" :title="light.name" >
          <van-icon slot="icon" class-prefix="my-icon" name="dengpao" color="#1296db" style="line-height: inherit;"/>
          <van-switch slot="right-icon" v-model="light.checked" @change="lightSwitchChange"/>
        </van-cell>
      </van-cell-group>
    </van-list>
  </div>
</template>

<script>
  import { NavBar } from 'vant';
  import { Search } from 'vant';
  import { List } from 'vant';
  import { Cell, CellGroup } from 'vant';
  import { Icon } from 'vant';
  import { Switch } from 'vant';
  
  export default {
    name: 'SingleLight',
    components: {
      [NavBar.name]: NavBar,
      [Search.name]: Search,
      [List.name]: List,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Icon.name]: Icon,
      [Switch.name]: Switch
    },
    data () {
      return {
        msg: "我是SingleLight 组件",
        searchValue:'',
        loading:false,
        finished:false,
        singleLightList:[
          {
            num:77,
            name:'逸夫楼/A座1层/77',
            checked:true
          },
          {
            num:66,
            name:'逸夫楼/A座1层/66',
            checked:false
          },
        ]
      }
    },
    methods:{
      onClickNavBarLeft:function(){
        // 点击回退的时候当做地址回退
        this.$router.go(-1);
      },
      onSearchSingleLight:function(){
        window.console.log(this.searchValue);
      },
      onListLoad:function(){
        // 加载状态结束
        this.loading = false;
        this.finished = true;
      },
      lightSwitchChange:function(checked){
        window.console.log(checked);
      }
    }
  }
</script>

<style>
</style>
