<!--<template>-->
  <!--<a-layout id="components-layout-demo-fixed">-->
    <!--<a-layout-header :style="{ position: 'absolute', top:   '0', zIndex: 1, width: '100%',textAlign: 'center' }">-->
        <!--小智智能客服-->
    <!--</a-layout-header>-->
    <!--<a-layout-content>-->
      <!--<div :style="{ background: '#fff', minHeight: '380px' }"></div>-->
    <!--</a-layout-content>-->
    <!--<a-layout-footer :style="{ position: 'absolute',bottom: '0', zIndex: 1, width: '100%', textAlign: 'center' }">-->
      <!--<div id="contents-footer">-->
        <!--<a-input type="text" class="contents_message" @keyup.enter.native="sendMessage" />-->
        <!--<a-button type="primary" class="but-send" @click="sendMessage">登录</a-button>-->
      <!--</div>-->
    <!--</a-layout-footer>-->
  <!--</a-layout>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
  <!--name: 'homepage',-->
  <!--data () {-->
    <!--return {-->
      <!--msg: ''-->
    <!--}-->
  <!--},-->
  <!--methods: {-->
    <!--sendMessage () {-->
      <!--if (this.msg) {-->
        <!--this.$store.dispatch('sendMessage', {-->
          <!--content: this.msg,-->
          <!--session: this.session-->
        <!--}).then(() => {-->
          <!--this.msg = ''-->
        <!--}).catch((err) => {-->
          <!--console.error(err)-->
        <!--})-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
  <!--#components-layout-demo-fixed .ant-layout-header {-->
    <!--background: #7dbcea;-->
    <!--color: #fff;-->
  <!--}-->
  <!--#contents-footer {-->
    <!--position: absolute;-->
    <!--bottom: 0;-->
    <!--width: 100%;-->
    <!--height: 50px;-->
    <!--line-height: 50px;-->
  <!--}-->
  <!--.contents_message {-->
    <!--width: 60%;-->
  <!--}-->
<!--</style>-->
<template>
  <div class="wxchat-container" :style="{backgroundColor: wrapBg}">
    <div class="window" id="window-view-container" :style="{maxHeight: maxHeight + 'px', width: width +'px'}">
      <!-- data is empty -->
      <!--<div class="loading" v-if="dataArray && dataArray.length==0">-->
        <!--&lt;!&ndash;<div style="margin-top: 300px;text-align:center; font-size: 16px;">&ndash;&gt;-->
          <!--&lt;!&ndash;<span>未查找到聊天记录</span>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--<div class="text" >coanima</div>-->
      <!--</div>-->

      <!--&lt;!&ndash; loading &ndash;&gt;-->
      <!--<div class="loading" v-if="dataArray.length==0">-->
        <!--<div style="margin-top: 300px;">-->
          <!--<div>加载中...</div>-->
        <!--</div>-->
      <!--</div>-->

      <div class="title" v-if="dataArray && dataArray.length>0">
        <p v-text="contactNickname"></p>
      </div>
      <!-- main -->
      <ScrollLoader :minHeight="minHeight" @scroll-to-top="refresh" @scroll-to-botton="infinite" class="container-main" v-if="dataArray && dataArray.length>0" :style="{maxHeight: maxHeight-50 + 'px'}">
        <div class="message">
          <ul>
            <li v-for="(message, index) in dataArray" :key="message.id" :class="message.direction==2?'an-move-right':'an-move-left'">
              <p class="time"> <span v-text="message.ctime"></span> </p>
              <p class="time system" v-if="message.type==10000"> <span v-html="message.content"></span> </p>
              <div :class="'main' + (message.direction==2?' self':'')" v-else>
                <img class="avatar" width="45" height="45" :src="message.direction==2? ownerAvatarUrl: contactAvatarUrl">
                <!-- 文本 -->
                <div class="text" v-emotion="message.content" v-if="message.type==1"></div>
                <!-- 图片 -->
                <div class="text" v-else-if="message.type==2">
                  <img :src="message.content" class="image" alt="聊天图片">
                </div>
                <!-- 其他 -->
                <div class="text" v-else-if="message.type!=10000" v-text="'[暂未支持的消息类型:'+ message.type +']\n\r' + message.content">
                </div>
              </div>
            </li>
          </ul>
        </div>

      </ScrollLoader>
      <div id="contents_footer">
        <table id="contents_table">
          <tr>
            <td id="toggle_input_mode"></td>
            <td id="contents">
              <a-input type="text" class="message_content" ref="sendMsg" >
                <a-button type="primary" slot="suffix" class="but-sent" @click="sendMessage">发送</a-button>
              </a-input>
            </td>
            <td id="expression"></td>
            <td id="rests"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollLoader from './scrollLoader.vue'

export default {
  name: 'homepage',

  components: {
    ScrollLoader
  },

  props: {
    contactNickname: {
      type: String,
      default: 'Mystic Faces'
    },

    data: {
      type: Array,
      required: true
    },

    width: {
      type: Number,
      default: 450
    },

    wrapBg: {
      type: String,
      default: '#efefef'
    },

    maxHeight: {
      type: Object,
      default: function () {
        return { maxHeight: '100%' }
      }
    },

    contactAvatarUrl: {
      type: String
    },

    ownerAvatarUrl: {
      type: String
    },

    getUpperData: {
      type: Function,
      required: true
    },

    getUnderData: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
      isUpperLaoding: false,
      isUnderLaoding: false,

      isRefreshedAll: false,
      isLoadedAll: false,

      minHeight: 700,
      dataArray: []
    }
  },

  created () {
    this.initData()
  },
  mounted () {
    // document.getElementsByTagName('body')[0].scrollTop=0;
    this.minHeight = document.getElementById('window-view-container').offsetHeight
    this.maxHeight = document.getElementById('window-view-container').offsetHeight
  },

  methods: {
    initData () {
      this.dataArray = this.dataArray.concat(this.data)
      if (this.dataArray.length==0) {
        this.addData = {
          direction: 2,
          id: 1,
          type: 1,
          content: '你好!![呲牙]',
          ctime: new Date().toLocaleString()
        }
        this.dataArray.push(this.addData)
      }
      console.log(this.dataArray)
    },
    sendMessage () {
      // 获取输入数据
      this.sendMsg = this.$refs.sendMsg.stateValue
      //页面显示
      this.sendMsgData = {
        direction: 2,
        id: 1,
        type: 1,
        content: this.sendMsg,
        ctime: new Date().toLocaleString()
      }
      this.dataArray.push(this.sendMsgData)
      this.$refs.sendMsg.stateValue = ''
      //数据存储

      //本地缓存
    },
    // 向上拉刷新
    refresh (done) {
      var me = this
      if (me.isUpperLaoding) {
        return
      }

      if (me.isRefreshedAll) {
        done(true)
        me.isUpperLaoding = false
        return
      }

      try {
        this.getUpperData().then(function (data) {
          if (data.length === 0) {
            me.isRefreshedAll = true
            done(true)
          } else {
            me.dataArray = data.reverse().concat(me.dataArray) // 倒序合并
            done()
          }
        })
      } catch (error) {
        console.error('wxChat: props "getUpperData" must return a promise object!')
      }
      me.isUpperLaoding = false
    }

    // // 向下拉加载
    // infinite (done) {
    //   var me = this
    //   if (me.isUnderLaoding) {
    //     return
    //   }
    //   if (me.isLoadedAll) {
    //     done(true)
    //     me.isUnderLaoding = false
    //     return
    //   }
    //
    //   try {
    //     this.getUnderData().then(function (data) {
    //       if (data === 0) {
    //         me.isLoadedAll = true
    //         done(true)
    //       } else {
    //         done()
    //         me.dataArray = me.dataArray.concat(data) // 直接合并
    //       }
    //     })
    //   } catch (error) {
    //     console.error('wxChat: props "getUnderData" must return a promise object!')
    //   }
    //   me.isUnderLaoding = false
    // }

  }
}
</script>

