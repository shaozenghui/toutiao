<template>
  <div class="adver" v-if="flag">
      <div class="taobao">
        <span style="font-size: 16px;font-weight: bold;color: red">淘宝&nbsp;</span>
        <span style="font-size: 14px;color: red">广告</span>
      </div>
      <div class="close" @click="flag = false">不感兴趣</div>
      <el-carousel >
        <el-carousel-item v-for="item in arr" :key="item">
          <a href="javascript:;"><img :src="item" alt=""></a>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>

export default {
  data(){
    return{
      arr:["https://gma.alicdn.com/bao/uploaded/i3/78568318/TB2CeVbv_qWBKNjSZFAXXanSpXa_!!0-saturn_solar.jpg_250x250.jpg_.webp",
           "https://gma.alicdn.com/bao/uploaded/i2/43697565/TB2pSK8v7omBKNjSZFqXXXtqVXa_!!0-saturn_solar.jpg_250x250.jpg_.webp",
      ],
      flag:true
    }
  },
  components:{
     
  }
}
</script>

<style lang="less" scoped>
  .adver{
   width: 300px;
   padding: 20px;
   height:248px;
   background: #f4f5f6;
   margin-top: 30px;
   position: relative;
   .close{
      position: absolute;
      top: 0px;
      right: 20px;
      padding: 4px;
      background:red;
      border-radius: 4px;
      font-size: 14px;
      color:#fff;
      z-index: 101;
      cursor: pointer;
    }
   .taobao{
    background: #fff;
    padding: 5px;
    border-radius: 4px;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 100;
    cursor: pointer;
    
    span{
      float: left;
    }
   }
    img{
      border: 2px solid red;
      width: 100%;
      height: 248px;
    } 
  }
</style>
