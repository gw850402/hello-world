<template>
  <div>
    
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
      deviceGroupList:[
        {
          num:1,
          title:"逸夫楼A座所有灯",
          number:2,
          state:true
        },
        {
          num:2,
          title:"逸夫楼B座所有灯",
          number:10,
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
    onSearchGroupControl:function(){
      
    },
    onGroupControlListLoad:function(){
      
    },
    groupSwitchChange:function(){
      
    },
    onClickGroupControlPlus:function(){
      this.$router.push({path: '/addGroupControl'})
    }
  }
}
</script>

<style>
</style>
