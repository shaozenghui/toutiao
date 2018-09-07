<template>
	<div class="link">
		<h3>更多</h3>
		<ul>
			<li v-for="v in moreList"><a :href="v.link">{{v.text}}</a></li>
		</ul>
	</div>
</template>
<script>
export default{
	props:["moreList"],
	data(){
		return{

		}
	},
	created(){
		console.log(this.moreList)
	}
}
</script>
<style lang="less" scoped>
	.link{
		width: 300px;
		padding: 20px;
		background: #f4f5f6;
		margin-top: 30px;
		border-top: 2px solid red;
		h3{
			height: 50px;
		    line-height: 50px;
		    font-size: 24px;
		    margin-bottom: 20px;
		}
		ul{
			width: 100%;
			overflow: hidden;
			li{
				width: 56px;
				height: 30px;
				margin-bottom: 20px;
				margin-right: 18px;
				line-height: 30px;
				float: left;
				a{
					height: 100%;
					color:#777;
					font-size: 14px;
					&:hover{
						color:#3da8f5;
					}
				}
			}
		}
	}
</style>
