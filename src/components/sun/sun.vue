<template>
	<div class="sun">
		<contentList :content_list="content_list"></contentList>
		
	</div>
</template>
<script>
	import contentList from "../contentList/contentList"
	export default {
		data(){
			return{
				content_list:[],
			}
		},
		created(){
	      this.axios.get("http://sun_content_list.cn").then(resp=>{
	         console.log(resp.data);
	         this.content_list = resp.data;
	      }).catch(err=>{
	        console.log(err)
	      }) 
	    },
	    components:{
	      contentList,
		}	
	}
</script>
<style>
	
</style>