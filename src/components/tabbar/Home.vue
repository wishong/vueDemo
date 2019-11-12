<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../images/swipe/1.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="../../images/swipe/2.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="../../images/swipe/3.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="../../images/swipe/4.jpg"></mt-swipe-item>
        </mt-swipe>
        <!-- 六宫格 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/newslist">
                    <img src="../../images/menu/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/photolist">
                    <img src="../../images/menu/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
                <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/goodslist">
                    <img src="../../images/menu/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li><br>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                    <img src="../../images/menu/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                    <img src="../../images/menu/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li> -->
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/aboutus">
                    <img src="../../images/menu/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul> 
		</div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
    }
}
</script>

<style>
.mint-swipe{
    height: 350px;
}
img{
    width: 100%;
    height: 100%;
}
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    margin: 60px 10px 20px 30px;
    padding: 0;
    border:none;
}
li img{
    width: 80px;
    height: 80px;
}
</style>

