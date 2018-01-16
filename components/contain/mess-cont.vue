<template>
	<div>
		<h3>
			<a href="##" @click="toMine"><img src="../../img/return.jpg" /></a><span v-text="title"></span>
		</h3>
		<ul>
			<li class="hight">
				<a class="margins">
					<span>头像</span> 
					<img src="../../img/1.jpg"/>
				</a>
			</li>
			<li>
				<a href="#/own/name">
					<span>昵称</span> 
					<em v-text="name"></em>
				</a>
			</li>
			<li>
				<a>
					<span>微信号</span> 
					<em>zhanglu</em>
				</a>
			</li>
			<li>
				<a>
					<span>二维码名片</span> 
					<img src="../../img/chat-info-qr.png"/>
				</a>
			</li>
			<li @click="toMore">
				<h4>
					<span>更多</span> 
				</h4>
			</li>
			<li>
				<h4 class="margins">
					<span>我的地址</span> 
				</h4>
			</li>
		</ul>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				title:"个人信息",
				name:""
			}
		},
		mounted(){
	    	this.name = this.$store.state.name
	   	},
		methods:{
			toMine:function(){
				location.href = "#/tab/mine";
			},
			toMore:function(){
				location.href = "#/own/more";
			}
		}
	}
</script>

<style scoped="scoped">
	/*头部样式*/
	h3{
		line-height: 4.5rem;
		background: #393a3f;
		font-size: 1.8rem;
		color: #fff;
		font-weight: 500;
		padding:0 1.2rem;
		display: flex;
		align-items: center;
	}
	h3 a{
		width: 4rem;height:2.95rem;
		padding-right: 1.5rem;
	}
	h3 img{
		width: 4rem;height:2.95rem;
	}
	/*内容样式*/
	li{
		list-style: none;
		height:5rem;
		padding: 0 2.2rem;
		background-color: #fff;
	}
	li img{
		width: 2.5rem;height: 2.5rem;
	}
	li a{
		height: 4.9rem;
		line-height: 4.9rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #e4e3e8;
	}
	li h4{
		height: 4.9rem;line-height: 4.9rem;
		font-weight: normal;
	}
	li a img{
		width: 2.5rem;height: 2.5rem;
	}
	li span{
		color: #353535;
		font-size:1.5rem;
	}
	li em{
		font-style: normal;
		color: #999;
		font-size: 1.2rem;
	}
	/*设置margin值和上边框*/
	.margins{
		margin-top: 1.7rem;
	}
	.hight{
		height: 6rem;
	}
	.hight a{
		height: 5.9rem;
		line-height: 5.9rem;
	}
	.hight a img{
		width:3.5rem;height: 3.5rem;
	}
</style>