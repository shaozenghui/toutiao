<template>
	<div class="hot">
		<smallList :small_list="small_list"></smallList>
		<contentList :content_list="content_list"></contentList>
		<el-alert title="你有新消息未查看" type="success" center ></el-alert>
		<smallList :small_list="small_list"></smallList>
		<contentList :content_list="content_list"></contentList>
	</div>
</template>
<script>
	import contentList from "../contentList/contentList"
	import smallList from "../small_list/small_list"
	export default {
		data(){
			return{
				content_list:[],
				small_list:[],
			}
		},
		created(){
	      this.axios.get("http://content_list.cn").then(resp=>{
	         console.log(resp.data);
	         this.content_list = resp.data;
	      }).catch(err=>{
	        console.log(err)
	      }) 
	       this.axios.get("http://small_list.cn").then(resp=>{
	         console.log(resp.data);
	         this.small_list = resp.data;
	      }).catch(err=>{
	        console.log(err)
	      }) 
	    },
	    components:{
	      contentList,
	      smallList,
		}	
	}
</script>
<style>
	
</style>