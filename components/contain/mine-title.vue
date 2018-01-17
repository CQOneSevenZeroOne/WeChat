<template>
	<div class="weui-mine-titles">
		<a href="#/own">
			<div class="mine-img">
				<img :src="img">
			</div>
			<div class="mine-conts">
				<div class="left">
					<h4 v-text="name"></h4>
					<p>微信号:<span v-text="wei_num"></span></p>
				</div>
				<span>
					<img src="../../img/chat-info-qr.png"/><i></i>
				</span>
			</div>
		</a>
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default{
		data(){
			return{
				name:"",
				wei_num:"",
				img:""
			}
		},
		mounted(){
	    	var _this = this;
	    	$.ajax({
				type:"post",
				url:"http://localhost:3000/getMessAll",
				data:{
					id:Number(_this.$store.state.id)
				},
				success(data){
					data = JSON.parse(data);
					if(data.length!=0){
						//将数据库的姓名提出显示
						_this.name = data[0].my_name;
						_this.$store.state.name = data[0].my_name;
						//将数据库的微信号提出并显示
						_this.wei_num = data[0].wei_num
						_this.$store.state.wei_num = data[0].wei_num;
						//将数据库的头像提出并显示
						_this.img = data[0].my_photo;
						_this.$store.state.img = data[0].my_photo;
					}
				},
				error(){
					console.log('error');
				}
			});
	   	}
	}
</script>

<style scoped="scoped">
	/*我的个人信息行*/
.weui-mine-titles{
	width: 100%;
	height: 7.4rem;
	border-bottom: 1px solid #e4e3e8;
	border-top: 1px solid #e4e3e8;
	margin-top: 1.2rem;
	background-color: #fff;
}
.weui-mine-titles a{
	display: flex;
	width: 100%;height: 7.5rem;
	padding: 0.9rem;
	justify-content: space-between;
}
.mine-img{
	width: 5.5rem;height: 5.5rem;
	margin-right: 1.7rem;
}
.mine-img img{
	width: 5.5rem;height: 5.5rem;
	border-radius: 0.4rem;
}
.mine-conts{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.mine-conts h4{
	height: 1.8rem;
	font-size: 1.5rem;
	font-weight: 600;
}
.mine-conts p{
	height: 1.6rem;
	font-size: 1rem;
}
.mine-conts span{
	width: 4.5rem;height: 2rem;
	margin-top: 1.25rem;
}
.mine-conts span img{
	width: 2rem;height: 2rem;
}
.mine-conts span i{
	display: inline-block;
	height: 2rem;width: 0.9rem;
	background: url(../../img/right.jpg) no-repeat center;
	padding-left: 2rem;
}
.left{
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #000;
}
</style>