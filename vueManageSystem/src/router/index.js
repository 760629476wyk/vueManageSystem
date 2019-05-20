// 引入组件
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login.vue'
import userList from '@/view/user/list.vue'
// 注册路由
Vue.use(Router)
// 导出路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //登陆页面的路由
    {
      path: '/login',
      name: 'login',
      component: login
    },
    //user列表的路由
    {
      path: '/user/list',
      name: 'userList',
      component: userList
    },

  ]
})
