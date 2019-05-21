// 引入组件
import Vue from 'vue'
import Router from 'vue-router'
//异步懒加载
const HelloWorld = () => import("@/components/HelloWorld")
const login = () => import('@/components/login')
const user = () => import('@/view/user/user')
const userList = () => import('@/view/user/list')
const userAdd = () => import('@/view/user/add')
const passwordEdit = () => import('@/view/user/passwordEdit')
const home = () => import('@/view/user/home')
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
      path: '/user',
      name: 'user',
      component: user,
      children:[{
        path: '/user/list',
        name: 'userList',
        component: userList
      },
      {
        path: '/user/home',
        name: 'home',
        component: home
      },
      {
      path: '/user/add',
      name: 'userAdd',
      component: userAdd,
      },
      {
      path: '/user/passwordEdit',
      name: 'passwordEdit',
      component: passwordEdit,
      }]
    },

  ]
})
