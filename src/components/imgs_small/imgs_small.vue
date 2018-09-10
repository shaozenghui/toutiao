<template>
	<div class="imgs_small">
		<el-row :gutter='10'>
			<el-col :span="12" v-for="(v,k) in imgs_list" :key="v.id">
				<a :href="v.source_url">
					<img :src="v.image_list[0].url" alt="" class="img_big">
					<p class="title">{{v.title}}</p>
					<p class="source">{{v.source}}&nbsp;·<span v-if="v.group_source">{{v.group_source}}评论</span></p>
					<span class="count">{{v.gallary_image_count}}图</span>
				</a>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	 export default{
	 	props:["imgs_list"],
	 	data(){
	 		return{

	 		}
	 	}
	 }
</script>
<style lang="less">
	.el-col{
		margin-bottom: 20px;
		 a{
		 	display: inline-block;
			width: 100%;
			overflow: hidden;
			position: relative;
			p{
				width: 100%;
				line-height: 30px;
				font-size: 16px;
				color:#222;
				float: left;
				margin-top: 10px;
				display: block;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				&:hover{
					color:#3da8f5;
				}
			}
			.source{
				color:#999;
				font-size: 12px;
				line-height: 20px;
				margin-top: 0px;
			}
			.count{
				position: absolute;
				bottom: 80px;
				right: 10px;
				background: rgba(0,0,0,0.7);
				border-radius: 10px;
				color:#fff;
				font-size: 14px;
				text-align: center;
				line-height: 20px;
				width: 50px;
			}
			.img_big{
		    	width: 100%;
		    	height: 170px;
		    	float: left;
		    }
		}
    }
   

</style>