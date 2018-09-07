<template>
  <div class="hotnew">
    <h3>24小时热闻</h3>
      <ul>
        <li v-for="(v,k) in hotnew">
          <a href="javascript:;"> <img src="../../assets/images/list/list6.jpg" alt="" >
          <p>{{v.title}}</p></a>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  props:["hotnew"],
  data(){
     return{

     }
  },
  components:{
     
  }
}
</script>

<style lang="less">
  .hotnew{
    width: 300px;
    padding: 20px;
    overflow: hidden;
    background: #f4f5f6;
    margin-top: 30px;
    border-top: 2px solid red;
    h3{
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      margin-bottom: 20px;
    }
    li{
      width: 100%;
      height: 60px;
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
      overflow: hidden;
      position: relative;
      color:#222;
      &:nth-child(even){
        margin-right: 0px;
      }
      img{
        width: 60px;
        height: 60px;
        float: left;
         margin-right: 10px;
         
      }
      p{
        width: 228px;
        line-height: 20px;
        font-size: 14px;
        vertical-align: middle;
        float: left;
        &:hover{
          color:#3da8f5;
        }
      }
    }
  }
</style>
