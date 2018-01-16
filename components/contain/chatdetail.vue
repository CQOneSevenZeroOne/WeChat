<template>
	<div>
		<div class="chatTitle">
			<p>
				<a href="#/tab/wechat"><img src="../../img/leftsanjiao.png" /></a>微信</p>
			<span>你咬我啊i</span>
			<a href="#/chatInfo"><img src="../../img/icon-ren.png" alt="" /></a>
		</div>
		<div class="chatFooter">
			<img src="../../img/iconyuyin.png" @click="checkShow" v-show="isShowInput"/>
			<input type="text" v-show="isShowInput"/>
			<img src="../../img/key.png" v-show="isShow" @click="checkShow"/>
			<div class="chat-say" v-show="isShow" :style="{'background-color':isMouseDown?'#c6c7ca':'#fff'}" > <span class="one" v-show="isMouseUp">按住 说话</span> <span class="two" v-show="isMouseDown">松开 结束</span> </div>
			<img src="../../img/iconxiao.png" />
			<img src="../../img/iconjia.png" />
		</div>
		<div class="recording" style="/* display: none; */">
			<div class="recording-voice" style="/* display: none; */">
				<div class="voice-inner">
					<div class="voice-icon"></div>
					<div class="voice-volume"> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div>
				</div>
				<p>手指上划,取消发送</p>
			</div>
			<div class="recording-cancel" style="/* display: none; */">
				<div class="cancel-inner"></div>
				<p>松开手指,取消发送</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false,
				isShowInput:true,
				isMouseDown:false,
				isMouseUp:true
			}
		},
		methods:{
			checkShow(){
				this.isShow = !this.isShow;
				this.isShowInput = !this.isShowInput;
			},
			changeStatus(){
				this.isMouseDown = !this.isMouseDown;
			}
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
		padding: 0 10px;
	}
	
	.chatTitle p img {
		vertical-align: middle;
		margin-right: 5px;
	}
	
	.chatTitle a img {
		vertical-align: sub;
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
	
	input {
		width: 185px;
		border-radius: 6px;
		border: 0;
		border: 1px solid #b3b5b8;
		outline: none;
		padding: 0 10px;
	}
	.chat-say {
	    width: 185px;
		border-radius: 6px;
		border: 1px solid #b3b5b8;
		outline: none;
		padding: 0 10px;
		text-align: center;  
    }
	.recording{
		position: fixed;
	    left: 50%;
	    top: 45%;
	    transform: translate(-50%,-50%);
	    width: 140px;
	    height: 140px;
	    padding: 5px;
	    background-color: rgba(0,0,0,.5);
	    color: #fff;
	    border-radius: 5px;
	    font-size: 14px;
	    text-align: center;
	}
	.voice-inner{
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