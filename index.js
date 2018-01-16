import Vue from "vue";
// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/*// 状态管理
import Vuex from 'vuex'
Vue.use(Vuex)*/

import "weui";
// 全局样式
import "./template/base.css";

// 选项卡组件
import mine from "./components/tabs/mine.vue";
import wechat from "./components/tabs/wechat.vue";
import own from "./components/tabs/own.vue";
// 容器组件
import name from "./components/contain/changeName.vue";
import tab from "./components/contain/tab.vue";
import cont from "./components/contain/mess-cont.vue";
import coll from "./components/contain/collection.vue";
import sets from "./components/contain/setting.vue";
import expr from "./components/contain/expression.vue";
import card from "./components/contain/card.vue";
// 配置路由
var router = new VueRouter({
	routes: [
	{
			path: "/tab",
			component: tab,
			children: [{
					path: "wechat",
					component: wechat
				},
				{
					path: "mine",
					component: mine
				}
			]
		}, // 默认进入页面的时候跳转到
		{
			path: '/',
			redirect: '/tab/wechat'
		},
		{
			path: "/own",
			component: own,
			children:[
				{
					path: "name",
					component: name,
				},
				{
					path: "cont",
					component: cont,
				},
				{
					path: "coll",
					component: coll,
				},
				{
					path: "sets",
					component: sets,
				},
				{
					path: "expr",
					component: expr,
				},
				{
					path:"card",
					component:card
				}
			],
			redirect: '/own/cont'
			
		}
	]
})

/*// 配置store
var store = new Vuex.Store({
    state:{
        count:0,
        bool:true 
    }
})*/

new Vue({
	el: "#app",
	router,
	template: `
        <div>
            <router-view></router-view> 
        </div>
    `
})