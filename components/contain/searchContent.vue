<template>
	<div>
		<div class="weui-search-bar weui-search-bar_focusing"  id="searchBar">
			<form class="weui-search-bar__form">
				<div class="weui-search-bar__box">
					<i class="weui-icon-search"></i>
					<input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" @blur="searchChat">
					<a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
				</div>
				<label class="weui-search-bar__label" id="searchText">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
			</form>
			<a @click="back" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
		</div>
		<div class="contentBox">
			<h3>聊天记录</h3>
			<a href="#/chatdetail" class="weui-cell">
				<div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
					<img src="../../img/2-small.jpg" style="width: 50px;display: block">
					<!--<span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>-->
				</div>
				<div class="weui-cell__bd">
					<p style="font-size: 16px;">ninini</p>
					<p style="font-size: 13px;color: #888888;">xxxx</p>
				</div>
			</a>
			<a href="#/chatdetail" class="weui-cell">
				<div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
					<img src="../../img/2-small.jpg" style="width: 50px;display: block">
					<!--<span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>-->
				</div>
				<div class="weui-cell__bd">
					<p style="font-size: 16px;">ninini</p>
					<p style="font-size: 13px;color: #888888;">xxxx</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default {
		methods:{
			back(){
				location.href='#/tab/wechat'
			},
			searchChat(){
				var sea = $("#searchInput").val();
				$.ajax({
					type:"post",
					url:"http://localhost:3000/getSearchList",
					data:{
						sea:sea
					},
					async:true,
					success(data){
						console.log(data)
					}
				});
			}
		}
	}
</script>

<style scoped>
	.contentBox {
		background: #fff;
	}
	.contentBox h3{
		font-size: 13px;
		color: #333;
		font-weight: 500;
		line-height: 30px;
		padding-left: 15px;
	}
	.weui-cell {
		border-bottom: 1px solid #dedede;
		color: #000;
	}
</style>