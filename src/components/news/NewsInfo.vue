<template>
  <div class="newsinfo">
    <h3 class="title">{{ newsinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间:{{ newsinfo.add_time | dataFormat}}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr />
    <div class="content" v-html="newsinfo.content"></div>
    <!-- 评论子组件 -->
    <comment :id="this.id"></comment>
  </div>
</template>

<script>
//导入评论子组件
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id, //将url中传来的id挂载到data上
      newsinfo: [] //新闻对象
    };
  },
  created() {
    this.GetNewsInfo();
  },
  methods: {
    GetNewsInfo() {
      this.axios
        .get("http://www.liulongbin.top:3005/api/getnew/" + this.id)
        .then(res => {
          if (res.state === 4 && res.status === 200) {
            this.newsinfo = res.data.message[0];
          } else {
            Toast("获取新闻列表失败");
          }
        });
    }
  },
  components: {
    // "comment" : comment
    comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfo {
  padding: 5px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>

