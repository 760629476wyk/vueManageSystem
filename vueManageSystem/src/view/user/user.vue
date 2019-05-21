<template>
  <div class="user">
    <el-container class="container">
      <!--左侧导航-->
      <el-aside class="aside" width="200px">
        <el-menu :default-openeds="['/user/home']" default-active="/user/home" router background-color="#545c64" text-color="#fff">
          <el-menu-item index="/user/home" class="header-text">
            <i class="el-icon-s-home"></i>
            管理系统
          </el-menu-item>
          <el-submenu index="/user/home">
            <template slot="title"><i class="el-icon-user"></i>账号管理</template>
            <el-menu-item index="/user/list">用户列表</el-menu-item>
            <el-menu-item index="/user/add">添加用户</el-menu-item>
            <el-menu-item index="/user/passwordEdit">修改密码</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--右侧内容-->
      <el-container>
        <!--标题栏-->
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px;margin-top:25px;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{username}}</span>
        </el-header>
        <!--路由组件栏-->
        <el-main>
          <router-view>
          </router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import {} from '@api';
  import {mapState} from "vuex"
  export default {
    computed: {
      //将state里面的数据当作计算属性获取到当前组件
      ...mapState({username: state => state.userInfo.username})
    },
    name: 'user',
    data() {
      return {
      }
    },
    methods: {}
  }
</script>
<style>
  html, body {
    padding: 0;
    margin: 0;
  }

  html, body, #app, .user {
    height: 100%;
  }

  .container {
    height: 100%;
    border: 1px solid #eee
  }

  .el-menu {
    border-right: 0;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    font-size: 20px !important;
  }

  .el-aside {
    background-color: #545c64;
  }

  .header-text {
    background-color: black;
    color: #ffffff;
    font-weight: bold;
  }
</style>
