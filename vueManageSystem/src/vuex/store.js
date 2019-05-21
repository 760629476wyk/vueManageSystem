//引入组件
import Vue from "vue"
import Vuex from 'vuex'
import {getUserList} from '@api'
//注册vuex
Vue.use(Vuex)
//状态
const state = {
  //根据本地存储的值更新用户信息state
  userInfo: JSON.parse(localStorage.getItem('userInfo')),
  // 用户列表
  userList:[]
}

const mutations = {
  //保存用户信息
  SAVE_USERINFO(state, userInfo) {
    //将用户信息存入本地存储
    localStorage.setItem('userInfo',JSON.stringify(userInfo))
    state.userInfo = userInfo
    //打印数据
    console.log(state.userInfo)
  },
  // 获取用户列表的方法
  GET_USERLIST(state, userList){
    state.userList = userList;
  }
}

const actions = {
  GET_USERLIST({commit}){
    return new Promise((resolve, reject) => {
      getUserList().then(res => {
        commit('GET_USERLIST', res);
        resolve();
      })
    })
  }
}
//创建仓库 暴露出去
export default new Vuex.Store({
  state,
  mutations,
  actions
})
