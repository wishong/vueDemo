import VueRouter from 'vue-router'

//导入对应路由组件
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Search from './components/tabbar/Search.vue'
import ShopCar from './components/tabbar/ShopCar.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
import AboutUs from './components/about/AboutUs.vue'


var router = new VueRouter({
  mode: 'history',
  routes: [
    { path:'/' , redirect: '/home' },
    { path:'/home' , component: Home },
    { path:'/member' , component: Member },
    { path:'/search' , component: Search },
    { path:'/shopcar' , component: ShopCar },
    { path:'/home/aboutus' , component: AboutUs },
    { path:'/home/newslist' , component: NewsList },
    { path:'/home/newsinfo/:id' , component: NewsInfo },
    { path:'/home/photolist' , component: PhotoList },
    { path:'/home/photoinfo/:id' , component: PhotoInfo },
    { path:'/goodslist' , component: GoodsList },
    { path:'/goodslist/goodsinfo/:id' , component: GoodsInfo },
    //编程式跳转
    { path:'/goodslist/goodsdesc/:id' , component: GoodsDesc , name: 'goodsdesc'},
    { path:'/goodslist/goodscomment/:id' , component: GoodsComment , name: 'goodscomment'}
  ],
  linkActiveClass:'mui-active' //默认覆盖路由高亮的类默认叫做router-link-active
})

// 把路由对象暴露出去
export default router