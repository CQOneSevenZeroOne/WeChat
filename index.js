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
<<<<<<< HEAD
import mine from "./components/tabs/mine.vue";
=======
import wechat from "./components/tabs/wechat.vue";
//import discovery from "./components/tabs/discovery.vue";
//import contact from "./components/tabs/contact.vue";
//import mine from "./components/tabs/mine.vue";
>>>>>>> ae447c274aacba8e962ed7befc24eda134be61ac

// 容器组件
import own from "./components/contain/own.vue"
// 配置路由
var router = new VueRouter({
<<<<<<< HEAD
    routes: [
    // 默认进入页面的时候跳转到
=======
    routes: [{
            path: "/tab",
            component: tab,
            children: [{
                    path: 'wechat',
                    component: wechat
                }
               /* {
                    path: 'discovery',
                    component: discovery
                },
                {
                    path: 'contact',
                    component: contact
                },
                {
                    path: 'mine',
                    component: mine
                }*/
            ]
        }, {
            path: "/chat",
            component: chat
        }, // 默认进入页面的时候跳转到
>>>>>>> ae447c274aacba8e962ed7befc24eda134be61ac
        {
            path: '/',
            redirect: '/mine'
        },
        {
        	path:"/mine",
        	component:mine
        },
        {
        	path:"/own",
        	component:own
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