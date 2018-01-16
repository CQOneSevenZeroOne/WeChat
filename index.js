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
<<<<<<< HEAD
import wechat from "./components/tabs/wechat.vue";
//import discovery from "./components/tabs/discovery.vue";
//import contact from "./components/tabs/contact.vue";
//import mine from "./components/tabs/mine.vue";

// 容器组件
import own from "./components/contain/own.vue";
import tab from "./components/contain/tab.vue";
import chatdetail from "./components/contain/chatdetail.vue";
import chatInfo from "./components/contain/chatInfo.vue";
// 配置路由
var router = new VueRouter({
    // 默认进入页面的时候跳转到
=======
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
=======

import mine from "./components/tabs/mine.vue";

import wechat from "./components/tabs/wechat.vue";
import discovery from "./components/tabs/discovery.vue";
import contact from "./components/tabs/contact.vue";
import mine from "./components/tabs/mine.vue";



// 容器组件
import tab from "./components/contain/tab.vue";
import own from "./components/contain/own.vue";
import friendcircle from "./components/contain/friend-circle.vue";
import new_friend from "./components/contain/new_friend.vue";
import group_chat from "./components/contain/group_chat.vue";
import person_info from "./components/contain/person_info.vue";
// 配置路由
var router = new VueRouter({


>>>>>>> 1c6e21ac66ec193a5ef6b721aaaf1faa29ec02c7
    routes: [{
            path: "/tab",
            component: tab,
            children: [{
                    path: 'wechat',
                    component: wechat
               },
<<<<<<< HEAD
               /* {
=======
                {
>>>>>>> 1c6e21ac66ec193a5ef6b721aaaf1faa29ec02c7
                    path: 'discovery',
                    component: discovery
                },,
                {
                    path: 'contact',
                    component: contact
                },*/
                {
                    path: 'mine',
                    component: mine
                }
            ]
<<<<<<< HEAD
        }, // 默认进入页面的时候跳转到
        {
            path: '/',
            redirect: '/tab/wechat'
        },
       
=======
        }, 
		// 默认进入页面的时候跳转到
        {
            path: '/',
            redirect: '/mine'
        },
>>>>>>> 1c6e21ac66ec193a5ef6b721aaaf1faa29ec02c7
        {
        	path:"/own",
        	component:own
        },
         {
<<<<<<< HEAD
        	path:"/chatdetail",
        	component:chatdetail
        },
         {
        	path:"/chatInfo",
        	component:chatInfo
=======
        	path:"/friend-circle",
        	component:friendcircle
        },{
            path: "/new_friend",
            component: new_friend
        },{
            path: "/group_chat",
            component: group_chat
        },{
            path: "/person_info",
            component: person_info
>>>>>>> 1c6e21ac66ec193a5ef6b721aaaf1faa29ec02c7
        }
    ]
>>>>>>> 8a1934cd5d3711067d1ca58cebda0fbdd4498f89
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