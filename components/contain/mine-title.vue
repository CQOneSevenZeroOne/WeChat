<template>
	<div class="weui-mine-title">
		<a href="#/own">
			<div class="mine-img">
				<img src="../../img/1.jpg">
			</div>
			<div class="mine-cont">
				<div class="left">
					<h4>ZLuLu</h4>
					<p>微信号:<span>zhanglu</span></p>
				</div>
				<span>
					<img src="../../img/chat-info-qr.png"/><i></i>
				</span>
			</div>
		</a>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	/*我的个人信息行*/
.weui-mine-title{
	display: flex;
	width: 100%;
	height: 7.4rem;
	border-bottom: 1px solid #e4e3e8;
	border-top: 1px solid #e4e3e8;
	margin-top: 1.2rem;
	background-color: #fff;
}
.weui-mine-title a{
	display: flex;
	width: 100%;height: 5.5rem;
	padding: 0.9rem;
	flex-direction: row;
	justify-content: flex-start;
}
.mine-img{
	width: 5.5rem;height: 5.5rem;
	padding-right: 1.7rem;
}
.mine-img img{
	width: 5.5rem;height: 5.5rem;
	border-radius: 0.4rem;
}
.mine-cont{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.mine-cont h4{
	height: 1.8rem;
	font-size: 1.5rem;
	font-weight: 600;
}
.mine-cont p{
	height: 1.6rem;
	font-size: 1rem;
}
.mine-cont span{
	width: 4.5rem;height: 2rem;
	margin-top: 1.25rem;
}
.mine-cont span img{
	width: 2rem;height: 2rem;
}
.mine-cont span i{
	display: inline-block;
	height: 2rem;width: 0.9rem;
	background: url(../../img/right.jpg) no-repeat center;
	padding-left: 1rem;
}
.left{
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #000;
}
</style>