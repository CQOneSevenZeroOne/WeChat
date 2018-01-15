<template>
	<div>
		<div class="weui-cell">
	        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
	            <img :src="img" style="width: 50px;display: block">
	            <span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>
	        </div>
	        <div class="weui-cell__bd">
	            <p>你咬我啊i</p>
	            <p style="font-size: 13px;color: #888888;">你在干嘛</p>
	        </div>
	    </div>
	</div>
	
</template>

<script>
	export default {
		data(){
			return {
				img:require('../../img/2-small.jpg')
			}
		}
	}
</script>

<style>
</style>