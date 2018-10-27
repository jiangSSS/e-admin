<template>
    <div>
        <div class="title">
                管理员列表
            </div>
        <el-card>
            
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="username" label="姓名" width="180"></el-table-column>
                <el-table-column prop="phone" label="手机号" width="180"></el-table-column>
                <el-table-column prop="avatar" label="头像">
                    <template slot-scope="scope">
                        <img :src="scope.row.avatar" class="avatar">
                    </template>
                </el-table-column>
                <el-table-column prop="sex" label="性别"></el-table-column>
                <el-table-column prop="desc" label="个性签名"></el-table-column>
                <el-table-column label="操作">          
                    <template slot-scope="scope">
                        <el-button>查看</el-button>
                        <el-button type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                background 
                @current-change="pageChange"
                :page-size="5"
                small 
                layout="prev, pager, next" 
                :total="10"
                class="pagination">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tableData:[],                
                count:0,
                page:1
            }
        },
        methods:{
            getData(){
                this.$axios.get("/admin/user",{pn:this.page,size:5}).then(res=>{
                    console.log("管理员 >>",res)
                    if(res.code == 200){
                        this.count = res.data.length
                        this.tableData = res.data
                       
                    }
                })
            },
            pageChange(page){
                this.page = page
                this.getData()
            },

            handleDelete(id){           
                this.$confirm('此操作将删除该管理员, 是否继续?', '警告 ！', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let id = this.$route.query.id
                    this.$axios.post(`/admin/user/${id}`,{tableData:[id]}).then(res => {
                        this.$message.success(res.msg)
                        this.getData()
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
    .avatar{
        width: 100px;
        height: 100px;
    }
    
</style>