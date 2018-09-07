<template>
  <div class="hot">
     <banner></banner>
     <smallList :small_list="small_list"></smallList>
     <el-alert title="你有新消息未查看" type="success" center ></el-alert>
     <contentList :content_list="content_list"></contentList>
     <smallList :small_list="small_list"></smallList>
     <el-alert title="你有新消息未查看" type="success" center ></el-alert>
     <contentList :content_list="content_list"></contentList>
  </div>
</template>

<script>

import banner from "../banner/banner"
import smallList from "../small_list/small_list"
import contentList from "../contentList/contentList"

export default {
  data(){
    return{
      small_list:[],
      content_list:[],
    }
  },
  created(){
      this.axios.get("http://small_list.cn").then(resp=>{
         this.small_list = resp.data;
      }).catch(err=>{
        console.log(err)
      }) 
      this.axios.get("http://content_list.cn").then(resp=>{
         console.log(resp.data);
         this.content_list = resp.data;
      }).catch(err=>{
        console.log(err)
      }) 

  },
  components:{
     banner,
     smallList,
     contentList,
  }
}
</script>

<style lang="less" scoped>

</style>
