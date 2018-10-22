<template>
    <div>
        <div class="side-bar">
            <el-menu class="el-menu" :router="true" background-color="#545c64" text-color="#fff">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <!-- <i class="el-icon-setting"></i>  -->
                        <span>用户管理</span>
                    </template>                   
                     <el-menu-item-group title="用户管理">
                        <el-menu-item index="/userList">管理员列表</el-menu-item>
                        <el-menu-item index="/userInfo">管理员管理</el-menu-item>
                    </el-menu-item-group>                                
                </el-submenu>
                <el-submenu index="2">  
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>轮播图管理</span>
                    </template>
                    <el-menu-item-group title="管理员管理">
                        <el-menu-item index="/layout/addAdmin">添加管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>新闻管理</span>
                    </template>
                    <el-menu-item-group title="分类管理">
                        <el-menu-item index="/newsList">新闻列表</el-menu-item>
                        <el-menu-item index="/addNews">添加新闻</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-setting"></i> 
                        <span>登录</span>
                    </template>                   
                     <el-menu-item-group title="用户管理">
                        <el-menu-item index="/login">登录页</el-menu-item>
                        <el-menu-item index="/">首页</el-menu-item>
                    </el-menu-item-group>                                
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    .side-bar {
        min-height: 100vh;
        background: #545c64;
    }
    /deep/ el-menu-item{
        width: 40px;
        text-align: center;
        padding: 0;margin: 0;
    }
</style>
