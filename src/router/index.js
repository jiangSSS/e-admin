import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: ()=>import("@/components/Layout/layout.vue"),
      meta:{
        title:"首页"
      },
      children:[
        {
          path: 'userList',
          name: 'userList',
          component: ()=>import("@/views/userList/userList.vue"),
          meta:{
            title:"管理员列表"
          }
        },
        {
          path: 'userInfo',
          name: 'userInfo',
          component: ()=>import("@/views/userList/userInfo.vue"),
          meta:{
            title:"管理员管理"
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
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import("@/views/Login/login.vue"),
      meta:{
        title:"登录页"
      }
    },

  ]
})
