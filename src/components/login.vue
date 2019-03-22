<template>
    <div class="">
      <div>
        <input text="text" value="" ref="sendmsg">
        <input text="text" value="" v-model="sendmsg2">
      </div>
      <div class="question_form">
        <input text="text" class="msg" value="" v-model="message"/>
        <el-button type="primary" class="question_send" @click="sendMsg"><img src="static/send.png"></el-button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    sendMsg () {
      if (!this.message) {
        this.$message.info('please input message')
        return;
      }
      this.$refs.sendmsg.value = this.message
    }
  }
}
</script>

<style scoped>
  .question_form{
    border-top:1px #e4e4e4 solid;
    position:fixed;
    z-index :100;
    left :0;
    right :0;
    bottom:1px;
    background-color:#fff;
    width:100%;
    height:50px;
    display:flex;
    text-align: center;
  }
  .user_question{
    height: 40px;
    width: 80%;
  }
  .msg{
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
  .question_send{
    width: 40px;
    height: 40px;
    padding: 0;
    margin-left: 5px;
  }
</style>
