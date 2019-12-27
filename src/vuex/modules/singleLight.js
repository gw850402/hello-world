
import { SEARCH_SINGLE_LIGHT } from '../mutation-types.js'
import { CHANGE_SEARCH_VALUE } from '../mutation-types.js'
import { SET_LIST_LOADING } from '../mutation-types.js'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

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
  },
  actions:{
    async [SEARCH_SINGLE_LIGHT]({commit, state}){
      Vue.axios.get("/json/singleLight.json").then((response) => {
        //先清空原数组
        state.originSingleLightList.splice(0, state.originSingleLightList.length);
        //再给数组赋值
        state.originSingleLightList = response.data;
        state.loading = false;
        state.finished = true;
        //再根据条件进行过滤
        commit(SEARCH_SINGLE_LIGHT);        
      });
    }
  }
}

export{
  singleLightModules
}