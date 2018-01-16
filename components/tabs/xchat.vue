<template>
	<div class="chatBox">
		<a href="#/chatdetail" class="weui-cell" v-for="a in chatArr">
	        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
	            <img :src="img" style="width: 50px;display: block">
	            <!--<span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>-->
	        </div>
	        <div class="weui-cell__bd">
	            <p style="font-size: 16px;" v-text="a.chatname"></p>
	            <p style="font-size: 13px;color: #888888;" v-text="a.content"></p>
	        </div>
	    </a>
	</div>
	
</template>

<script>
	import $ from 'jQuery';
	export default {
		data(){
			return {
				img:require('../../img/2-small.jpg'),
				chatArr:[]
			}
		},
		mounted:function(){
			var _this = this;
			$.ajax({
				type:"post",
				url:"http://localhost:3000/getChatList",
				success(data){
					var obj = JSON.parse(data)
					for(var i in obj){
						_this.chatArr.push({'chatname':obj[i].chatname,'content':obj[i].mycont});
					}
				},
				error(){
					console.log('error');
				}
			});
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