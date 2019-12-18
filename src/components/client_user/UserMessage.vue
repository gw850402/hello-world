<template>
  <div>
    <van-nav-bar border title="消息"></van-nav-bar>
    
  </div>
</template>

<script>
import { NavBar } from 'vant';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';

export default {
  name: 'userMessage',
  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  }
}

</script>

<style>
</style>
