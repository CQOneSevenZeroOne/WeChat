<template>
	<div class="chatBox">
		<a href="#/chatdetail" class="weui-cell" v-for="(a,index) in chatArr" @click="getChatName(index)" :data-id='a.socketId'>
	        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
	            <img :src="a.img" style="width: 50px;display: block">
	            <!--<span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>-->
	        </div>
	        <div class="weui-cell__bd">
	            <p style="font-size: 16px;" v-text="a.chatname" class="chatName"></p>
	            <p style="font-size: 13px;color: #888888;" v-text="a.content"></p>
	        </div>
	    </a>
	</div>
	
</template>

<script>
	import $ from 'jQuery';
	import io from '../../template/socket.io.js';
	export default {
		data(){
			return {
				chatArr:[],
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
						_this.chatArr.push(
							{
								'chatname':obj[i].chatname,
								'content':obj[i].mycont,
								img:obj[i].youphoto,
								socketId:obj[i].socketid
							}
						);
					}
				},
				error(){
					console.log('error');
				}
			});
		},
		methods:{
			getChatName(index){
				this.$store.state.chat_name = $(".chatName").eq(index).html();
				this.$store.state.socket_Id = $(".weui-cell").eq(index).attr('data-id');
				console.log('要聊天的id为：',this.$store.state.socket_Id)
				/*var socket = io("http://localhost:3000");
				socket.emit("addUser",{
					chatName:this.$store.state.chat_name,
					username:this.$store.state.name
				})*/
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