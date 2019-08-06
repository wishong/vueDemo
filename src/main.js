//入口文件
import Vue from 'vue'

//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

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
// import { Header, Swipe, SwipeItem,button,Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(button.name, button)
// Vue.use(Lazyload)
import MintUi from 'mint-ui'
Vue.use(MintUi)
import 'mint-ui/lib/style.css'

//安装图片预览插件 (缩率图)
import VuePreview from 'vue-preview'
Vue.use(VuePreview)



//导入Mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入app根组件
import app from './App.vue'
//1.3导入自己的路由模块
import router from './router.js'

//创建 store 实例
var store = new Vuex.Store({
    state: { //this.$store.state.***
        //购物车中商品的数据 用数组存储
        cart:  JSON.parse(localStorage.getItem('cart') || ('[]')) 
         //从本地localStorage读取数据 
    },
    mutations: { //this.$store.commit('方法','参数')
        AddToCart(state,goodsinfo){
            var flag = false;
            state.cart.some(item => {
               if(item.id === goodsinfo.id){
                item.count += goodsinfo.count;
                flag = true;
                return true;
               }
            })
            if(!flag){
                state.cart.push(goodsinfo)
            }
            //更新cart之后 把数组存储到本地的数据库 loaclStorage
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        Update(state,goodsinfo){
            state.cart.some(item => {
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        remove(state,id){
            state.cart.some((item,i) => {
                if(item.id == id ){
                    state.cart.splice(i,1)
                    return true;
                }
            })
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        Selected(state,info){
            state.cart.some(item => {
                if(item.id == info.id){
                    item.selected = info.selected
                }
            })
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        updateGoodsSelected(state, info) {
            state.cart.some(item => {
              if (item.id == info.id) {
                item.selected = info.selected
              }
            })
            // 把最新的 所有购物车商品的状态保存到 store 中去
            localStorage.setItem('car', JSON.stringify(state.car))
          }
    },
    getters: { //this.$store.getters.***
        getnum(state){ //获取购物车总件数
            var num = 0;
            state.cart.forEach(item => {
                num += item.count;
            })
            return num;
        },
        getcount(state){ //获取单个商品件数
            var list = {};
            state.cart.forEach(item => {
                list[item.id] = item.count;
            })
            return list;
        },
        getGoodsSelected(state) { //获取商品开关
            var o = {}
            state.cart.forEach(item => {
              o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state){
            var o = {
                count: 0, //勾选的数量
                amount: 0, //勾选的总价
            }
            state.cart.forEach(item => {
                if(item.selected){
                    o.count += item.count;
                    o.amount += item.price * item.count
                }
            })
            return o;
        }
    }
})

var vm = new Vue({
    el: '#App',
    render: c => c(app),
    router, //1.4挂载路由对象
    store  //挂载 store
})