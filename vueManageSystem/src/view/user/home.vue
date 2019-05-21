<template>
  <section>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户信息</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="text item">
        用户名称：{{userInfo.username}}
      </div>
      <div class="text item">
        用户密码：{{userInfo.password}}
      </div>
      <div class="text item">
        真实姓名：{{userInfo.realname}}
      </div>
      <div class="text item">
        证件号码：{{userInfo.idType}}
      </div>
    </el-card>
  </section>
</template>

<script>
import {mapState} from 'Vuex'
  export default {
    name:'home',
    computed:{
      ...mapState({
        userInfo: state => state.userInfo
      })

    },
    data() {
      return {
      }
    },
    method:{
      edit(){

      }
    },
    mounted(){

    }
  }

</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

</style>
