import VueRouter from 'vue-router'

//导入对应路由组件
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Search from './components/tabbar/Search.vue'
import ShopCar from './components/tabbar/ShopCar.vue'

var router = new VueRouter({
  routes: [
    { path:'/' , redirect: '/home' },
    { path:'/home' , component: Home },
    { path:'/member' , component: Member },
    { path:'/search' , component: Search },
    { path:'/shopcar' , component: ShopCar }
  ],
  linkActiveClass:'mui-active' //默认覆盖路由高亮的类默认叫做router-link-active
})

// 把路由对象暴露出去
export default router