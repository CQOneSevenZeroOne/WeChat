<template>
	<div>
		<titles></titles>
		<cont></cont>
	</div>
	
</template>

<script>
	import titles from "../contain/mine-title.vue";
	import cont from "../contain/mine-cont.vue";
	export default {
		components:{
			titles,
			cont
		}
	}
</script>

<style>
	html{font-size: 62.5%;}/*1rem=10px*/
body{
  line-height:1.6;
  font-family:-apple-system-font, "Helvetica Neue", sans-serif;
  background-color: #f0eff5;
}
*{
  margin:0;
  padding:0;
}
a img{
  border:0;
}
a{
  text-decoration:none;
  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
}
</style>