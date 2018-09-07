<template>
  <div class="search">
      <div>
       <el-input placeholder="请输入你要搜索的内容" v-model="input5" class="input-with-select">
          <el-button slot="append"   icon="el-icon-search"></el-button>
       </el-input>
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
  .search{
    width: 100%;
    height: 44px;
    line-height: 44px;

  }
</style>
