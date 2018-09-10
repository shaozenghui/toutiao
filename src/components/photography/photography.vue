<template>
	<div class="photography">
		<imgs_small :imgs_list="imgs_list"></imgs_small>
	</div>
</template>
<script>
	import imgs_small from "../imgs_small/imgs_small"
	 export default{
	 	data(){
	 		return{
	 			imgs_list:[],
				count:"",
     			flag:true,
	 		}
	 	},
	 	created(){
	    	this.ajax();
		  },
		  methods:{
		    ajax(){
		      this.$http.jsonp("https://www.toutiao.com/api/pc/feed/?category=gallery_photograthy&utm_source=toutiao&max_behot_time=1536567512&as=A1452BB996C28F8&cp=5B9612B8FF482E1&_signature=3JM9wQAAhwyLpHWa3iCfTNyTPd").then(resp=>{
		          this.imgs_list = this.imgs_list.concat(resp.data.data);
		          if(this.flag && this.imgs_list.length != 0){
		             this.imgs_list.map(function(el){
		                el.source_url = 'https://www.toutiao.com'+el.source_url
		           })
		          }
		          this.count = "为你推荐了"+this.imgs_list.length+"篇文章";
		          setTimeout(()=>{
		             this.flag = false;
		             if(this.imgs_list.length < 100){
		                this.ajax();
		             }
		          },1000)
		      }).catch(err=>{
		         console.log(err)
		      }) 

		    },
		},
		components:{
			imgs_small,
		}
	 }
</script>
