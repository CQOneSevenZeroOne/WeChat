<template>
<div>
  <div class="_cover-top"  >
        <div class="top-back" >
            <a href="#/tab/contact" style="color:white;"><div class="_ellipsis iconfont icon-return-arrow v-link-active" >通讯录</div></a>
        </div>
        <div class="top-title _effect" >
            <p >
                <span>添加朋友</span>
            </p>
        </div>
    </div>
    <div class="search-line" >
        <span class="iconfont icon-search" ></span>
        <input type="text" placeholder="微信号/手机号" @blur="searchChat" id="searchpeople"> 
    </div>
    <p class="_align-center" style="padding-top:8px">
        <span >我的微信号:</span>
        <span >niyaowoa</span>
        <b >&nbsp;
            <img src="../../img/contact_add-friend-my-qr.png" style="width:24px" class="_align-middle">
        </b>
    </p>
    <div class="weui_cells weui_cells_access add-friends-options" :style="{'display':isshow?'block':'none'}">
        <a class="weui_cell" href="javascript:;" >
            <div class="weui_cell_hd" >
                <img src="../../img/contact_add-friend-reda.png" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >雷达加朋友</p>
                <p >添加身边的朋友</p>
            </div>
            <div class="weui_cell_ft" ></div>
        </a>
        <a class="weui_cell" href="javascript:;" >
            <div class="weui_cell_hd" >
                <img src="../../img/contact_add-friend-addgroup.png" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >面对面建群</p>
                <p >与身边的朋友进入同一个群聊</p>
            </div>
            <div class="weui_cell_ft" ></div>
        </a>
        <a class="weui_cell" href="javascript:;" >
            <div class="weui_cell_hd" >
                <img src="../../img/contact_add-friend-scanqr.png" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >扫一扫</p>
                <p >扫描二维码名片</p>
            </div>
            <div class="weui_cell_ft" ></div>
        </a>
        <a class="weui_cell" href="javascript:;" >
            <div class="weui_cell_hd" >
                <img src="../../img/contact_add-friend-contacts.png" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >手机联系人</p>
                <p >添加通讯录中的朋友</p>
            </div>
            <div class="weui_cell_ft" ></div>
        </a>
        <a class="weui_cell" href="javascript:;" >
            <div class="weui_cell_hd" >
                <img src="../../img/contact_add-friend-offical.png" >
            </div>
            <div class="weui_cell_bd weui_cell_primary" >
                <p >公众号</p>
                <p >获得更多资讯和服务</p>
            </div>
            <div class="weui_cell_ft" ></div>
        </a>
    </div>
    <div class="contentBox" :style="{'display':isshow?'none':'block'}">
			<h3>添加朋友</h3>
			<div v-show="searchArr==''" class="result">未查询到相关信息</div>
			<a href="#/chatdetail" class="weui-cell" v-show="searchArr!=''" v-for="ar in searchArr">
				<div class="weui-cell__hd" style="position: relative;margin-right: 10px;border-radius: 5px;">
					<img :src="ar.photo" style="width: 50px;display: block">
				</div>
				<div class="weui-cell__bd">
					<p style="font-size: 16px;" v-text="ar.contact_name"></p>
					<p style="font-size: 13px;color: #888888;" v-text="ar.phone"></p>
				</div>
			</a>
		</div>
</div>
</template>
<script>
	import $ from "jQuery";
	export default{
		data(){
			return{
				isshow:true,
				searchArr:[]
			}
		},
		methods:{
			hidebox(){
				this.isshow=true;
			},
			searchChat(){
				this.isshow=false;
				this.searchArr = [];
				var _this = this;
				var stra= $("#searchpeople").val();
				console.log(stra)
				$.ajax({
					type:"post",
					url:"http://localhost:3000/getstrager",
					dataType:'json',
					data:{
						strager_num:stra
					},
					success(data){
						_this.searchArr=data;
					},
					error(){
						console.log('error')
					}
				});
			}
		}
	}
</script>
<style scoped>
    ._cover-top .top-title {
    padding: 0 8px;
    overflow: hidden;
    font-size: 18px;
    justify-content: center;
    text-align: center;
    width:234px;
    }
    .search-line {
    position: relative;
    height: 50px;
    padding-left: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #fff;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    margin-top: 20px;
}
.search-line .icon-search{
    color: #40b938;
}
.search-line input {
    width: calc(100% - 30px);
    font-size: 16px;
    height: 100%;
    border: 0;
    outline: none;
    vertical-align: middle;
}
.add-friends-options img {
    width: 35px;
    display: block;
    margin-right: 10px;
}
.add-friends-options .weui_cell_primary p {
    font-size: 15px;
}
.add-friends-options .weui_cell_primary p:last-child {
    font-size: 12px;
        color: #b7b7b7;
}
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
	.result{
		padding:15px;
		font-size: 14px;
		color: #666;
		text-align: center;
	}
</style>

