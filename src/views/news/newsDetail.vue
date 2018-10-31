<template>
    <div>
        <div class="news-warp">
            新闻详情
        </div>
        <el-card>
            <div>
                <div v-text="newsDetail.img"></div>          
                <div v-text="newsDetail.createdTime"></div>
                <div v-text="newsDetail.title"></div>          
                <div v-text="newsDetail.author "></div>          
                <div v-text="newsDetail.category.title"></div>          
            </div>
            <div v-html="newsDetail.content"></div>
        </el-card>
        <el-button type="primary" @click="$router.back()" class="back">返回</el-button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                newsDetail:{}
            }
        },
        methods:{
            getData(){
                this.$axios.get(`/admin/news/${this.$route.query.id}`,this.newsDetail).then(res=>{
                    console.log("详情 >>",res)
                    if(res.code == 200){
                        this.newsDetail = res.data
                    }
                })
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped>
    .news-warp{
        margin: 20px;
        font-size: 20px;
        font-weight: 600;
        color: #888;
    }
    .back{
        margin-top:80px;
        position: relative;
        left: 50%;

    }
</style>