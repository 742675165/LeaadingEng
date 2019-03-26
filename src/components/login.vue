<template>
    <div class="login_form">
      <form>
        <table class="tab_login">
          <tr style="height: 30px">
            <td style="border: none;border-bottom:1px solid cornflowerblue ">
              <input type="text" class="login_user" placeholder="请输入用户名" />
            </td>
          </tr>
          <tr style="height: 30px">
            <td>
            </td>
          </tr>
          <tr style="height: 30px" v-show="hide_password">
            <td style="border: none;border-bottom:1px solid cornflowerblue ">
              <img src="static/visible.png" class="view" style="width: 19px;height: 19px" @click="change_hide"/>
              <input type="text" class="login_password_text" placeholder="请输入密码" />
              <a class="lost_password" @click="lost_pass">忘记密码</a>
            </td>
          </tr>
          <tr style="height: 30px" v-show="view_password">
            <td style="border: none;border-bottom:1px solid cornflowerblue ">
              <img src="static/conceal.png" class="view" style="width: 19px;height: 19px" @click="change_view"/>
              <input type="password" class="login_password" placeholder="请输入密码" >
              <a class="lost_password" @click="lost_pass" style="float: right;width: 20%">忘记密码</a>
            </td>
          </tr>
          <tr style="height: 30px">
            <td>
            </td>
          </tr>
          <tr>
            <td>
              <a-button type="primary" class="login_but" @click="skip_home">登录</a-button>
            </td>
          </tr>
          <tr style="height: 10px">
            <td>
            </td>
          </tr>
          <tr>
            <td>
              <span style="float: left" @click="text_login">短信验证码登录</span><span style="float: right" @click="sign_in">注册</span>
            </td>
          </tr>
        </table>
      </form>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      hide_password: false,
      view_password: true
    }
  },
  methods: {
    skip_home () {
      this.$router.push({path: 'homepages'})
    },
    text_login () {
      this.$router.push({path: 'textlogins'})
    },
    sign_in () {
      this.$router.push({path: 'registers'})
    },
    change_view () {
      this.view_password = !this.view_password
      this.hide_password = !this.hide_password
    },
    change_hide () {

    }
  }
}
</script>

<style scoped>
  .login_form {
    position: absolute;
    top: 30%;
    right: 6%;
    left: 6%;
  }

  .tab_login{
    width: 100%;
  }

  .login_user {
    width: 90%;
    border-style: none;
    outline: none;
    height: 100%;
    font-size: 15px;
    margin-left: 6%;
    float: left;
  }

  .login_password_text {
    width: 72%;
    border-style: none;
    outline: none;
    height: 100%;
    font-size: 15px;
    margin-left: 0.5%;
    float: left;
  }

  .view {
    float: left;
  }

  .login_password {
    width: 72%;
    border-style: none;
    outline: none;
    height: 100%;
    font-size: 15px;
    margin-left: 0.5%;
    float: left;
  }

  .lost_password {
    height: 100%;
    float: right;
    font-size: 13px;
    margin-top: 0.2px;
  }

  .login_but {
    height: 40px;
    width: 100%;
  }
</style>
