<style>
  *{
    margin: 0;
    padding: 0;
    font-family:"微软雅黑";
  }
  body{
    background-color: rgb(250, 250, 250);
  }
  .mint-header{
    background-color: #00a65a;
  }
  .mint-checklist-title,.mint-radiolist-title{
    font-size:16px;
  }
  .mint-cell-info{
    color: #CECECE;
  }
  .cell-rich.mint-cell .mint-cell-title .mint-cell-label{
    margin: 14 0 14 0;
  }
  .cell-rich.mint-cell .mint-cell-title .weui_media_info{
    margin-top: 15px;
    padding-bottom: 5px;
    font-size: 13px;
    color: #cecece;
    line-height: 1em;
    list-style: none;
    overflow: hidden;
  }
  .cell-rich.mint-cell .mint-cell-title .weui_media_info .weui_media_info_meta{
    float: left;
    padding-right: 1em;    
  }
</style>
<template>
  <div v-show="state">
    <router-view></router-view>  
  </div>
  
</template>
<script>
  var data = {
    state:false
  }
  export default {
    data: function(){
      return data;
    }    
  }

</script>