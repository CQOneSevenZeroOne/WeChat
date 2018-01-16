<template>
	<div class="_full_router component-albums-friends cover-transition">
		<div class="_full_inner">
			<div class="_cover-top">
				<a href="#/tab/discovery">
					<div class="top-back">
						<div class="_ellipsis iconfont icon-return-arrow v-link-active">返回</div>
					</div>
				</a>
				<div class="top-other">
					<div class="_align-right"> <span class="iconfont"></span> </div>
				</div>
				<div class="top-title _effect">
					<p> <span>朋友圈</span> </p>
				</div>
			</div>
			<div class="_cover-content _effect">
				<div class="drag-reflash" style="top: -40px; transform: rotate(0deg);"></div>
				<div class="drag-wrap" id="drag-wrap">
					<div class="drag-inner" id="drag-inner" style="transform: translate3d(0px, 0px, 0px);">
						<header class="home-pic">
							<div class="home-pic-base">
								<div class="top-pic">
									<div class="top-pic-inner"> </div>
								</div>
								<div class="top-name _ellipsis">Mrs liu</div>
							</div>
						</header>
						<section class="home-content">
							<div class="weui-panel__bd">
								<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
									<div class="weui-media-box__hd">
										<img class="weui-media-box__thumb" src="../../img/touxiang.jpg">
									</div>
									<div class="weui-media-box__bd">
										<h4 class="weui-media-box__title">标题一</h4>
										<p class="weui-media-box__desc">由各种物质组成的巨型球状天体</p>
									</div>
								</a>
								<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
									<div class="weui-media-box__hd">
										<img class="weui-media-box__thumb" src="../../img/touxiang.jpg">
									</div>
									<div class="weui-media-box__bd">
										<h4 class="weui-media-box__title">标题二</h4>
										<p class="weui-media-box__desc">由各种物质组成的巨型球状天体</p>
									</div>
								</a>
							</div>
							<div class="weui-panel__ft">
								<a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
									<div class="weui-cell__bd">查看更多</div>
									<span class="weui-cell__ft"></span>
								</a>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	._cover-content {
		width: 100%;
		padding-top: 0;
		overflow: hidden;
	}
	
	.drag-wrap {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: auto;
		background-color: #2e3132;
	}
	
	.drag-inner {
		width: 100%;
		box-shadow: 0px 4px 16px rgba(0, 0, 0, .15);
		background-color: #ffffff;
	}
	
	.home-pic {
		width: 100%;
		margin-top: -90px;
		position: relative;
		height: 370px;
		background: url(../../img/find-bg.png) no-repeat center center;
		background-size: cover;
	}
	
	.home-pic-base {
		position: absolute;
		left: 0;
		bottom: -22px;
		width: 100%;
		height: 70px;
		padding: 0 15px;
	}
	
	.home-pic-base .top-pic {
		width: 140px;
		height: 140px;
		padding: 3px;
		transform: scale(.5);
		transform-origin: 100% 0%;
		background-color: #ffffff;
		border: 1px solid #cccccc;
		float: right;
	}
	
	.home-pic-base .top-name {
		position: absolute;
		left: 20px;
		right: 105px;
		top: 10px;
		font-size: 20px;
		text-align: right;
		color: #ffffff;
		overflow: hidden;
	}
	
	.top-pic-inner {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		background-image: url(../../img/touxiang.jpg);
	}
	
	.home-content {
		padding-top: 45px;
		min-height: 500px;
	}
	
	._cover-top>a {
		color: #fff;
	}
	
	.weui-media-box_appmsg .weui-media-box__hd {
		width: 40px;
		height: 40px;
		line-height: 40px;
		margin-right: 0rem;
	}
	
	.weui-media-box__title {
		color: cornflowerblue;
		font-size: 12px;
		font-weight: bold;
	}
	.weui-media-box__desc{
		color: #000;
		font-size: 12px;
	}
</style>