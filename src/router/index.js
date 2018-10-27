import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import("@/views/Login/login.vue"),
      meta:{
        title:"登录页"
      }
    },
    {
      path: '/layout',
      name: 'layout',
      component: ()=>import("@/views/Layout/layout.vue"),
      redirect:"/layout/home",
      children:[
        {
          path: '/home',
          name: 'home',
          component: ()=>import("@/views/Home/home.vue"),
          meta:{
            title:"首页"
          }
        },
        {
          path: 'userList',
          name: 'userList',
          component: ()=>import("@/views/userList/userList.vue"),
          meta:{
            title:"管理员列表"
          }
        },
        {
          path: 'addUser',
          name: 'addUser',
          component: ()=>import("@/views/userList/addUser.vue"),
          meta:{
            title:"添加管理员"
          }
        },
        {
          path: 'newsList',
          name: 'newsList',
          component: ()=>import("@/views/news/newsList.vue"),
          meta:{
            title:"新闻列表"
          }
        },
        {
          path: 'addNews',
          name: 'addNews',
          component: ()=>import("@/views/news/addNews.vue"),
          meta:{
            title:"添加新闻"
          }
        },
        {
          path: 'newsDetail',
          name: 'newsDetail',
          component: ()=>import("@/views/news/newsDetail.vue"),
          meta:{
            title:"新闻详情"
          }
        },
        {
          path: 'addSwiper',
          name: 'addSwiper',
          component: ()=>import("@/views/swiper/addSwiper.vue"),
          meta:{
            title:"添加轮播图"
          }
        },
        {
          path: 'editSwiper',
          name: 'editSwiper',
          component: ()=>import("@/views/swiper/addSwiper.vue"),
          meta:{
            title:"编辑轮播图"
          }
        },
        {
          path: 'swiper',
          name: 'swiper',
          component: ()=>import("@/views/swiper/swiper.vue"),
          meta:{
            title:"轮播图"
          }
        },
      ]
    },
    

  ]
})
