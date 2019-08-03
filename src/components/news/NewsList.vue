<template>
    <div>
        <ul class="mui-table-view">

            <li  v-for="item in newslist" :key="item.id" class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{ item.add_time | dataFormat }}</span>
                            <span>点击：{{ item.click }}</span>
                        </p>
                     </div>
                </router-link>
			</li>	

		</ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
    data(){
        return {
            newslist:[]
        }
    },
    created(){
        this.GetNewsList();
    },
    methods: {
        GetNewsList(){
            // vue-resource获取api数据
            // this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(res =>{
            //     if(res.body.status === 0){
            //         this.newslist = res.body.message;
            //     }else{
            //         Toast('获取新闻列表失败')
            //     }
            
            // axios获取api数据
                this.axios.get('http://www.liulongbin.top:3005/api/getnewslist').then(res =>{
                 if(res.data.status === 0){
                    this.newslist = res.data.message;
                }else{
                    Toast('获取新闻列表失败')
                }
                
            })
        }
    }
}
</script>

<style scoped>
h1{
    font-size: 14px;
}
.mui-ellipsis{
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
</style>
