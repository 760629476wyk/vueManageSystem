<template>
  <div class="userVip">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="vip用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="realname"
        label="真实姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="idType"
        label="证件号">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="edit(scope.$index, tableData)"
            type="text"
            size="small">
            修改
          </el-button>
          <el-button
            @click.native.prevent="delete(scope.$index, tableData)"
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {} from '@api';
  import {mapState, mapActions, mapGetters} from 'vuex';

  export default {
    name: 'userVip',
    computed:{
      ...mapGetters(['vipUsers']),
      ...mapState({userLsit: state => state.userList})
    },
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      //将同名的GET_USERLIST方法与store里面的关联在一起
      ...mapActions(['GET_USERLIST']),
      edit(index, data){
        //修改用户信息
      },
      delete(index, data){
        //删除此条数据
      }
    },
    created(){
        this.tableData = this.vipUsers
    },
    mounted() {

    }
  }
</script>
<style>
  html, body {
    padding: 0;
    margin: 0;
  }
  html, body, #app, .userVip {
    height: 100%;
  }

</style>
