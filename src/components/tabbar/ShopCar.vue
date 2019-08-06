<template>
  <div class="box">
    <div class="goods-list">
      <!-- 列表区 -->
      <div class="mui-card" v-for="(item,i) in list" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
              <mt-switch
              v-model="$store.getters.getGoodsSelected[item.id]"
              @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"
              ></mt-switch>
              <img :src="item.thumb_path" alt="图片加载失败！">
              <div class="info">
                  <h1>{{ item.title }}</h1>
                  <p>
                      <span class="price">￥ {{ item.sell_price }}</span>
                      <numbox :initcount="$store.getters.getcount[item.id]"
                      :goodsid="item.id"></numbox>
                      <!-- 创建一个空对象 循环遍历 key为id value为count -->
                      <a href="#" @click.prevent="del(item.id,i)">删除</a>
                  </p>
              </div>
          </div>
        </div>
      </div>

      <!-- 结算区 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner" jiesuan>
              <div class="left">
                  <p>总计不含运费</p>
                  <p>已经勾选商品 <span class="red">
                      {{ $store.getters.getGoodsCountAndAmount.count }}</span>件，
                      总计 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span>元</p>
              </div>
           <mt-button type="danger" >结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from '../subcomponents/ShopCart_numbox.vue'

export default {
    data(){
        return {
            list: []
        }
    },
    created(){
        this.GetList();
    },
    methods: {
        GetList(){ 
            var idArr = [];
            this.$store.state.cart.forEach(item => idArr.push(item.id));
            if(idArr.length <= 0){
                return;
            }
            this.axios.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/' 
            + idArr.join(',') ).then(res => {
                if(res.data.status === 0){
                    this.list = res.data.message
                }
            })
        },
        del(id,index){ //删除商品 
            this.list.splice(index,1);
            this.$store.commit("remove",id)
        },
        selectedChanged(id,val){ //按钮
            this.$store.commit("Selected",{ id,selected:val })
        }
    },
    components: {
        numbox
    }
};
</script>

<style scoped>
.box{
    background-color: #eee;
    padding: 0;
}
img{
    width: 70px;
    height: 70px;
    margin: 0 15px;
}
h1{
    font-size: 15px;
}
.price{
    color: red;
    font-weight: bold;
    font-size: 20px;    
}
.box .mui-card-content-inner{
    display: flex;
    align-items: center;
}
p{
    width: 300px;
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
}
.price{
    margin-top: 5px;
}
a{
    margin-top: 5px;
    font-size: 20px; 
}
.jiesuan{
    display: flex;
    justify-content: space-between;
    align-content: center;
}
.red{
    color: red;
    font-weight: bold;
}
.left{
    margin-right: 80px;
}
</style>

