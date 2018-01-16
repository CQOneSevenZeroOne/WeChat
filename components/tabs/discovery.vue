<template>
	<div>
		<xheader />
		<div class="_full_inner _effect component-find" _v-1df058c8="">
			<div class="_full component-find-content" _v-1df058c8="">
				<div class="weui_cells weui_cells_access" _v-1df058c8="">
					<div class="weui_cell" href="javascript:;" _v-1df058c8="">
						<div class="weui_cell_hd" _v-1df058c8=""><img :src="friendImg" _v-1df058c8=""></div>
						<div class="weui_cell_bd weui_cell_primary" _v-1df058c8="">
							<p _v-1df058c8="">朋友圈</p>
						</div>
						<div class="weui_cell_ft" _v-1df058c8="">
							<div class="find-circle-cell" _v-1df058c8=""> </div>
						</div>
					</div>
				</div>
				<div class="weui_cells weui_cells_access" _v-1df058c8="">
					<div class="weui_cell" href="javascript:;" _v-1df058c8="">
						<div class="weui_cell_hd" _v-1df058c8=""><img :src="saoImg" _v-1df058c8=""></div>
						<div class="weui_cell_bd weui_cell_primary" _v-1df058c8="">
							<p _v-1df058c8="">扫一扫</p>
						</div>
						<div class="weui_cell_ft" _v-1df058c8="">
							<div class="find-circle-cell" _v-1df058c8=""> </div>
						</div>
					</div>
					<div class="weui_cell" href="javascript:;" _v-1df058c8="">
						<div class="weui_cell_hd" _v-1df058c8=""><img :src="yaoImg" _v-1df058c8=""></div>
						<div class="weui_cell_bd weui_cell_primary" _v-1df058c8="">
							<p _v-1df058c8="">摇一摇</p>
						</div>
						<div class="weui_cell_ft" _v-1df058c8="">
							<div class="find-circle-cell" _v-1df058c8=""> </div>
						</div>
					</div>
				</div>
				<div class="weui_cells weui_cells_access" _v-1df058c8="">
					<div class="weui_cell" href="javascript:;" _v-1df058c8="">
						<div class="weui_cell_hd" _v-1df058c8=""><img :src="piaoImg" _v-1df058c8=""></div>
						<div class="weui_cell_bd weui_cell_primary" _v-1df058c8="">
							<p _v-1df058c8="">漂流瓶</p>
						</div>
						<div class="weui_cell_ft" _v-1df058c8="">
							<div class="find-circle-cell" _v-1df058c8=""> </div>
						</div>
					</div>
				</div>
				<div class="weui_cells weui_cells_access" _v-1df058c8="">
					<div class="weui_cell" href="javascript:;" _v-1df058c8="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div class="weui_cell_hd" _v-1df058c8=""><img :src="shopImg" _v-1df058c8=""></div>
						<div class="weui_cell_bd weui_cell_primary" _v-1df058c8="">
							<p _v-1df058c8="">购物</p>
						</div>
						<div class="weui_cell_ft" _v-1df058c8="">
							<div class="find-circle-cell" _v-1df058c8=""> </div>
						</div>
					</div>
					<div class="weui_cell" href="javascript:;" _v-1df058c8="">
						<div class="weui_cell_hd" _v-1df058c8=""><img :src="gameImg" _v-1df058c8=""></div>
						<div class="weui_cell_bd weui_cell_primary" _v-1df058c8="">
							<p _v-1df058c8="">游戏</p>
						</div>
						<div class="weui_cell_ft" _v-1df058c8="">
							<div class="find-circle-cell" _v-1df058c8=""> </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import xheader from "../xheader.vue";
	export default {
		//注册
		components: {
			xheader

		},
		data() {
			return {
				friendImg: require('../../img/find_icon-circle.png'),
				saoImg:require('../../img/find_icon-qrcode.png'),
				yaoImg:require('../../img/find_icon-shake.png'),
				piaoImg:require('../../img/find_icon-bottle.png'),
				shopImg:require('../../img/find_icon-shopping.png'),
				gameImg:require('../../img/find_icon-moregame.png')
			}
		}
	}
</script>
<style scoped="scoped">
	.component-find-content .weui_cells .weui_cell_hd img {
		width: 20px;
		margin-right: 10px;
		display: block;
	}
	
</style>