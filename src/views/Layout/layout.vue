<template>
    <div class="layout">
        <el-row>
            <el-col :span="4" class="fll" style="height:100vh">
                <SideBar></SideBar>
            </el-col>
            <el-col :span="20" style="height:100vh;overflow:scroll">
                <div>
                    <Header></Header>
                    <AppMain></AppMain>
                </div>            
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Header from "@/components/Header/Header.vue"
    import SideBar from "@/components/Side-bar/side-bar.vue"
    import AppMain from "@/components/appMain/appMain.vue"
    export default {
        components:{
            Header,
            SideBar,
            AppMain
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
