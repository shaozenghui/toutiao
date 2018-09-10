<template>
  <div id="app">
      <header_></header_>
      <div class="wrapper">
         <slidernav></slidernav>
         <div class="contantList fl">
            <router-view></router-view>
         </div>
         <div class="content_r fl">
           <search></search>
           <loginsmall></loginsmall>
           <adver></adver>
           <hotnew :hotnew="hotnew"></hotnew>
           <adver></adver>
           <textimglist :text_img_list="text_img_list"></textimglist>
           <links :moreList="moreList" ></links>
           <record  ></record>
           <top  ></top>
         </div>
      </div>
  </div>
</template>

<script>
import header_ from "./components/header_/header_"
import slidernav from "./components/slidernav/slidernav"
import search from "./components/search/search"
import loginsmall from "./components/loginsmall/loginsmall"
import textimglist from "./components/text_img_list/text_img_list"
import hotnew from "./components/hotnew/hotnew"
import adver from "./components/adver/adver"
import links from "./components/link/link"
import record from "./components/record/record"
import top from "./components/top/top"

export default {
  data(){
    return{
      text_img_list:[],
      hotnew:[],
      moreList:[],
    }
  },
  created(){
      this.axios.get("http://text_img_list.cn").then(resp=>{
        
         this.text_img_list = resp.data;
      }).catch(err=>{
        console.log(err)
      }) 
      this.axios.get("http://hotnew.cn").then(resp=>{
         this.hotnew = resp.data;
      }).catch(err=>{
        console.log(err)
      }) 
      this.axios.get("http://moreList.cn").then(resp=>{
         this.moreList = resp.data;
      }).catch(err=>{
         console.log(err)
      }) 

  },
  components:{
     header_,
     slidernav,
     search,
     loginsmall,
     textimglist,
     hotnew,
     adver,
     links,
     record,
     top,
  }
}
</script>

<style lang="less" >
 .wrapper{
    width: 1170px;
    margin: 20px auto;
    overflow: hidden;
 }
   .el-alert{
    background: #3da8f5;
    color:#fff;
    cursor: pointer;
  }
 .nav_class{
    background-color: #ed4040 !important;
    color: #fff !important;
 }
 .contantList{
   width: 660px;
   overflow: hidden;
   background: #fff;
   padding: 0 20px;
  
 }
 .content_r{
    width:340px;
    overflow: hidden;
 }
</style>
