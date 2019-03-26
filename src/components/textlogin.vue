<template>
  <div class="text_login">
    <form>
      <table class="login_table">
        <tr style="height: 30px">
          <td style="border: none;border-bottom:1px solid cornflowerblue ">
            <input type="tel" class="login_phone"  placeholder="请输入手机号" ref="phone" v-model="phone_number" />
          </td>
        </tr>
        <tr style="height: 30px">
          <td></td>
        </tr>
        <tr style="height: 30px">
          <td style="border: none;border-bottom:1px solid cornflowerblue ">
            <input type="tel" class="security_code" placeholder="请输入验证码" oninput="if(value.length>6)value=value.slice(0,6)" />
            <a-button type="primary" class="get_code" @click="countDown" v-show="reveal1">获取验证码</a-button>
            <span v-show="reveal2" style="float: right">{{content}}</span>
          </td>
        </tr>
        <tr style="height: 23px">
          <td  class="draws" v-show="isshow">
              <img src="static/draw.png" style="float: left;height: 20px">
              <span style="float: left;margin-left: 5px;font-size: small">验证码已发送，可能会有延后请耐心等待</span>
          </td>
        </tr>
        <tr style="height: 45px">
          <td>
            <a-button type="primary" class="logins">登录</a-button>
          </td>
        </tr>
        <tr style="height: 3px">
          <td></td>
        </tr>
        <tr style="height: 20px">
          <td>
            <span style="float: left" @click="account_password_login">账户密码登录</span><span style="float: right" @click="sign_in">注册</span>
          </td>
        </tr>
      </table>
    </form>

  </div>
</template>

<script>
export default {
  name: 'textlogin',
  data () {
    return {
      content: '获取验证码', // 按钮里显示的内容
      totalTime: 60, // 记录具体倒计时时间
      canClick: true,
      isshow: false,
      reveal1: true,
      reveal2: false,
      phone_number: ''
    }
  },
  methods: {
    // 跳转至账户密码登录页面
    account_password_login () {
      this.$router.push({path: '/'})
    },
    // 跳转至注册页面
    sign_in () {
      this.$router.push({path: 'enlists'})
    },

    countDown () {
      if (this.$refs.phone.value === '') {
        this.$message.error('请输入手机号')
        return
      }
      if (!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.$refs.phone.value)) {
        this.$message.error('请输入正确的手机号')
        return
      }
      // 调用后台接口
      this.axios.get('/api/user/list', this.phone_number)
      this.isshow = true
      this.reveal1 = !this.reveal1
      this.reveal2 = !this.reveal2
      // if (!this.canClick) return
      // this.canClick = false;  //改动的是这两行代码
      this.content = this.totalTime + 's后重新发送' // 这里解决60秒不见了的问题
      let clock = window.setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's后重新发送'
        if (this.totalTime < 0) { // 当倒计时小于0时清除定时器
          window.clearInterval(clock)
          this.reveal1 = true
          this.reveal2 = false
          // this.content = '重新发送验证码';
          this.totalTime = 60
          this.canClick = true // 这里重新开启
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .text_login {
    position: absolute;
    top: 30%;
    right: 6%;
    left: 6%;
  }
  .login_table {
    width: 100%;
  }

  .login_phone {
    width: 90%;
    border-style: none;
    outline: none;
    height: 100%;
    font-size: 15px;
    margin-left: 10%;
    float: left;
  }

  .security_code {
    border-style: none;
    outline: none;
    height: 100%;
    width: 40%;
    font-size: 15px;
    float: left;
  }

  .get_code {
    float: right;
    height: 100%;
  }

  .logins {
    height: 40px;
    width: 100%;
  }

  .draws {
    margin-top: 12px;
    height: 100%;
  }
</style>
