<template>
    <div class="photoinfo">
        <h3>{{ info.title }}</h3>
        <p class="subtitle">
            <span>发表时间:{{ info.add_time | dataFormat }}</span>
            <span>点击:{{ info.click }}次</span>
        </p>
        <hr>

        <!-- 缩略图 -->
        <div class="thumbs">
            <!-- <img class="preview-img" v-for="(item,index) in list" :src="item.src"
        height="100" :key="item.src" @click="$preview.open(index, list)"> -->

        <!-- 插件更新 上面写法用了会报错! -->

            <vue-preview :slides="list" ></vue-preview>
        </div>


        <!-- 内容区域 -->
        <div class="content" v-html="info.content"></div>

        <!-- 评论子组件 -->
        <comment :id=id></comment>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return {
            id: this.$route.params.id, //获取id
            info: [],
            list: [] //缩略图数组
        }
    },
    created(){
        this.GetInfo();
        this.GetPhoto();
    },
    methods: {
        GetInfo(){
            this.axios.get('http://www.liulongbin.top:3005/api/getimageInfo/' + this.id).then(res => {
                if(res.data.status === 0){
                    this.info = res.data.message[0]
                }
            })
        },
        GetPhoto(){
            this.axios.get('http://www.liulongbin.top:3005/api/getthumimages/' + this.id).then(res => {
                if(res.data.status === 0){
                    //循环每个图片数据 补全图片的宽和高 (官方要求的定义)
                    res.data.message.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                        item.msrc = item.src;
                    });
                    this.list = res.data.message;
                }
            })
        }
    },
    components:{
        comment
    }
}
</script>

<style lang="scss" scoped>
.photoinfo{
    padding: 5px;
    h3{
        color: #26a2ff;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 15   px;
    }
    .content{
        font-size: 15px;
        line-height: 30px;
    }
}
.thumbs {
    //使用 scoped 后 父组件的样式将不会渗透到子组件中 
    //deep 深度选择器来解决这个问题
    /deep/ .my-gallery{   
        display: flex;
        flex-wrap:wrap;//默认换行
        figure{
            width: 30%;
            margin: 5px;
            img{
                width: 100%;
                box-shadow: 0 0 px #999;
                border-radius: 5px;
            }
        }
    }
}
</style>

