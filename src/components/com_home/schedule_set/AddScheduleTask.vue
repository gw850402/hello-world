<template>
  <div>
    <van-nav-bar :border="false" title="创建定时任务" left-arrow @click-left="onClickNavBarLeft">
      <template v-slot:right>
        <van-button round type="info" size="small" text="完成" @click="onFinshBtnClick"/>
      </template>
    </van-nav-bar>
    <van-cell-group>
      <van-field required clearable v-model="taskName" label="任务名" placeholder="请输入任务名" maxlength="50" input-align="right"/>
      <van-cell required title="设备" is-link to="/taskDevices">
        <div class="van-ellipsis">逸夫楼/A座1层/77,逸夫楼/A座1层/66</div>
      </van-cell>
      <van-cell title="动作" >
        <template v-slot:right-icon>
          <van-switch slot="right-icon" v-model="taskAction" size="24px" @change="taskActionSwitchChange"/>
        </template>
      </van-cell>
      <van-cell title="重复" :value="taskRepeat" @click="onClickTaskRepeat()"></van-cell>
      <van-cell title="时间" :value="taskTime" @click="onClickTaskTime()"></van-cell>
    </van-cell-group>
    <van-popup v-model="showTaskRepeatPanel" round position="bottom" :style="{ height: '50%' }">
      <van-nav-bar :border="false" title="重复选项"></van-nav-bar>
      <van-list>
        <van-cell-group>
          <van-cell :clickable="true" title="执行一次" :title-class="excuteOne" @click="onClickTaskRepeatOption(0)"></van-cell>
          <van-cell :clickable="true" title="每天" :title-class="everyDay" @click="onClickTaskRepeatOption(1)"></van-cell>
          <van-cell :clickable="true" title="法定工作日(中国大陆)" :title-class="workDay" @click="onClickTaskRepeatOption(2)"></van-cell>
          <van-cell :clickable="true" title="法定节假日(中国大陆)" :title-class="freeDay" @click="onClickTaskRepeatOption(3)"></van-cell>
          <van-cell :clickable="true" title="自定义" :title-class="custom" @click="onClickTaskRepeatOption(4)"></van-cell>
        </van-cell-group>
      </van-list>
    </van-popup>
    <van-popup v-model="showTaskTimePanel" round position="bottom" :style="{ height: '50%' }">
      <van-nav-bar :border="false" title="执行时间"></van-nav-bar>
      <van-datetime-picker v-model="currentDate" :type="taskTimeType" @confirm="confirmTaskTime" @cancel="cancelTaskTime"/>
    </van-popup>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Field } from 'vant';
import { Switch } from 'vant';
import { Popup } from 'vant';
import { List } from 'vant';
import { DatetimePicker } from 'vant';
import { Tag } from 'vant';


export default {
  name: 'AddScheduleTask',
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Switch.name]: Switch,
    [Popup.name]: Popup,
    [List.name]: List,
    [DatetimePicker.name]: DatetimePicker,
    [Tag.name]: Tag,
  },
  data () {
    return {
      taskName:'',
      taskAction:true,
      
      taskRepeat:'执行一次',
      showTaskRepeatPanel:false,
      taskRepeatSelectedOptionColor:'',
      excuteOne:'',
      everyDay:'',
      workDay:'',
      freeDay:'',
      custom:'',
      
      taskTime:'未设置',
      showTaskTimePanel:false,
      currentDate:new Date(),
      taskTimeType:'datetime',
    }
  },
  methods:{
    onClickNavBarLeft:function(){
      // 点击回退的时候当做地址回退
      this.$router.go(-1);
    },
    onFinshBtnClick:function(){
      
    },
    taskActionSwitchChange:function(){
      
    },
    onClickTaskRepeat:function(){
      this.showTaskRepeatPanel = true;
    },
    onChangeTaskRepeatOptions:function(){
      
    },
    onClickTaskRepeatOption:function(choice){
      if(choice == 0){
        this.taskRepeat = "执行一次";
        this.showTaskRepeatPanel=false;
        this.excuteOne = "task-repeat-selected-option";
        this.everyDay = "";
        this.workDay = "";
        this.freeDay = "";
        this.custom = "";
        this.$nextTick(function () {
          this.taskTimeType = "datetime";
          this.currentDate = new Date();
          this.taskTime = "未设置";
        });
        return ;
      }
      if(choice == 1){
        this.taskRepeat = "每天";
        this.showTaskRepeatPanel=false;
        this.excuteOne = "";
        this.everyDay = "task-repeat-selected-option";
        this.workDay = "";
        this.freeDay = "";
        this.custom = "";
        this.$nextTick(function () {
          this.taskTimeType = "time";
          this.currentDate = "12:00";
          this.taskTime = "未设置";
        });
        return ;
      }
      if(choice == 2){
        this.taskRepeat = "法定工作日(中国大陆)";
        this.showTaskRepeatPanel=false;
        this.excuteOne = "";
        this.everyDay = "";
        this.workDay = "task-repeat-selected-option";
        this.freeDay = "";
        this.custom = "";
        this.$nextTick(function () {
          this.taskTimeType = "time";
          this.currentDate = "12:00";
          this.taskTime = "未设置";
        });
        return ;
      }
      if(choice == 3){
        this.taskRepeat = "法定节假日(中国大陆)";
        this.showTaskRepeatPanel=false;
        this.excuteOne = "";
        this.everyDay = "";
        this.workDay = "";
        this.freeDay = "task-repeat-selected-option";
        this.custom = "";
        this.$nextTick(function () {
          this.taskTimeType = "time";
          this.currentDate = "12:00";
          this.taskTime = "未设置";
        });
        return ;
      }
      if(choice == 4){
        this.taskRepeat = "自定义";
        this.showTaskRepeatPanel=false;
        this.excuteOne = "";
        this.everyDay = "";
        this.workDay = "";
        this.freeDay = "";
        this.custom = "task-repeat-selected-option";
        this.$nextTick(function () {
          this.taskTimeType = "time";
          this.currentDate = "12:00";
          this.taskTime = "未设置";
        });
        return ;
      }
    },
    onClickTaskTime:function(){
      this.showTaskTimePanel = true;
      if(this.taskRepeat == "执行一次"){
        this.taskTimeType = "datetime";
        this.currentDate = new Date();
      }
      else{
        this.taskTimeType = "time";
        this.currentDate = "12:00";
      }
    },
    confirmTaskTime:function(){
      if(this.taskTimeType == "datetime") {
        this.taskTime = this.currentDate.getFullYear() + '年' + (this.currentDate.getMonth() + 1) + '月' + this.currentDate.getDate() + '日' + this.currentDate.getHours() + '时' + this.currentDate.getMinutes() + '分';
      }
      else {
        this.taskTime = this.currentDate.split(":")[0] + '时' + this.currentDate.split(":")[1] + '分';
      }
      this.showTaskTimePanel = false;
    },
    cancelTaskTime:function(){
      this.showTaskTimePanel = false;
    }
  }
}
</script>

<style>
.task-repeat-selected-option{
  color: #1296db;
}
</style>
