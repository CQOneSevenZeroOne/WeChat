<template>
	<div>
		<xheader />
		<titles></titles>
		<cont></cont>
	</div>
	
</template>

<script>
	import xheader from "../xheader.vue";
	import titles from "../contain/mine-title.vue";
	import cont from "../contain/mine-cont.vue";
	export default {
		components:{
			xheader,
			titles,
			cont
		}
	}
</script>

<style>
</style>