<template>
  <div>
    <van-nav-bar border title="单灯控制" left-arrow @click-left="onClickNavBarLeft"></van-nav-bar>
    <van-search placeholder="搜索" shape="round" :maxlength="50" v-model="searchValue" @search="onSearchSingleLight" @input="onSearchSingleLight"/>
    <van-list v-model="loading" :finished="finished" finished-text="" @load="onListLoad">
      <van-cell-group >
        <van-cell v-for="light in singleLightList" :key="light.num" :title="light.name" >
          <template v-slot:icon>
            <van-icon class-prefix="my-icon" name="dengpao" color="#1296db" style="line-height: inherit;"/>
          </template>
          <template v-slot:right-icon>
            <van-switch slot="right-icon" v-model="light.checked" size="24px" @change="lightSwitchChange(light.num,light.checked)"/>
          </template>
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
  import { CHANGE_SEARCH_VALUE } from '../../vuex/mutation-types.js'
  import { SEARCH_SINGLE_LIGHT } from '../../vuex/mutation-types.js'
  import { SET_LIST_LOADING } from '../../vuex/mutation-types.js'
  import { CHANGE_LIGHT_SWITCH } from '../../vuex/mutation-types.js'
  // 在单独构建的版本中辅助函数为 Vuex.mapState
  //import { mapState } from 'vuex'
  
  export default {
    name: 'SingleLight',
    components: {
      [NavBar.name]: NavBar,
      [Search.name]: Search,
      [List.name]: List,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Icon.name]: Icon,
      [Switch.name]: Switch,
    },
    data () {
      return {
        msg: "我是SingleLight 组件",
      }
    },
    beforeRouteEnter (to, from, next) {
      if(from.path == "/"){
        next();
      }
      else{
        next(vm =>{
          vm.$store.dispatch(SEARCH_SINGLE_LIGHT);
        });
      }
    },
    computed: {
      singleLightList () {
        return this.$store.state.singleLight.singleLightList;
      },
      loading:{
        get:function () {
          return this.$store.state.singleLight.loading;
        },
        set:function (newValue) {
          this.$store.commit(SET_LIST_LOADING, newValue);
        }
      },
      searchValue:{
        get:function () {
          return this.$store.state.singleLight.searchValue;
        },
        set:function (newValue) {
          this.$store.commit(CHANGE_SEARCH_VALUE, newValue);
        }
      },
      finished (){
        return this.$store.state.singleLight.finished;
      },
    },
    methods:{
      onClickNavBarLeft:function(){
        // 点击回退的时候当做地址回退
        this.$router.go(-1);
      },
      onSearchSingleLight:function(){
        this.$store.dispatch(SEARCH_SINGLE_LIGHT);
      },
      onListLoad:function(){
        this.$store.dispatch(SEARCH_SINGLE_LIGHT);
      },
      lightSwitchChange:function(num, checked){
        window.console.log("num" + num +":"+checked);
        this.$store.dispatch(CHANGE_LIGHT_SWITCH,{num:num, checked:checked});
      }
    }
  }
</script>

<style>
</style>
