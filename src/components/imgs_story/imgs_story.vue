<template>
	<div class="imgs_story">
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
		      this.$http.jsonp("https://www.toutiao.com/api/pc/feed/?category=%E7%BB%84%E5%9B%BE&utm_source=toutiao&max_behot_time=0&as=A1F50B193691C34&cp=5B96616C0384FE1&_signature=IdRsOgAAekl24yRhFwfbriHUbC").then(resp=>{
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
