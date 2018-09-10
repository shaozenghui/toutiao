<template>
  <div class="content_list">
        <ul>
          <li v-for="(v,k) in content_list">
            <a :href="v.source_url" >
               <img :src="v.image_url" alt="" class="img" v-if="v.image_url">
               <img src="../../assets/images/list/list1.jpg" alt="" class="img" v-if="v.image_url ? false : true ">
               <div class="text">
                 
                 <p class="title">{{v.title}}</p>
                 <p class="b">
                   <span class="type">{{v.type}}</span>
                   <span class="media"><img :src="v.media_avatar_url" alt="">{{v.source}}&nbsp;⋅&nbsp;{{v.video_play_count}}评论&nbsp;⋅&nbsp;{{v.comments_count}}分钟前</span>
                 </p>
                 <span class="close" id="v.id" @click="close(k)"><span>不感兴趣</span><i class="el-icon-close"></i></span>
               </div>
               <span class="time" v-if="v.video_duration_str"><i class="el-icon-caret-right"></i>{{v.video_duration_str}}</span>
           </a>
          </li>
        </ul>
  </div>
</template>
<script>
import data from "../../mock.js"
export default {
  props:["content_list"],
  data(){
    return{
      
      
    }
  },
  methods:{
    close(e){
      this.content_list.splice(e,1);
    }
  },
}
</script>

<style lang="less" scoped>

  .small_list{
    margin-top: 20px;
  }
   ul{
    width: 100%;
    overflow: hidden;
    li{
      width: 100%;
      height: 100px;
      padding: 10px 0;
      border-bottom: 1px solid #e8e8e8;
      position: relative;
      a{
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      .time{
        width: 50px;
        border-radius: 10px;
        color:#fff;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: rgba(0,0,0,0.7);
        position: absolute;
        bottom: 20px;
        font-size: 12px;
        left: 100px;
      }
      .img{
        width: 156px;
        height: 100px;
        float: left;
        margin-right: 10px;
      }
      .text{
        width: 486px;
        height: 100%;
        float: left;
        .title{
          width: 100%;
          height: 26px;
          line-height: 26px;
          font-size: 20px;
          color:#303030;
          font-weight: bold;
          &:hover{
            color:#3da8f5;
          }
        }
        .b{
          margin-top: 10px;
          height: 26px;
          line-height: 26px;
          font-size: 14px;
          color:#999;
          position: absolute;
          bottom: 0;
          left: 170px;
        }
        .type{
            border: 1px solid #3da8f5;
            color:#3da8f5;
            text-align: center;
            line-height: 20px;
            margin-right: 8px;
            font-size: 12px;
        }
        .media img{
          width: 16px;
          height: 16px;
          border-radius: 8px;
          position: relative;
          top: 4px;
          margin-right: 5px;
        }
        .close{
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-size: 14px;
          cursor: pointer;
          &:hover span{
            display: block;
          }
          i{
            color:#999;
            float: left;
          }
          span{
            background: red;
            color:#fff;
            font-size: 12px;
            padding: 3px;
            border-radius: 4px;
            display: none;
            float: left;
          }
        }
      }
      
    }
   }
</style>


