<template>
    <div>
        <div class="side-bar">
            <el-menu class="el-menu" :router="true" background-color="#304156" text-color="#fff">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <!-- <i class="el-icon-setting"></i>  -->
                        <span>用户管理</span>
                    </template>                   
                     <el-menu-item-group title="用户">
                        <el-menu-item index="/layout/userList">管理员列表</el-menu-item>
                        <el-menu-item index="/layout/addUser">添加管理员</el-menu-item>
                    </el-menu-item-group>                                
                </el-submenu>
                <el-submenu index="2">  
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>轮播图管理</span>
                    </template>
                    <el-menu-item-group title="轮播图">
                        <el-menu-item index="/layout/swiper">轮播图管理</el-menu-item>
                        <el-menu-item index="/layout/addSwiper">添加轮播图</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>新闻管理</span>
                    </template>
                    <el-menu-item-group title="新闻">
                        <el-menu-item index="/layout/newsList">新闻列表</el-menu-item>
                        <el-menu-item index="/layout/addNews">添加新闻</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/">
                    <template slot="title">
                        <i class="el-icon-setting"></i> 
                        <span>登录</span>
                    </template>                                             
                </el-menu-item>
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
        background: #304156;
    }
    el-submenu el-menu-item{
        min-width: 40px;
        text-align: center;
        padding: 0;margin: 0;
    }
    .el-menu{
        border-right: none;
    }
</style>
