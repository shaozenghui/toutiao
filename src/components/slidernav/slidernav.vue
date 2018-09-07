<template>
  <div class="slidernav fl">
    <div class="logo"><img src="../../assets/images/logo.png" alt=""></div>
      <ul>
         <router-link to="/recommend" tag="li">推荐</router-link>
         <router-link to="/sun" tag="li">阳光宽频</router-link>
         <router-link to="/hot" tag="li">热点</router-link>
         <router-link to="/imgs" tag="li">图片</router-link>
         <router-link to="/hot1" tag="li">科技</router-link>
         <router-link to="/hot1" tag="li">娱乐</router-link>
         <router-link to="/hot1" tag="li">游戏</router-link>
         <router-link to="/hot1" tag="li">体育</router-link>
         <router-link to="/hot1" tag="li">汽车</router-link>
         <router-link to="/hot1" tag="li">财经</router-link>
         <router-link to="/hot1" tag="li">搞笑</router-link>
         <router-link to="/hot1" tag="li">更多</router-link>
      </ul>
  </div>
</template>

<script>

export default {
  data(){
    return{
      
    }
  },

}
</script>

<style lang="less" scoped>

.com{
   width: 110px;
   overflow: hidden;
}
.slidernav{
    .logo{
        width: 100%;
        height: 27px;
        margin-bottom: 16px;
        img{
            width: 108px;
            height: 27px;
        }
    }
  .com;
  ul{
   .com;
   li{
    width: 100%;
     float: left;
     height: 40px;
     text-align: center;
     line-height: 40px;
     background: #fff;
     color:#999;
     border-radius: 4px;
     cursor: pointer;
     margin-bottom: 5px;
     &:hover{
        background-color: #ed4040 !important;
        color: #fff !important;
     }
   }
  }
}
</style>
