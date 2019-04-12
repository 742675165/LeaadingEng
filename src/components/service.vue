<template>
    <div class="service_page">
      <div id="server_header">
        <!--<router-link :to="{name: 'bookshelf', params: { entityId: this.entityId } }" :class="{'flex-item-1':'flex-item-1',cur:tabs[0].isShow}" href="javascript:">-->
          <!--<span class="tabNav-ico tabNav-book"></span>-->
          <span class="tabNav-txt" style="font-size: 18px">签入服务组</span>
        <!--</router-link>-->
          <!--<router-link :to="{name: 'bookshelf', params: { entityId: this.entityId } }" :class="{'flex-item-1':'flex-item-1',cur:tabs[0].isShow}" href="javascript:">-->
            <!--<span class="tabNav-ico tabNav-book"></span>-->
            <span class="tabNav-txt" style="font-size: 18px">进入配置</span>
        <!--</router-link>-->
      </div>
      <div id="middle_part">
        <div class="common_service">
          <span>常用服务组：</span>
          <ul>
            <li>通用技能</li>
            <li>电子电路</li>
            <!--<li>通用技能</li>-->
          </ul>
        </div>
        <div class="full_service_group">
          <span>全部服务组：</span>
          <ul>
            <li>+赛事组</li>
            <li>+教师组</li>
            <li>+市场组</li>
          </ul>
        </div>
        <div class="remind_the_way">
          <span>业务提醒：</span>
             <p><a-checkbox value="A">响铃提醒</a-checkbox></p>
             <p><a-checkbox value="B">消息提醒</a-checkbox></p>
        </div>
        <div class="but_part">
            <a-button type="primary" class="consult" @click="skip_home">受理咨询</a-button>
            <a-button type="primary" class="cancel" @click="skip_home">取消</a-button>
        </div>
        <div class="add_service_group">
          <span>不在服务组，<a href="#">点击添加</a></span>
        </div>
    </div>
      <div class="clear"></div>
    </div>
</template>

<script>
export default {
  name: 'service'
}
</script>

<style scoped>
  .service_page {
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
  }
  #server_header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 10%;
    text-align: center;
  }
  #middle_part {
    width: 100%;
    height: 90%;
    position: absolute;
    bottom: 0;
  }
  .common_service {
    width: 100%;
    height: 100px;
    float: left;
  }
  .common_service span {
    margin-left: 15px;
  }
  .common_service ul {
    width: auto;
    white-space: nowrap;
    margin-top: 15px;
  }
  .common_service li {
    display: inline-block;
    width: 80px;
    height: 40px;
    border: 1px solid red;
    text-align: center;
    line-height: 40px;
    margin: 0 10px;
  }
  .full_service_group {
    width: 100%;
    height: 100px;
    float: left;
    margin-top: 10px;
  }
  .full_service_group span {
    margin-left: 15px;
  }
  .full_service_group ul {
    width: auto;
    white-space: nowrap;
    text-align: center;
    margin-top: 10px;
    float: left;
  }
  .full_service_group li {
    display: inline-block;
    width: 80px;
    height: 40px;
    border: 1px solid red;
    text-align: center;
    line-height: 40px;
    margin: 0 10px;
  }
  .remind_the_way {
    width: 100%;
    height: 100px;
    margin-top: 10px;
    float: left;
  }
  .remind_the_way span {
    margin-left: 15px;
  }
  .remind_the_way p {
    margin-left: 30px;
  }
  .but_part {
    width: 100%;
    height: 100px;
    margin-top: 50px;
    text-align: center;
  }
  .consult {
    margin-right: 10px;
  }
  .cancel {
    margin-left: 10px;
  }
  .clear {
    clear: both;
  }
  .add_service_group {
    width: 100%;
    height: 100px;
    margin-top: 20px;
    text-align: center;
    line-height: 100px;
  }
</style>
