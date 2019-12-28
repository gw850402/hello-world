
import { SEARCH_SINGLE_LIGHT } from '../mutation-types.js'
import { CHANGE_SEARCH_VALUE } from '../mutation-types.js'
import { SET_LIST_LOADING } from '../mutation-types.js'
import { CHANGE_LIGHT_SWITCH } from '../mutation-types.js'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Toast } from 'vant';

Vue.use(VueAxios, axios);
Vue.use(Toast);

const singleLightModules = {
  state:{
    //是否处于加载状态
    loading:false,
    //是否已加载完成
    finished:false,
    //查询参数
    searchValue:'',
    //单灯列表数据
    singleLightList:[],
    originSingleLightList:[],
  },
  getters:{},
  mutations:{
    [SEARCH_SINGLE_LIGHT](state){
      //先清空数组
      state.singleLightList.splice(0, state.singleLightList.length);
      if(state.searchValue != ""){
        //如果查询条件不为空,判断名字包含检索字符串,如果匹配就添加到结果集中
        for(let index = 0; index < state.originSingleLightList.length; index++){
          if(state.originSingleLightList[index].name.indexOf(state.searchValue) != -1){
            state.singleLightList.push(state.originSingleLightList[index]);
          }
        }
      }
      else{
        //如果查询条件为空,直接返回原数组
        state.singleLightList = state.originSingleLightList;
      }
    },
    [SET_LIST_LOADING](state, newLoadingValue){
      state.loading = newLoadingValue;
    },
    [CHANGE_SEARCH_VALUE](state, newSearchValue){
      state.searchValue = newSearchValue;
    },
    [CHANGE_LIGHT_SWITCH](state, singleLight){
      for(let index = 0; index < state.originSingleLightList.length; index++){
        if(state.originSingleLightList[index].num == singleLight.num){
          state.originSingleLightList[index].checked = singleLight.checked;
        }
      }
      for(let index = 0; index < state.singleLightList.length; index++){
        if(state.singleLightList[index].num == singleLight.num){
          state.singleLightList[index].checked = singleLight.checked;
        }
      }
    },
  },
  actions:{
    async [SEARCH_SINGLE_LIGHT]({commit, state}){
      Toast.clear(true);
      const loadingToast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, //禁止背景点击
        message: '加载中...' //提示信息
      });
      Vue.axios.get("/json/singleLight.json").then((response) => {
        loadingToast.clear(true);
        //先清空原数组
        state.originSingleLightList.splice(0, state.originSingleLightList.length);
        //再给数组赋值
        state.originSingleLightList = response.data;
        //再根据条件进行过滤
        commit(SEARCH_SINGLE_LIGHT);
      }).catch(function (error) {
        loadingToast.clear(true);
        Toast.fail('单灯控制数据加载失败!');
        window.console.log(error);
      }).then(function () {
        state.loading = false;
        state.finished = true;
      });
    },
    async [CHANGE_LIGHT_SWITCH]({commit}, singleLight){
      var url = "/plc/SendCommand.ashx?id="+singleLight.num;
      if(singleLight.checked){
        url += "&cmd=2";
      }
      else{
        url += "&cmd=3";
      }
      url += "&type=8";
      Vue.axios.get(url).then((response) => {
        var lightState = false;
        if(response.data.state == 1){
          lightState = true;
        }
        //根据服务端返回的状态修改灯的状态
        commit(CHANGE_LIGHT_SWITCH,{num:singleLight.num, checked: lightState});
      }).catch(function (error) {
        window.console.log(error);
        Toast.clear(true);
        Toast.fail('单灯控制失败!');
        //恢复该灯的状态
        commit(CHANGE_LIGHT_SWITCH,{num:singleLight.num, checked: !singleLight.checked});
      });
    },
  }
}

export{
  singleLightModules
}