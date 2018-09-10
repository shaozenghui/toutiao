<template>
  <div class="small_list">
        <ul>
          <li v-for="(v,k) in small_list">
            <a href="javascript:;" class="title">{{v.title}}</a>
            <p>
              <span class="type">{{v.type}}</span>
              <span class="media"><img :src="v.media_avatar_url" alt="">{{v.source}}&nbsp;⋅&nbsp;{{v.video_play_count}}评论&nbsp;⋅&nbsp;{{v.comments_count}}分钟前</span>
            </p>
            <span class="close" id="v.id" @click="close(k)"><span>不感兴趣</span><i class="el-icon-close"></i></span>
          </li>
        </ul>
  </div>
</template>

<script>

export default {
  props:["small_list"],
  data(){
    return{
    }
  },
  methods:{
    close(e){
      this.small_list.splice(e,1);
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
      overflow: hidden;
      padding: 10px 0;
      border-bottom: 1px solid #e8e8e8;
      position: relative;
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
      p{
        margin-top: 10px;
        height: 26px;
        line-height: 26px;
        font-size: 14px;
        color:#999;

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
</style>

