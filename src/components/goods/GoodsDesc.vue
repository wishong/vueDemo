<template>
    <div class="box">
        <h3>{{ info.title }}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            info:[],
            id: this.$route.params.id
        }
    },
    created(){
        this.GetDesc();
    },
    methods: {
        GetDesc(){
            this.axios.get('http://www.liulongbin.top:3005/api/goods/getdesc/' + this.id).then(res => {
                if(res.data.status === 0){
                    this.info = res.data.message[0];
                }
            })
        }
    }
}
</script>   

<style lang="scss" scoped>
.box{
    margin: 0;
    padding: 5px;
    h3{
        font-size: 15px;
        color: #226aff;
        text-align: center;
        margin: 15px 0; 
    }
    /deep/ .content{
        img{
            width: 100%;
        }
    }
}

</style>


