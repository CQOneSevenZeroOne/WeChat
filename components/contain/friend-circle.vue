<template>
	<div>
		<div class="_cover-top" _v-f50d4fca="" _v-365808fa="">
			<div class="top-back" _v-f50d4fca="">
				<div class="_ellipsis iconfont icon-return-arrow v-link-active" _v-f50d4fca="">返回</div>
			</div>
			<div class="top-other" _v-f50d4fca="">
				<div class="_align-right" _v-f50d4fca=""> <span class="iconfont" _v-f50d4fca=""></span> </div>
			</div>
			<div class="top-title _effect" _v-f50d4fca="">
				<p _v-f50d4fca=""> <span _v-f50d4fca="">朋友圈</span> </p>
			</div>
		</div>
		<div class="drag-wrap" id="drag-wrap" _v-365808fa="">
			<div class="drag-inner" id="drag-inner" _v-365808fa="" style="transform: translate3d(0px, 0px, 0px);">
				<header class="home-pic" _v-365808fa="">
					<div class="home-pic-base" _v-365808fa="">
						<div class="top-pic" _v-365808fa="">
							<div class="top-pic-inner" _v-365808fa=""> </div>
						</div>
						<div class="top-name _ellipsis" _v-365808fa="">Mrs liu</div>
					</div>
				</header>
				<section class="home-content" _v-365808fa=""> </section>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	._cover-top {
		position: relative;
		z-index: 2;
		overflow: hidden;
		height: 45px;
		padding: 0 15px 0 10px;
		line-height: 45px;
		background: linear-gradient(180deg, #303036, #3c3b40);
		opacity: 1;
		color: #fff;
		user-select: none;
		-webkit-user-select: none;
		transition: all .22s ease;
	}
	
	._cover-top .top-back {
		max-width: 85px;
		float: left;
	}
	._cover-top .top-back .icon-return-arrow {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	._cover-top .top-back .iconfont:before {
		font-size: 20px;
		vertical-align: middle;
	}
	
	.icon-return-arrow:before {
		content: "\E60A";
	}
	
	:after,
	 :before {
		box-sizing: inherit;
	}
	
	.iconfont {
		font-family: iconfont!important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: .2px;
		-moz-osx-font-smoothing: grayscale;
	}
	
	._cover-top .top-title {
		padding: 0 8px;
		overflow: hidden;
		font-size: 18px;
		justify-content: center;
		text-align: center;
	}
	
	._cover-top .top-title {
		transition: all .2s ease;
	}
</style>