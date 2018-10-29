<template>
    <div>
        <div class="title">
            轮播图列表
        </div>
        <el-card>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column label="轮播图">
                    <template slot-scope="scope">
                        <img :src="scope.row.img" class="img">
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="轮播图标题"></el-table-column>
                <el-table-column prop="newsId.title" label="新闻标题"></el-table-column>             
                <el-table-column prop="sort" label="排序"></el-table-column>
                <el-table-column prop="status" label="是否显示"></el-table-column>
                <el-table-column label="操作">          
                    <template slot-scope="scope">
                        <el-button @click="handleEdit(scope.row._id)">编辑</el-button> 
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
                this.$axios.get("/admin/swiper",this.tableData).then(res=>{
                    console.log("轮播图 >>",res);           
                    if(res.code == 200){
                        this.tableData = res.data
                    }
                })
            },
            handleEdit(id){
                this.$router.push({path:"editSwiper",query:{id}})
            },
            handleDelete(id){             
                this.$confirm('此操作将删除该轮播图, 是否继续?', '警告 ！', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post(`/admin/swiper/${id}`).then(res=>{
                        console.log(res,"删除轮播图")
                        if(res.code == 200){
                            this.$message.success("删除成功 ！") 
                            this.getData()  
                        }                                            
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });                
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