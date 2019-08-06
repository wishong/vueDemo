<template>

  <div class="box">
    <!-- header区域 -->
    <mt-header fixed title="测试">
      <span slot="left" @click="goback" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- router-view区域 -->

    <transition>
      <router-view></router-view>
    </transition>

    <!-- tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
      <router-link class="mui-tab-item-llb" to="/goodslist">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">商品</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{ $store.getters.getnum }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
      	<router-link class="mui-tab-item-llb" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">个人中心</span>
			</router-link>
		</nav>

  </div>

</template>

<script>
export default{
  data(){
    return {
      flag: false
    }
  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  },
  created(){
    this.flag = this.$route.path === "/home" ? false : true ;
  },
  watch:{
    '$route.path': function(newVal){
        if(newVal === "/home"){
          this.flag = false;
        }else
          this.flag = true;
    }
  }
}
</script>


<style scoped>
.box{
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
.mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

.mint-header{
  z-index: 99;
}
</style>
