<template>
  <div>
    <el-form class="form">
      <el-form-item label="用户名">
        <el-input v-model="user"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="success" @click="login()">登录验证</el-button>
    <el-button type="warning" @click="backHome()">返回</el-button>
  </div>
</template>

<script>
  import { checkLogin } from '@api'
  export default {
    name: 'test',
    data () {
      return {
        user:'admin',
        password:'123456'
      }
    },
    methods: {
      //调取登陆接口
      login(){
        var params = {
          user: this.user,
          password: this.password
        }
        checkLogin(params).then(res=> {
          this.$message({
            type:'success',
            message:'登陆成功！'
          })
        },err => {
          this.$message({
            type:err.response.data.err,
            message:'登陆失败！'
          })
        })
      },
      //修改路由
      backHome(){
        this.$router.push('/')
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form{
    width: 50%;
  }
</style>
