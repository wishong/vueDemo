//入口文件
import Vue from 'vue'

//1.1导入路由包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//导入resource包
// import VueResource from 'vue-resource'
// Vue.use(VueResource)

//导入axios包
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


//导入格式化时间的插件
import moment from 'moment'
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:MM:SS"){ 
    return moment(dataStr).format(pattern)
})

//按需导入Mint-ui组件
import { Header, Swipe, SwipeItem,button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(button.name, button)



//导入Mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入app根组件
import app from './App.vue'
//1.3导入自己的路由模块
import router from './router.js'

var vm = new Vue({
    el: '#App',
    render: c => c(app),
    router //1.4挂载路由对象
})