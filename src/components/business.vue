<template>
    <div id="business_page">
      <div class="top_part">
        <span>切换状态：</span>
        <ul>
          <li style="background-color: #CC3300;color: #fff" onclick="onbusy">忙碌</li>
          <li style="background-color: #00CC66;color: #fff">空闲</li>
          <li style="background-color: #CCCCCC;color: #fff">离开</li>
        </ul>
        <a-input-search id="input_search" @search="onSearch"/>
      </div>
      <div class="center-part">
        <div class="news_list">
          <span id="userName">用户名</span>
          <span id="center_time">时间</span>
          <span id="center_part">消息</span>
          <span class="msg"  style="text-align: center; color: #fff;">...</span>
        </div>
      </div>
      <div id="clear">
      </div>
    </div>
</template>

<script>
import AInputSearch from 'ant-design-vue/es/input/Search'
export default {
  name: 'business',
  components: {AInputSearch}
}
</script>

<style scoped>

  #business_page {
    width: 100%;
    height: 100%;
  }
  .top_part {
    position: absolute;
    top: 0;
    width: 100%;
    height: 20%;
    margin-top: 50px;
    border-bottom:1px solid #fff;
  }
  .top_part span {
    width: 100%;
    height: 20px;
    float: left;
    margin-left: 15px;
  }
  .top_part ul{
    margin-top: 30px;
    text-align: center;
  }
  .top_part li {
    display: inline-block;
    width: 80px;
    height: 40px;
    border: 1px solid #fff;
    text-align: center;
    line-height: 40px;
    margin: 0 10px;
  }
  #input_search {
    width: 90%;
    height: 40px;
  }
  .center-part {
    width: 100%;
    height: 80%;
    overflow-y: auto;
    position: absolute;
    top: 30%;
  }
  .news_list {
    border-bottom:2px solid #E7E7E7;
    width: 100%;
    height: 60px;
  }
  #userName {
    width: 42px;
    height: 16px;
    float: left;
    margin-top: 8px;
    margin-left: 8px;
    text-align: center;
    line-height: 16px;
  }
  #center_time {
    width: 28px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    float: right;
    margin-right: 8px;
    margin-top: 10px;
  }
  #center_part {
    height: 28px;
    width: 80%;
    float: left;
    line-height: 30px;
    margin-left: 6px;
  }
  .msg{
    display: block;
    height: 17px;
    width: 17px;
    background: red;
    border-radius: 10px;
    float: right;
    font-size: small;
    text-align: center;
  }
  #clear {
    clear: both;
  }
</style>
