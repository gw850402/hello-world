<template>
  <div>
    <van-nav-bar :border="false" title="消息" left-arrow @click-left="onClickNavBarLeft"></van-nav-bar>
    <van-list v-model="loading" :finished="finished" @load="userMessage_onLoad">
      <van-cell-group >
        <van-cell v-for="userMessage in userMessageList" :key="userMessage.num" @click="onClickUserMessage(userMessage)">
          <van-row>
            <van-col span="12" class="van-ellipsis message-title">{{userMessage.title}}</van-col>
            <van-col span="12" class="van-ellipsis message-datetime">{{userMessage.dateTime}}</van-col>
          </van-row>
          <van-row class="van-ellipsis message-content">
            {{userMessage.content}}
          </van-row>
        </van-cell>
      </van-cell-group>
    </van-list>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Row, Col } from 'vant';
import { Dialog } from 'vant';

export default {
  name: 'userMessage',
  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Row.name]: Row,
    [Col.name]: Col,
    [Dialog.name]: Dialog,
  },
  data () {
    return {
      msg: "我是userMessage 组件",
      loading:false,
      finished:true,
      userMessageList:[
        {
          num:1,
          title:'单灯控制',
          type:'消息',
          dateTime:"2019-12-18 09:10:30",
          content:"高伟在2019年12月18日上午9点10分通过微信公众号关闭逸夫楼/A座1层/77号灯"
        },
        {
          num:2,
          title:'单灯控制',
          type:'消息',
          dateTime:"2019-12-19 09:10:30",
          content:"张翰文在2019年12月19日上午9点10分通过微信公众号关闭逸夫楼/A座1层/66号灯"
        }
      ]
    }
  },
  methods:{
    onClickNavBarLeft: function(){
      // 点击回退的时候当做地址回退
      this.$router.go(-1);
    },
    userMessage_onLoad: function(){
      
    },
    onClickUserMessage:function(userMessage){
      Dialog.alert({
        title: userMessage.title,
        message: userMessage.content,
        messageAlign:"left",
      }).then(() => {
        // on close
      });
    }
  }
}

</script>

<style>
.message-title{
  font-size: 16px;
  font-weight: 500;
}
.message-datetime{
  color: #7d7e80;
  font-size: 14px;
  text-align: right;
}
.message-content{
  color: #7d7e80;
  font-size: 14px;
}
</style>
