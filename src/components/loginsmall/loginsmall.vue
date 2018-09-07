<template>
  <div class="loginsmall">
      <div>
         <p>登录后可以保存您的浏览喜好、评论、收藏，并与APP同步更可以发布微头条</p>
         <el-button type="danger" class="login_btn">登录</el-button>
         <ul>
             <li>
                <a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&scope=get_user_info%2Cadd_share%2Cadd_t%2Cadd_pic_t%2Cget_info%2Cget_other_info%2Cget_fanslist%2Cget_idollist%2Cadd_idol%2Cget_repost_list&state=ca8b96b0isQBYRjEAXCpcXpvbmVfc25zxAFzxADEAXICxAFkAMQBdgLEAWkAxAFoxA5hcGkuc25zc2RrLmNvbcQBbQDEAW7ZTGh0dHBzOi8vc3NvLnRvdXRpYW8uY29tL2F1dGgvbG9naW5fc3VjY2Vzcy8_c2VydmljZT1odHRwczovL3d3dy50b3V0aWFvLmNvbS8%3D&redirect_uri=http%3A%2F%2Fapi.snssdk.com%2Fauth%2Flogin_success%2F&response_type=code&client_id=100290348">
                 <img src="../../assets/images/qq.svg" alt="">
                 <p>QQ</p>
               </a>
             </li>
             <li>
                <a href="36e7af1disQBYRjEAXCmd2VpeGluxAFzxADEAXICxAFkAMQBdgLEAWkAxAFoxA5hcGkuc25zc2RrLmNvbcQBbQDEAW7ZTGh0dHBzOi8vc3NvLnRvdXRpYW8uY29tL2F1dGgvbG9naW5fc3VjY2Vzcy8_c2VydmljZT1odHRwczovL3d3dy50b3V0aWFvLmNvbS8">
                 <img src="../../assets/images/wx.svg" alt="">
                 <p>微信</p>
               </a>
             </li>
         </ul>
      </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      input5:''
    }
  },

}
</script>

<style lang="less" scoped> 
  .loginsmall{
   width: 300px;
   height: 196px;
   padding: 20px;
   background: #f4f5f6;
   margin-top: 20px;
   div{
      width: 260px;
      height: 156px;
      padding: 20px;
      background: #fff;
      p{
        width: 100%;
        text-align: center;
        line-height: 17px;
        color:#999;
        font-size: 12px;
      }
      .login_btn{
        padding: 10px 115px !important;
         margin: 20px 0;
      }
      ul{
        width: 100%;
        height: 62px;
        display: flex;
        justify-content: space-around;
        li{
          cursor: pointer;
        }
        img{
          width: 36px;
          height: 36px;
        }
      }
   }

  }
</style>
