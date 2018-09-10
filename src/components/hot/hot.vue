<template>
	<div class="hot">
		<el-alert :title="count" type="success" center v-if="flag"> </el-alert >
	     <smallList :small_list="small_list"></smallList>
	     <el-alert title="你有新消息未查看" type="success" center ></el-alert>
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
				count:"",
     			flag:true,
			}
		},
		created(){
	    	this.ajax();
		    this.ajax_small();
		  },
		  methods:{
		    ajax(){
		      this.$http.jsonp("https://www.365yg.com/api/pc/feed/?min_behot_time=0&category=img_new&utm_source=toutiao&widen=1&tadrequire=true&as=A1255B29A5DDA46&cp=5B95ED5A84B64E1&_signature=kwDk1xASyKHEN6yMQWPlVZMA5M").then(resp=>{
		          this.small_list = this.small_list.concat(resp.data.data);
		          if(this.flag){
		             this.small_list.map(function(el){
		                el.source_url = 'https://www.365yg.com'+el.source_url
		           })
		          }
		          this.count = "为你推荐了"+this.small_list.length+"篇文章";
		          setTimeout(()=>{
		             this.flag = false;
		             if(this.small_list.length < 100){
		                this.ajax();
		             }
		          },1000)
		      }).catch(err=>{
		         console.log(err)
		      }) 

		    },
		     ajax_small(){
		      this.$http.jsonp("https://www.365yg.com/api/pc/feed/?min_behot_time=0&category=img_new&utm_source=toutiao&widen=1&tadrequire=true&as=A1255B29A5DDA46&cp=5B95ED5A84B64E1&_signature=kwDk1xASyKHEN6yMQWPlVZMA5M").then(resp=>{
		          this.content_list = this.content_list.concat(resp.data.data);
		          this.content_list.map(function(el){
		                el.source_url = 'https://www.365yg.com'+el.source_url
		          })
		      	}).catch(err=>{
		         console.log(err)
		      }) 
		      
		    }
		  },
	    components:{
	      contentList,
	      smallList,
		}	
	}
</script>
<style>
	
</style>