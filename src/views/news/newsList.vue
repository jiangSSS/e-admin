<template>
    <div>
        <div class="title">
            新闻列表
        </div>
        <el-card>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="title" label="新闻标题"></el-table-column>
                <el-table-column prop="author.nickname" label="作者"></el-table-column>
                <el-table-column label="新闻头图">
                    <template slot-scope="scope">
                        <img :src="scope.row.img" class="img">
                    </template>
                </el-table-column>
                <el-table-column prop="category.title" label="分类"></el-table-column>
                <el-table-column label="操作">          
                    <template slot-scope="scope">
                        <el-button @click="handleDetail(scope.row._id)">查看</el-button> 
                        <el-button type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tableData:[]
            }
        },
        methods:{
            getData(){
                this.$axios.get("/admin/news",this.tableData).then(res=>{
                    console.log(res)
                    this.tableData = res.data                  
                })
            },
            handleDetail(id){
               this.$router.push({path:"newsDetail",query:{id}}).then(res=>{
                   
               })
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped>
   
    .img{
        width: 80px;
        height: 80px;
    }
</style>