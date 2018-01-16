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
import "./template/weui.min.css";
import "./template/wechat.css";

// 选项卡组件
import mine from "./components/tabs/mine.vue";
import discovery from "./components/tabs/discovery.vue";
import contact from "./components/tabs/contact.vue";

// 容器组件
import tab from "./components/contain/tab.vue";
import chatdetail from "./components/contain/chatdetail.vue";
import chatInfo from "./components/contain/chatInfo.vue";
import wechat from "./components/tabs/wechat.vue";
import own from "./components/tabs/own.vue";
import name from "./components/contain/changeName.vue";
import cont from "./components/contain/mess-cont.vue";
import coll from "./components/contain/collection.vue";
import sets from "./components/contain/setting.vue";
import expr from "./components/contain/expression.vue";
import card from "./components/contain/card.vue";
import new_friend from "./components/contain/new_friend.vue";
import group_chat from "./components/contain/group_chat.vue";
import person_info from "./components/contain/person_info.vue";
import friendcircle from "./components/contain/friend-circle.vue";
import saoyisao from "./components/contain/sao-yi-sao.vue";
import yaoyiyao from "./components/contain/yao-yi-yao.vue";
import piaoliuping from "./components/contain/piao-liu-ping.vue";

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
				},
				{
					path: "discovery",
					component: discovery
				},
				{
					path: "contact",
					component: contact
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
			
		},
         {
        	path:"/chatdetail",
        	component:chatdetail
        },
         {
        	path:"/chatInfo",
        	component:chatInfo
        },
        {
        	path:"/friend-circle",
        	component:friendcircle
        },
        {
        	path:"/sao-yi-sao",
        	component:saoyisao
        },
         {
        	path:"/yao-yi-yao",
        	component:yaoyiyao
        },
        {
        	path:"/piao-liu-ping",
        	component:piaoliuping
        },
        {
            path: "/new_friend",
            component: new_friend
        },{
            path: "/group_chat",
            component: group_chat
        },{
            path: "/person_info",
            component: person_info
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