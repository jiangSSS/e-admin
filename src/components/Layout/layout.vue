<template>
    <div class="layout">
        <el-row>
            <el-col :span="4" class="fll">
                <SideBar></SideBar>
            </el-col>
            <el-col :span="20">
                <div>
                     <Header></Header>
                    <div class="main-content">
                        <router-view></router-view>
                    </div>
                </div>            
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Header from "@/components/Header/Header.vue"
    import SideBar from "@/components/Side-bar/side-bar.vue"
    export default {
        components:{
            Header,
            SideBar
        },
        data() {
            return{
                // userInfo:{
                //     avatar:""
                // }              
            };
        },
        methods: {
            handleCommand(command) {
                let click = command
                if (click == 1) {
                    this.$router.push('/layout/usersInfo')
                } else if (click == 2) {
                    this.$axios.get('logout').then(res => {
                        if (res.code == 200) {
                            this.$store.commit('SET_INFO', null)
                            this.$router.push('/login')
                        }
                    })
                }
            }
        },
        // computed:{
        //     ...mapState(['userInfo'])
        // },
    };
</script>

<style scoped>
    .main-content {
        padding: 15px;
    }
</style>
