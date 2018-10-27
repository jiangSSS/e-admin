<template>
        <div class="header">
            <span class="header-warp">
                党建E家后台管理系统
            </span>
            <!-- <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb> -->
            <span class="userInfo flr">
                <el-dropdown>
                    <!-- @command="handleCommand" -->
                    <span class="el-dropdown-link">
                        <i class="iconfont icon-head-active"></i>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="1">修改个人信息</el-dropdown-item>
                        <el-dropdown-item command="2">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </span>
        </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    .header {
        border-bottom: 1px solid #f1f1f1;
        overflow: hidden;
        text-align: center;
        .header-warp {
            overflow: hidden;
            text-align: center;
            font-weight: 500;
            height: 60px;
            line-height: 60px;
            font-size: 20px;
        };
        .userInfo{
            line-height: 3;
            margin-right: 30px; 
        }   
    }
</style>