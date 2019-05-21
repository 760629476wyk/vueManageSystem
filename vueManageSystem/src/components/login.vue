<template>
  <div class="login">
    <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-form">
      <div class="title"><i class="el-icon-s-home"></i>登陆</div>

      <el-form-item label="用户" prop="username">
        <el-input type="username" v-model="form.username" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="form.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="cancelForm('form')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {checkLogin} from '@api';

  export default {
    name: 'login',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          username: 'admin',
          password: '123456',
          checkPass: '123456',
        },
        rules: {
          password: [
            {required: true, message: '请输入密码...', trigger: ['blur', 'change']},
            {validator: validatePass, trigger: ['blur', 'change']},
            {min: 5, max: 18, message: '长度5-18个数字或字符'}
          ],
          checkPass: [
            {required: true, message: '请输入确认密码...', trigger: ['blur', 'change']},
            {validator: validatePass2, trigger: ['blur', 'change']}
          ],
          username: [
            {required: true, message: '请输入用户名...', trigger: ['blur', 'change']},
            {min: 5, max: 18, message: '长度5-18个数字或字符'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        var _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var para = {username: this.form.username, password: this.form.password}
            checkLogin(para).then(res => {
              this.$message({
                type: 'success',
                message: '登陆成功！'
              })
              //将用户信息放到本地存储里面去
              localStorage.setItem('userInfo',JSON.stringify(res[0]));
              //将本地存储的用户信息放到变量，存入state
              var userInfo = JSON.parse(localStorage.getItem('userInfo'))
              //将用户信息放到state里面去

              _this.$store.commit('SAVE_USERINFO',userInfo)
              _this.$router.push('/user/home')
            }, err => {
              this.$message({
                type: 'error',
                message: '登陆失败！'
              })
            })
          } else {
            return false;
          }
        });
      },
      cancelForm(formName) {
        this.$router.push('/')
      }
    }
  }
</script>
<style>
  html, body {
    margin: 0px;
    padding: 0px;
  }

  html, body, #app, .login {
    height: 100%;
  }

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-form {
    width: 400px;
    border: 1px solid #c0c0c0;
    border-radius: 4px;
    padding: 20px 45px 10px 10px;
  }

  .el-form .title {
    font-size: 30px;
    font-weight: bold;
    color: #333;
    padding: 20px 0px 20px 20px;
  }
</style>
