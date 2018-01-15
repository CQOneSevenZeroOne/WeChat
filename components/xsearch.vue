<template>
	<div class="weui-search-bar" :class="bool?'weui-search-bar_focusing':''" id="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                </div>
                <label @click="isShow" class="weui-search-bar__label" id="searchText">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a @click="back" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
        </div>
</template>

<script>
	export default {
		data(){
			return {
				bool:false
			}
		},
		methods:{
			isShow(){
				this.bool = true;
			},
			back(){
				this.bool = false;
			}
		}
	}
</script>

<style>
</style>