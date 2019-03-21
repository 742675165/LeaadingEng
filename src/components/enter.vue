<template>
  <div class="outer_label">
  <div class="login_form">
    <el-input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="userName" />
    <el-input type="password"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password" />
    <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</el-button>
    <div style="margin-top: 5px">
      <span style="color: #000099;float:left" @click="login">忘记密码？</span><span style="float: right;color: #000099;">新用户注册</span>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'enter',
    data() {
      return {
        userName: '',
        password: '',
        isBtnLoading: false
      }
    },
    created () {
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
        this.userName = JSON.parse( localStorage.getItem('user')).userName;
        this.password = JSON.parse( localStorage.getItem('user')).password;
      }
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      login() {
        if (!this.userName) {
          this.$message.error('请输入用户名');
          return;
        }
        if (!this.password) {
          this.$message.error('请输入密码');
          return;
        }
        // localhost:8081/login.do
        // result code =0
        this.$router.push({path:'homes'})

        //code !=0
      }
    }
  }
</script>

<style scoped>
  .login_form {
    padding-top: 10%;
    padding-left: 5%;
    padding-right: 5%;
  }
  .qxs-ic_user {

    background-size: 13px 15px;
    background-position: 3%;
  }

  .qxs-ic_password {
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 10px;
  }

  .login_btn {
    width: 100%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #000099, #2154FA); /* 标准的语法 */
    filter: brightness(1.4);
  }
</style>
