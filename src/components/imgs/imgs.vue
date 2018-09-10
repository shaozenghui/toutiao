<template>
	<div class="imgs">
		<ul>
			<router-link to="/imgs/whole" tag="li" >全部</router-link>
			<router-link to="/imgs/old_img" tag="li">老照片</router-link>
			<router-link to="/imgs/imgs_story" tag="li">图片故事</router-link>
			<router-link to="/imgs/photography" tag="li">摄影集</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
	 export default{
	 	data(){
	 		return{

	 		}
	 	}
	 }
</script>
<style lang="less" >	
	.imgs{
		width: 100%;
		overflow: hidden;
		ul{
			width: 100%;
			overflow: hidden;
			display: flex;
			justify-content: space-around;
			margin-bottom: 20px;
			li{
				padding: 10px 40px;
				color:#222;
				font-size: 16px;
				cursor: pointer;
			}
		}
	}
</style>