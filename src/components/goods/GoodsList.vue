<template>
    <div class="goods-list">
        <router-link class="goods-item" v-for="item in goodslist" 
        :key="item.id" :to="'/goodslist/goodsinfo/' + item.id" tag="div">
            <img :src="item.img_url" alt="图片加载不出来!">
            <h1 class="item-title">{{ item.title }}</h1>
            <div class="info">
                <p class="pric">
                    <span class="now">¥ {{ item.sell_price }}</span>
                    <span class="old">¥ {{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link>
        <mt-button type="danger" size="large" @click="GetMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui"

export default {
    data(){
        return{
            pageindex: '1',
            goodslist: []
        }
    },
    created(){
        this.GetGoodsList();
    },
    methods: {
        GetGoodsList(){
            this.axios.get('http://www.liulongbin.top:3005/api/getgoods?pageindex=' + this.pageindex).then(res => {
                if(res.data.status === 0){
                    this.goodslist = this.goodslist.concat(res.data.message);
                    if(this.goodslist.length === this.goodslist.concat(res.data.message).length)
                    Toast({
                        message: "已经是最后一页了!",
                        position: "middle",
                        duration: 1000
                    })
                }
            })
        },
        GetMore(){
            this.pageindex++;
            this.GetGoodsList();
            
        }
    }
}
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
}
.goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px #ccc;
    border-radius: 5px;
    margin: 5px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 400px;
    img{
        width: 100%;
        max-height: 300px;
    }
    .item-title{
        font-size: 13px;
    }
}
p{
    margin: 0;
    padding: 5px;
}
.now {
    color: red;
    font-size: 16px;
}
.old{
    text-decoration: line-through;
    font-size: 14px;
    margin-left: 15px;
}
.info{
    background-color: #eee;
}
.sell{
    display: flex;
    justify-content: space-between;
}
</style>
