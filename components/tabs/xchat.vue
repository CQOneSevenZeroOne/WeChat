<template>
	<div class="chatBox" @click="getChatList">
		<a href="#/chatdetail" class="weui-cell">
	        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
	            <img :src="img" style="width: 50px;display: block">
	            <span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>
	        </div>
	        <div class="weui-cell__bd">
	            <p style="font-size: 16px;">你咬我啊i</p>
	            <p style="font-size: 13px;color: #888888;">你在干嘛</p>
	        </div>
	    </a>
	    <a href="#/chatdetail" class="weui-cell">
	        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
	            <img :src="img" style="width: 50px;display: block">
	            
	        </div>
	        <div class="weui-cell__bd">
	            <p style="font-size: 16px;">你咬我啊b</p>
	            <p style="font-size: 13px;color: #888888;">你在干嘛</p>
	        </div>
	    </a>
	</div>
	
</template>

<script>
	import $ from 'jQuery';
	export default {
		data(){
			return {
				img:require('../../img/2-small.jpg')
			}
		},
		methods:{
			getChatList(){
				$.ajax({
					type:"post",
					url:"http://localhost:3000/getChatList",
					success(data){
						console.log(data);
					},
					error(){
						console.log('error');
					}
				});
			}
		}
	}
</script>

<style scoped>
	.chatBox{
		background:#fff;
	}
	.weui-cell{
		border-bottom:1px solid #dedede;
		color:#000;
	}
</style>