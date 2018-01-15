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



// 选项卡组件
import mine from "./components/tabs/mine.vue";

// 容器组件
import own from "./components/contain/own.vue"
// 配置路由
var router = new VueRouter({
    routes: [
    // 默认进入页面的时候跳转到
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

// 配置store
var store = new Vuex.Store({
    state:{
        count:0,
        bool:true 
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