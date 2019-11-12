<template>
  <div class="box">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="BallFlag" ref="ball"></div>
    </transition>

    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotulist="imglist"></swiper>
        </div>
      </div>
    </div>

    <!-- 购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ infolist.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>¥{{ infolist.market_price }}</del>&nbsp;&nbsp;
            销售价:
            <span class="now_price">¥ {{ infolist.sell_price }}</span>
          </p>
          <p></p>
          <p>
            购买数量:
            <numbox @Getcount="SelectGetCount" :max="infolist.stock_quantity"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="AddToCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号: {{ infolist.goods_no }}</p>
          <p>库存情况: {{ infolist.stock_quantity }}</p>
          <p>上架时间: {{ infolist.add_time | dataFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../subcomponents/Swiper.vue";
import numbox from "../subcomponents/Goodsinfo_numbox.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      imglist: [],
      infolist: [],
      BallFlag: false,
      selectCount: 1 //默认购物车数量为1
    };
  },
  created() {
    this.GetImg();
    this.GetGoodsInfo();
  },
  methods: {
    GetImg() {
      this.axios
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(res => {
          if (res.data.status === 0) {
            this.imglist = res.data.message;
          }
        });
    },
    GetGoodsInfo() {
      this.axios
        .get("http://www.liulongbin.top:3005/api/goods/getinfo/" + this.id)
        .then(res => {
          if (res.data.status === 0) {
            this.infolist = res.data.message[0];
          }
        });
    },
    //以下两种为编程式跳转
    goDesc(id) {
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    goComment(id) {
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    AddToCar() {
      this.BallFlag = !this.BallFlag;
      //拼接出要保存到 store 的商品信息
      var goodsinfo = {
        id: this.id,
        count: this.selectCount,
        price: this.infolist.sell_price,
        selected: true
      };
      this.$store.commit("AddToCart", goodsinfo);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      //获取小球在页面中位置
      const ballpos = this.$refs.ball.getBoundingClientRect();
      //获取徽标在页面中位置
      const badgepos = document.getElementById("badge").getBoundingClientRect();

      const xDist = badgepos.left - ballpos.left;
      const yDist = badgepos.top - ballpos.top;

      el.offsetWidth;
      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.6s cubic-bezier(1,1,.79,.95)";
      done();
    },
    afterEnter(el) {
      this.BallFlag = !this.BallFlag;
    },
    SelectGetCount(count) {
      this.selectCount = count;
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>

<style lang="scss" scoped>
.box {
  background-color: #eee;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.now_price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}

.mui-card-footer,
.mui-card-header {
  display: block;
  button {
    margin: 15px 0;
  }
}
.ball {
  background-color: red;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  top: 412px;
  left: 80px;
}
</style>
