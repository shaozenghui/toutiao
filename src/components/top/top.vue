<template>
	<div class="top" @click="toTop"><i class="el-icon-caret-top"></i></div>
</template>
<script>
	export default {
		data(){
			return{

			}
		},
		methods:{
			toTop() {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
		}
	}
</script>
<style>
	.top{
		width: 40px;
		height: 40px;
		position: fixed;
		bottom: 40px;
		right: 40px;
		background: #F85959;
		text-align: center;
		line-height: 40px;
		color: #fff;
		font-size: 24px;
		cursor: pointer;

	}
</style>