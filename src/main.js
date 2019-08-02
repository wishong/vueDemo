//入口文件
import Vue from 'vue'

//1.1导入路由包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//
import VueResource from 'vue-resource'
Vue.use(VueResource)

// import axios from 'axios'
// import Qs from 'qs'
// Vue.use(axios)
// Vue.use(Qs)
// // Vue.prototype.axios = axios;
// // Vue.prototype.qs = Qs;



//按需导入Mint-ui组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)



//导入Mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入app根组件
import app from './App.vue'
//1.3导入自己的路由模块
import router from './router.js'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //1.4挂载路由对象
})