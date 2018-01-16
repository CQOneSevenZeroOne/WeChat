import Vue from "vue";
// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 状态管理
import Vuex from 'vuex'
Vue.use(Vuex)

import "weui";
// 全局样式
import "./template/base.css";
import "./template/weui.min.css";
import "./template/wechat.css";
// 选项卡组件
import mine from "./components/tabs/mine.vue";
<<<<<<< HEAD
import contact from "./components/tabs/contact.vue";
import discovery from "./components/tabs/discovery.vue";
=======
<<<<<<< HEAD
import contact from "./components/tabs/contact.vue";
import discovery from "./components/tabs/discovery.vue";
=======
import discovery from "./components/tabs/discovery.vue";
import contact from "./components/tabs/contact.vue";



>>>>>>> def7fe416e8d8e646fda18eb1cc36bd5b36bdacf
>>>>>>> 28bbd998a5bf60566b41e2fa0d461128c063f747
// 容器组件
import tab from "./components/contain/tab.vue";
import chatdetail from "./components/contain/chatdetail.vue";
import chatInfo from "./components/contain/chatInfo.vue";
<<<<<<< HEAD
// 配置路由
<<<<<<< HEAD
=======
=======

>>>>>>> def7fe416e8d8e646fda18eb1cc36bd5b36bdacf
>>>>>>> 28bbd998a5bf60566b41e2fa0d461128c063f747
import wechat from "./components/tabs/wechat.vue";
import own from "./components/tabs/own.vue";
import con from "./components/tabs/con.vue";
// 容器组件
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
<<<<<<< HEAD
import more from "./components/contain/more.vue";
=======
<<<<<<< HEAD
>>>>>>> 28bbd998a5bf60566b41e2fa0d461128c063f747
// 配置路由
var router = new VueRouter({
	routes: [
	{
			path: "/tab",
			component: tab,
			children: [{
<<<<<<< HEAD
=======
					path: "wechat",
					component: wechat
				},
				{
					path: "mine",
					component: mine
				},
				{
=======
import person_info_set from "./components/contain/person_info_set.vue";
// 配置路由
var router = new VueRouter({
	routes: [
	    {
            path: "/tab",
            component: tab,
            children: [{
>>>>>>> 28bbd998a5bf60566b41e2fa0d461128c063f747
                    path: "wechat",
                    component: wechat
                },{
                    path: "mine",
                    component: mine
                },{
<<<<<<< HEAD
=======
>>>>>>> def7fe416e8d8e646fda18eb1cc36bd5b36bdacf
>>>>>>> 28bbd998a5bf60566b41e2fa0d461128c063f747
                    path:"discovery",
                    component:discovery
                },{
                    path:"contact",
                    component:contact
<<<<<<< HEAD
                }]
=======
<<<<<<< HEAD
                }
			]
>>>>>>> 28bbd998a5bf60566b41e2fa0d461128c063f747
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
				},
				{
					path:"more",
					component:more
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
        },{
            path: "/new_friend",
            component: new_friend
=======
                }]
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
            }],
            redirect: '/own/cont'
        },
        {
            path: "/con",
            component: con,
            children:[
                {
                    path: "new_friend",
                    component: new_friend
                },{
                    path: "group_chat",
                    component: group_chat
                },{
                    path: "person_info",
                    component: person_info
                },{
                    path: "person_info_set",
                    component: person_info_set
                }
                
            ]
        },
        {
        path:"/chatdetail",
        component:chatdetail
>>>>>>> def7fe416e8d8e646fda18eb1cc36bd5b36bdacf
        },{
        path:"/chatInfo",
        component:chatInfo
        },{
<<<<<<< HEAD
            path: "/person_info",
            component: person_info
<<<<<<< HEAD
=======
=======
            path:"/friend-circle",
            component:friendcircle
>>>>>>> def7fe416e8d8e646fda18eb1cc36bd5b36bdacf
>>>>>>> 28bbd998a5bf60566b41e2fa0d461128c063f747
        }
    ]
})

// 配置store
var store = new Vuex.Store({
    state:{
        count:0,
        bool:true,
        name:"ZLuLu"
    }
})

new Vue({
	el: "#app",
	router,
	store,
	template: `
        <div>
            <router-view></router-view> 
        </div>
    `
})