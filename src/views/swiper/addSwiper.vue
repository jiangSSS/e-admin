<template>
    <div>
        <div class="title" v-if="!isShow">
            添加轮播图
        </div>
        <div class="title" v-else>
            编辑轮播图
        </div>
        <el-card>
            <el-form :model="formData" label-width="80px">
                <el-form-item label="轮播图" required>
                    <Upload v-model="formData.img"></Upload>
                </el-form-item>
                <el-form-item label="标题" required>
                    <el-input v-model="formData.title" style="width:500px"></el-input>
                </el-form-item>
                <el-form-item label="新闻" required>
                    <el-select v-model="formData.newsId">
                        <el-option 
                            v-for="(item,index) in news"
                            :key="index"
                            :value="item._id"
                            :label="item.title">                           
                        </el-option>
                    </el-select>
                </el-form-item>
                 <el-form-item label="优先级">
                    <el-input-number v-model="formData.sort" :min="1" :step="1"></el-input-number>
                </el-form-item>
                <el-form-item label="是否显示">
                    <el-switch
                        v-model="formData.status"
                        :active-value="1"
                        :inactive-value="0"
                        active-text="显示"
                        inactive-text="不显示">
                    </el-switch>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit" v-if="!isShow">提交</el-button>
                    <el-button type="primary" @click="handleSave" v-else>保存</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import Upload from "@/components/upload-avatar.vue"
    export default {
        components:{
            Upload
        },
        data(){
            return{
                formData:{
                    title:"",
                    img:"",
                    newsId:"",
                    status:"",
                    sort:""
                },
                news:[],
                isShow:false
            }
        },
        methods:{
            getNews(){
                this.$axios.get("/admin/news").then(res=>{  
                    console.log(res)               
                    this.news = res.data                 
                })
            },
            getEditData(){
                this.$axios.get(`/admin/swiper/${this.$route.query.id}`).then(res=>{
                    this.formData = res.data
                })
            },
            handleSubmit(){
                this.$axios.post("/admin/swiper",this.formData).then(res=>{
                    console.log(res)
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        setTimeout(()=>{
                            this.$router.push("swiper")
                        },1000)
                    }
                })
            },
            handleSave(){
                this.$axios.post("/admin/swiper")
            }
        },  
        created(){
            if(this.$route.name == "editSwiper"){
                    this.isShow = true
                }else{
                    this.isShow = false
                }
            this.getNews()
            if(this.isShow){
                this.getEditData()
            }
            
        },
        watch:{
            $route(to,from){
                if(to.name == "editSwiper"){
                    this.isShow = true
                }else{
                    this.isShow = false
                    this.formData = {
                        title:"",
                        img:"",
                        newsId:"",
                        status:"",
                        sort:""
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>