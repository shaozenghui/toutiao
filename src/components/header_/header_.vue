<template>
  <div class="header_">
      <ul class="fl">
        <li><a href="">下载APP</a></li>
        <li><a href="">北京&nbsp;多云&nbsp;18°/ 27°</a></li>
      </ul>
      <ul class="fr">
        <li><a href="">侵权投诉</a></li>
        <li><a href="">头条产品</a></li>
      </ul>
      
  </div>
</template>

<script>

export default {
  data(){
    return{
      
    }
  },
  components:{
     
  }
}
</script>

<style lang="less" scoped>
    .common_w_h{
   
      height: 34px;
      line-height: 34px;
    }
   .header_{
       width: 100%;
      .common_w_h;
      background: #222;
      color:#fff;
      font-size: 14px;
      a{
         color:#fff;
      }
      ul li:first-child{
        border-right: 1px solid #fff;
      }
      li{
        .common_w_h;
        padding: 0 10px;
        float: left;
      }
   }
</style>
