<template>
  <div class="text_img_list">
    <h3>精彩图片</h3>
      <ul>
        <li v-for="(v,k) in text_img_list">
          <a href="javascript:;"> <img src="../../assets/images/list/list2.jpg" alt="" >
          <p>{{v.title}}</p></a>
          <span class="num">{{v.num}}图</span>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  props:["text_img_list"],
  data(){
     return{

     }
  },
  components:{
     
  }
}
</script>

<style lang="less">
  .text_img_list{
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
      width: 144px;
      height: 130px;
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
      overflow: hidden;
      position: relative;
      &:nth-child(even){
        margin-right: 0px;
      }
      .num{
        position: absolute;
        top: 50px;
        right: 10px;
        z-index: 100;
        width: 36px;
        height: 20px;
        color:#fff;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        line-height: 20px;
        border-radius: 10px;
      }
      img{
        width: 144px;
        height: 84px;
        float: left;
         margin-bottom: 10px;
      }
      p{
        line-height: 17px;
        font-size: 14px;
        &:hover{
          color:#3da8f5;
        }
      }
    }
  }
</style>
