<template>
  <div class="box">
    <div class="self">
      <img src="../../images/self/self.jpg" alt />
      <p class="name">wish</p>
      <div class="code">
        <img src="../../images/self/wechatcode.jpg" alt />
      </div>
    </div>

    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">账号与安全</a>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">新消息通知</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">隐私</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">通用</a>
      </li>
    </ul>
    <div class="mui-table-view">
      <li class="mui-table-view-cell" style="text-align: center;">
        <a>退出登录</a>
      </li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  padding: 0;
}
.self {
  background-color: #fff;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.name {
  font-size: 25px;
  color: #000;
  margin-top: 30px;
  margin-left: 30px;
  vertical-align: middle;
}
.code {
  position: absolute;
  right: 0;
  padding: 15px;
}
.code img {
  width: 60px;
  height: 60px;
  border-radius: 0;
}
.mui-table-view {
  margin-bottom: 25px;
}
</style>

