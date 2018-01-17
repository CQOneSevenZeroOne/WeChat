<template>
	<div class="chatBox">
		<a href="#/chatdetail" class="weui-cell" v-for="(a,index) in chatArr" @click="getChatName(index,a.my_photo)" :data-img='a.my_photo'>
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
								socketId:obj[i].socketid,
								my_photo:obj[i].anotherphoto
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
			getChatName(index,photo){
				this.$store.state.chat_name = $(".chatName").eq(index).html();
				this.$store.state.my_photo = photo
				var _this = this;
				var socket = io("http://localhost:3000");
				socket.emit("addUser",{
					id:this.$store.state.id
				})
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