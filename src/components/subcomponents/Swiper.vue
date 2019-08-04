<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
                <img :src="item.src" alt="加载失败了!">
                </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:["lunbotulist"]
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    text-align: center;
}
img{
    height: 100%;
}
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    margin: 30px 10px 20px 20px;
    padding: 0;
    border:none;
}
li img{
    width: 70px;
    height: 70px;
}
</style>
