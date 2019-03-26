<template>
    <div class="enroll">
        <div class="retreat">
          <a></a>
        </div>
      <form class="enroll_form">
        <table class="enroll_table">
          <tr style="height: 30px">
            <td style="border: none;border-bottom:1px solid cornflowerblue ">
              <input type="text" class="enroll_user" placeholder="请输入用户名" />
            </td>
          </tr>
          <tr style="height: 15px">
            <td>
            </td>
          </tr>
          <tr style="height: 30px">
            <td style="border: none;border-bottom:1px solid cornflowerblue ">
              <input type="password" class="enroll_password" placeholder="请输入密码" />
            </td>
          </tr>
          <tr style="height: 15px">
            <td>
            </td>
          </tr>
          <tr style="height: 30px">
            <td style="border: none;border-bottom:1px solid cornflowerblue ">
              <input type="tel" class="enroll_phone"  placeholder="请输入手机号" ref="phone_number" />
            </td>
          </tr>
          <tr style="height: 15px">
            <td></td>
          </tr>
          <tr style="height: 30px">
            <td style="border: none;border-bottom:1px solid cornflowerblue ">
              <input type="tel" class="enroll_code" placeholder="请输入验证码" oninput="if(value.length>6)value=value.slice(0,6)" />
              <a-button type="primary" class="get_enroll_code" @click="countUp" v-show="show1">获取验证码</a-button>
              <span v-show="show2" style="float: right">{{content}}</span>
            </td>
          </tr>
          <tr style="height: 23px">
            <td  class="draws" v-show="isreveal1">
              <img src="static/draw.png" style="float: left;height: 20px">
              <span style="float: left;margin-left: 5px;font-size: small">验证码已发送，可能会有延后请耐心等待</span>
            </td>
          </tr>
          <tr style="height: 45px">
            <td>
              <a-button type="primary" class="logins">下一步</a-button>
            </td>
          </tr>
          <tr style="height: 3px">
            <td></td>
          </tr>
        </table>
      </form>
    </div>
</template>

<script>
export default {
  name: 'enlist',
  data () {
    return {
      content: '获取验证码', // 按钮里显示的内容
      totalTime: 60, // 记录具体倒计时时间
      canClick: true,
      isreveal1: false,
      show1: true,
      show2: false
    }
  },
  methods: {
    countUp () {
      if (this.$refs.phone_number.value === '') {
        this.$message.error('请输入手机号')
        return
      }
      if (!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.$refs.phone_number.value)) {
        this.$message.error('请输入正确的手机号')
        return
      }
      // 调用后台接口

      this.isreveal1 = true
      this.show1 = !this.show1
      this.show2 = !this.show2
      // if (!this.canClick) return
      // this.canClick = false;  //改动的是这两行代码
      this.content = this.totalTime + 's后重新发送' // 这里解决60秒不见了的问题
      let clock = window.setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's后重新发送'
        if (this.totalTime < 0) { // 当倒计时小于0时清除定时器
          window.clearInterval(clock)
          this.show1 = true
          this.show2 = false
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
  .enroll {
    width: 100%;
    height: 100%;
  }

  .enroll_form {
    position: absolute;
    top: 30%;
    right: 6%;
    left: 6%;
  }
  .enroll_table {
    width: 100%;
  }

  .enroll_user {
    width: 90%;
    border-style: none;
    outline: none;
    height: 100%;
    font-size: 15px;
    margin-left: 6%;
    float: left;
  }

  .enroll_password {
    width: 90%;
    border-style: none;
    outline: none;
    height: 100%;
    font-size: 15px;
    margin-left: 6%;
    float: left;
  }

  .enroll_phone {
    width: 90%;
    border-style: none;
    outline: none;
    height: 100%;
    font-size: 15px;
    margin-left: 10%;
    float: left;
  }

  .enroll_code {
    border-style: none;
    outline: none;
    height: 100%;
    width: 40%;
    font-size: 15px;
    float: left;
  }

  .get_enroll_code {
    float: right;
    height: 100%;
  }

  .logins {
    height: 40px;
    width: 100%;
  }
</style>
