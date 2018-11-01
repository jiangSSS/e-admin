<template>
    <div class="container">
        <h2 class="title">党建E家后台管理系统</h2>
        <div class="login-box">
            <!-- <h2 class="login-box-title">请登录</h2> -->
            <el-form class="form" :model="formData">
                <!-- :rules="rule" -->
                
                <el-form-item label="用户名">
                    <el-input v-model="formData.username" type="username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formData.password" type="password" placeholder="请输入密码" @keyup.enter.native="handleLogin"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="handleLogin" type="primary" class="login-btn" :loading="isLoading">
                登录
            </el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    username: "",
                    password: ""
                },
                isLoading: false,
            }
        },
        methods: {
            handleLogin() {
                this.isLoading = true
                this.$axios.post("/admin/user/login",this.formData).then(res => {
                    console.log(res)
                    if (res.code == 200) {
                        // this.$store.commit("CHANGE_USERINFO",res.data)                                    
                        this.$message.success("登录成功")
                        setTimeout(() => {
                            this.$router.push("/home")
                        }, 1000)
                    } else {
                        this.$message.error(res.msg)
                    }
                    this.isLoading = false
                }).catch(err => {
                    this.isLoading = false
                })
            },
        }
    };
</script>

<style  scoped lang="scss">
    .container {
        overflow: hidden;
        min-height: 100vh;
        background: #304165;

        .title {
            margin-top: 150px;
            text-align: center;
            font-weight: bold;
            color: #fff;
            font-weight: 400;
        }

        .login-box {
            margin: 10px auto;
            width: 380px;
            height: 300px;
            border: 1px solid #e8e8e8;
            border-radius: 8px;
            background: #fff;
            padding: 40px;
            .login-box-title {
                color: #333;
                text-align: center;
                font-weight: 500;
            }
            .form {
                margin-top: 20px;
            }
            .login-btn {
                width: 100%;
                height: 36px;
                margin-top: 30px;
                box-sizing: border-box
            }
        }
    }
</style>