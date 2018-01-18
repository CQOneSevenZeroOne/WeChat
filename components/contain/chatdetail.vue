<template>
	<div>
		<div class="chatTitle">
			<p>
				<a href="#/tab/wechat"><img src="../../img/leftsanjiao.png" /></a>微信</p>
			<span v-text="chatName"></span>
			<a href="#/chatInfo"><img src="../../img/icon-ren.png" alt="" /></a>
		</div>
		<div class="chatContent">
			<ul>
				<li v-for="a in chatArr" :style="{'textAlign':a.status==0?'right':'left'}"><img :src="a.status==0?myphoto:chatphoto" :style="{'float':a.status==0?'right':'left'}" /><span v-text="a.message" :style="{'color':a.status==0?'#fff':'#333','background':a.status==0?'green':'#fff'}"></span></li>
			</ul>
		</div>
		<div class="chatFooter">
			<img src="../../img/iconyuyin.png" @click="checkShow" v-show="isShowInput" />
			<input type="text" v-show="isShowInput" id="mess" @input="saveMess"/>
			<img src="../../img/key.png" v-show="isShow" @click="checkShow" />
			<div class="chat-say" v-show="isShow" :style="{'background-color':isMouseDown?'#c6c7ca':'#fff'}"> <span class="one" v-show="isMouseUp" @mousedown="changeStatus">按住 说话</span> <span class="two" v-show="isMouseDown" @mouseup="changeStatus">松开 结束</span> </div>
			<p v-show="sendData==''"><img src="../../img/iconxiao.png" />
			<img src="../../img/iconjia.png" /></p>
			<button v-show="sendData!=''" @click="sendMessage">发送</button>
		</div>
		<div class="recording" v-show="isMouseDown">
			<div class="recording-voice" >
				<div class="voice-inner">
					<div class="voice-icon"></div>
					<div class="voice-volume"> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div>
				</div>
				<p>手指上划,取消发送</p>
			</div>
			<div class="recording-cancel" v-show="isMouseUp">
				<div class="cancel-inner"></div>
				<p>松开手指,取消发送</p>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jQuery';
	import io from  '../../template/socket.io.js';
	export default {
		data() {
			return {
				isShow: false,
				isShowInput: true,
				isMouseDown: false,
				isMouseUp: true,
				chatName:'',
				sendData:'',
				chatArr:[],
				myphoto:'',
				chatphoto:'',
				socket:io("http://localhost:3000")
			}
		},
		methods: {
			checkShow() {
				this.isShow = !this.isShow;
				this.isShowInput = !this.isShowInput;
			},
			changeStatus(event) {
				this.isMouseDown = !this.isMouseDown;
				this.isMouseUp = !this.isMouseUp;
			},
			saveMess(){
				this.sendData = $("#mess").val();
			},
			sendMessage(){
				var _this = this;
				this.socket.emit("sendMess",{
					//发送的消息
					message:_this.sendData,
					//聊天的id
					tid:_this.$store.state.chat_Id,
					//登录名
					name:_this.$store.state.name
				})
				this.chatArr.push({
					message:this.sendData,
					status:0
				})
				$("#mess").val('');
				this.sendData = $("#mess").val();
			}
		},
		mounted(){
			this.chatName = this.$store.state.chat_name;
			this.myphoto = this.$store.state.my_photo;
			this.chatphoto = this.$store.state.chat_photo;
			console.log('',this.$store.state.chat_photo)
			var _this = this;
			this.socket.emit("addUser",{id:_this.$store.state.id})
//			var socket = io("http://localhost:3000");
//			socket.emit("addUser",{
//				chatName:this.$store.state.chat_name,
//				username:this.$store.state.name
//			})
			this.socket.on('returnMess',function(data){
				console.log('返回'+data);
				_this.chatArr.push({
					message:data,
					status:1
				});
			})
		}
	}
</script>

<style scoped>
	.chatTitle {
		display: flex;
		line-height: 45px;
		background: #343339;
		color: #fff;
		flex-direction: row;
		justify-content: space-between;
		font-size: 16px;
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		z-index: 11;
	}
	
	.chatTitle p img {
		vertical-align: middle;
		margin-right: 5px;
	}
	
	.chatTitle a img {
		vertical-align: sub;
	}
	.chatContent{
		padding: 15px;
		margin: 46px 0;
	}
	.chatContent li img{
		width: 40px;
		height: 40px;
		float: left;
	}
	.chatContent li {
		overflow: hidden;
		padding-bottom: 20px;
		font-size: 14px;
	}
	.chatContent li span{
		display: inline-block;
		padding: 0 10px;
		line-height: 26px;
		color: #333;
		background: #fff;
		width: 100px;
		border-radius: 4px;
		margin-left: 10px;
		margin-right: 10px;
   		 margin-top: 10px;
   		 text-align: left;
	}
	.chatFooter {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding: 10px 0;
		border-top: 1px solid #dbdbdb;
		background: #fff;
	}
	.chatFooter button{
		width: 50px;
		height: 30px;
		border: 0;
		outline: none;
		background: deepskyblue;
		color: #fff;
	}
	input {
		width: 185px;
		border-radius: 6px;
		border: 0;
		border: 1px solid #b3b5b8;
		outline: none;
		padding: 0 10px;
	}
	.chatFooter p img{
		vertical-align: sub;
		margin-right: 7px;
	}
	.chat-say {
		width: 185px;
		border-radius: 6px;
		border: 1px solid #b3b5b8;
		outline: none;
		padding: 0 10px;
		text-align: center;
	}
	.chat-say span{
		    font-size: 16px;
	}
	.recording {
		position: fixed;
		left: 50%;
		top: 45%;
		transform: translate(-50%, -50%);
		width: 140px;
		height: 140px;
		padding: 5px;
		background-color: rgba(0, 0, 0, .5);
		color: #fff;
		border-radius: 5px;
		font-size: 14px;
		text-align: center;
	}
	
	.voice-inner {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 110px;
	}
	
	.voice-inner .voice-icon {
		width: 55px;
		height: 90px;
		background: url(../../img/recording-bkg.png) no-repeat 50%;
		background-size: contain;
	}
	
	.voice-inner .voice-volume {
		width: 30px;
		height: 55px;
	}
	
	.voice-inner .voice-volume span {
		display: block;
		height: 2px;
		margin-top: 4px;
		min-width: 8px;
		float: left;
		clear: both;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-duration: 2s;
		background-color: #e4e4e5;
	}
	
	.voice-inner .voice-volume span:first-child {
		width: 24px;
		visibility: hidden;
	}
	
	.voice-inner .voice-volume span:nth-child(2) {
		width: 22px;
	}
	
	.voice-inner .voice-volume span:nth-child(3) {
		width: 20px;
	}
	
	.voice-inner .voice-volume span:nth-child(4) {
		width: 18px;
	}
	
	.voice-inner .voice-volume span:nth-child(5) {
		width: 16px;
	}
	
	.voice-inner .voice-volume span:nth-child(6) {
		width: 14px;
	}
	
	.voice-inner .voice-volume span:nth-child(7) {
		width: 12px;
	}
	
	.voice-inner .voice-volume span:nth-child(8) {
		width: 10px;
	}
	
	.cancel-inner {
		width: 110px;
		height: 110px;
		margin: 0 auto;
		background-image: url(../../img/record-cancel.png);
		background-repeat: no-repeat;
		background-position: 50%;
		background-size: contain;
	}
	
	.recording-cancel p {
		border-radius: 3px;
		background-color: #9d383e;
	}
</style>