<template>
    <div>
        <div class="title" v-if="!isShow">
            添加管理员
        </div>
        <div class="title" v-else>
            修改个人信息
        </div>
        <el-card>
            <el-form :label-position="right" label-width="80px" :model="formData">
                <el-form-item label="用户头像">
                    <Upload v-model="formData.avatar" class="img"></Upload>
                </el-form-item>
                <el-form-item label="身份证号">
                    <el-input v-model="formData.idcardNumber" style="width:400px"></el-input>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="formData.username" style="width:400px"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formData.password" style="width:400px"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="formData.nickname" style="width:400px"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="formData.sex">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="formData.phone" style="width:400px"></el-input>
                </el-form-item>
                <el-form-item label="个性签名">
                    <el-input type="textarea" v-model="formData.desc" style="width:400px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit" v-if="!isShow">确认添加</el-button>
                    <el-button type="primary" @click="handleChange" v-else>返回</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import Upload from "@/components/upload-avatar.vue"
    export default {
        components: {
            Upload
        },
        data() {
            return {
                formData: {
                    username: "",
                    idcardNumber: "",
                    password: "",
                    avatar: "",
                    nickname: "",
                    desc: "",
                    job: "",
                    phone: "",
                    sex: "",
                },
                right: "right",
                isShow:false
            }
        },
        methods: {
            handleSubmit() {
                this.$axios.post("/admin/user", this.formData).then(res => {
                    // console.log(res)
                    if (res.code == 200) {
                        this.$message.success(res.msg)
                        setTimeout(() => {
                            this.$router.push("userList")
                        }, 1000)
                    }
                })
            },
            getEditData(){
                this.$axios.get(`/admin/user/${this.$route.query.id}`,this.formData).then(res=>{
                    this.formData = res.data
                })
            },
            handleChange(){
                this.$axios.patch(`/admin/user/${this.$route.params}`,this.formData).then(res=>{
                    console.log("aaaaaaa",res)
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        setTimeout(()=>{
                            this.$router.push("userList")
                            console.log("ccc",res);
                            
                        },1000)
                    }
                })
            }
        },
        created(){
            if(this.$route.name == "userInfo"){
                this.isShow = true
            }else{
                this.isShow = false
            }
            if(this.isShow){
                this.getEditData()
            }
        },
        watch:{
            $route(to,from){
                if(to.name == "userInfo"){
                    this.isShow = true
                }else{
                    this.isShow = false
                    this.formData = {
                        username: "",
                        idcardNumber: "",
                        password: "",
                        avatar: "",
                        nickname: "",
                        desc: "",
                        job: "",
                        phone: "",
                        sex: "",
                    }
                }
            }
        }
    }
</script>

<style scoped>
   
</style>