<style scoped>
  #contents_input {
    z-index: 1;
  }
  #contents_footer {
    position: absolute;
    bottom: 0;
    background: #7dbcea;
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8%;
  }
  #contents_table {
    width: 100%;
  }
  #toggle_input_mode {
    width: 10%;
  }
  #contents {
    width: 70%;
  }
  #expression {
    width: 10%;
  }
  #rests {
    width: 10%;
  }
  .but-sent {
    height: 28px;
    background-color: #9EEA6A;
  }
  .wxchat-container{ width: 100%; height: 100%;z-index: 1; position: absolute; left:0; top: 0; overflow: hidden;}
  .shadow{ position: absolute; top:0; left: 0; z-index: 100; width: 100%; height: 100%; background: #000; opacity: .2; }
  .window {box-shadow: 1px 1px 20px -5px #000; /*max-width: 450px;*/ min-width: 100%; background: #F5F5F5; margin: 0 auto; overflow: hidden; padding: 0; height: 100%;position: relative;z-index: -1;}
  button{border:0; background:none; border-radius: 0;text-align: center;}
  button{outline:none;}
  .w100{width: 100%;}
  .mt5{margin-top: 5px;}
  .mt10{margin-top: 10px;}
  .mt20{margin-top: 20px;}
  .mb10{margin-bottom: 10px;}
  .mb20{margin-bottom: 20px;}
  .fs0{font-size: 0}
  .title{background: #000; text-align: center; color:#fff; width: 100%; height: 50px; line-height: 50px; font-size: 14px;}
  .loading,.no-more{text-align: center; color: #b0b0b0; line-height: 100px;}
  .no-more{line-height: 60px;}
  .pull-right{float: right;}
  .link-line{text-decoration: underline;}
  .message{
    height: 60%;
    padding: 6px;
    /*overflow-y: scroll;*/
    background-color: #F5F5F5;
  }
  .message li {
    margin-bottom: 15px;
    left:0;
    position: relative;
    display: block;
  }
  .message .time {
    margin: 10px 0;
    text-align: center;
  }
  .message .text {
    display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: calc(100% - 75px);
    min-height: 35px;
    line-height: 2.1;
    font-size: 15px;
    padding: 6px 10px;
    text-align: left;
    word-break: break-all;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    box-shadow: 0px 1px 7px -5px #000;
  }
  .message .avatar {
    float: left;
    margin: 0 10px 0 0;
    border-radius: 3px;
    background: #fff;
  }
  .message .time>span {
    display: inline-block;
    padding: 0 5px;
    font-size: 12px;
    color: #fff;
    border-radius: 2px;
    background-color: #DADADA;
  }
  .message .system>span{
    padding: 4px 9px;
    text-align: left;
  }
  .message .text:before {
    content: " ";
    position: absolute;
    top: 9px;
    right: 100%;
    border: 6px solid transparent;
    border-right-color: #fff;
  }
  .message .self {
    text-align: right;
  }
  .message .self .avatar {
    float: right;
    margin: 0 0 0 10px;
  }
  .message .self .text {
    background-color: #9EEA6A;
  }

  .message .self .text:before {
    right: inherit;
    left: 100%;
    border-right-color: transparent;
    border-left-color: #9EEA6A;
  }
  .message .image{
    max-width: 200px;
  }
  img.static-emotion-gif, img.static-emotion {
    vertical-align: middle !important;
  }

  .an-move-left{
    left: 0;
    animation: moveLeft .7s ease;
    -webkit-animation:moveLeft .7s ease;
  }
  .an-move-right{
    left: 0;
    animation: moveRight .7s ease;
    -webkit-animation:moveRight .7s ease;
  }
  .bgnone{
    background: none;
  }
  @keyframes moveRight{
    0%{left:-20px; opacity: 0}
    100%{left:0; opacity: 1}
  }

  @-webkit-keyframes moveRight
  {
    0%{left:-20px; opacity: 0}
    100%{left:0px; opacity: 1}
  }
  @keyframes moveLeft{
    0%{left:20px; opacity: 0}
    100%{left:0px; opacity: 1}
  }

  @-webkit-keyframes moveLeft
  {
    0%{left:20px; opacity: 0}
    100%{left:0px; opacity: 1}
  }

  @media (max-width: 367px){
    .fzDInfo{width:82%;}
  }
</style>
