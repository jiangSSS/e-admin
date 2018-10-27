<template>
    <div>
        <div class="title">
            新闻详情
        </div>
        <el-card>
            <div :data="newsDetail">
                <div>{{newsDetail.img}}</div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                newsDetail:[]
            }
        },
        methods:{
            getData(){
                this.$axios.get(`/admin/news/${this.$route.query.id}`).then(res=>{
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

</style>