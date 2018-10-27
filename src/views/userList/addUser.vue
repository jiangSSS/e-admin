<template>
    <div>
        <div class="title">
            添加管理员
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
                    <el-button type="primary" @click="handleSubmit">确认添加</el-button>
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
                right: "right"
            }
        },
        methods: {
            handleSubmit() {
                this.$axios.post("/admin/user", this.formData).then(res => {
                    console.log(res)
                    if (res.code == 200) {
                        this.$message.success(res.msg)
                        setTimeout(() => {
                            this.$router.push("/layout/userList")
                        }, 1000)
                    }
                })
            }
        },
    }
</script>

<style scoped>
   
</style>