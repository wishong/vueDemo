<template>
    <div class="cmt-container">  
        <h3>发表评论</h3>
        <hr>
        <textarea rows="4" placeholder="请输入要评论的内容" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="PostComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for=" (item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{ i+1 }}楼 &nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;
                    发表时间:{{ item.add_time | dataFormat }}
                    </div>
                    <div class="cmt-body">
                        {{ item.content === '' ? '此用户很懒什么都没留下' : item.content}}
                    </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="GetMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
    data(){
        return {
            pageIndex: 1,
            comments:[],
            msg: ''
        }
    },
    created(){
        this.GetComments()
    },
    methods:{
        GetComments(){
            this.axios.get('http://www.liulongbin.top:3005/api/getcomments/'+ this.id +'?pageindex=' + this.pageIndex).then(res => {
                if(res.data.status === 0) {
                    this.comments = this.comments.concat(res.data.message)
                }else{
                    Toast('获取评论失败')
                }
            })
        },
        GetMore(){
            this.pageIndex++;
            this.GetComments();
        },
        PostComment(){
            this.axios.post('http://www.liulongbin.top:3005/api/postcomment/' + this.$route.params.id,{
                user_name: '匿名用户', 
                add_time: Date.now(), 
                content: this.msg.trim()
            }).then(res =>{
                if(res.data.status === 0){
                    var cmt = {
                         user_name: '匿名用户', 
                         add_time: Date.now(), 
                         content: this.msg.trim()
                          }
                    this.comments.unshift(cmt)
                    this.msg=''
                }
            })
        }
    },
    props: ["id"]
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
}
.cmt-item{
    font-size: 13px;
}
.cmt-title{
    line-height: 30px;
    background-color: #ccc;
}
.cmt-body{
    line-height: 35px;
    text-indent: 2em;
}
.cmt-list{
    margin: 10px 0;
}
</style>
