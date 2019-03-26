<template>
  <div class="home_page">
    <a-input type="text" class="contents">
      <a-button type="primary" class="send_content" slot="suffix">发送</a-button>
    </a-input>


  </div>
</template>

<script>
export default {
  name: 'homepage'
}
</script>

<style scoped>
  .home_page {
    position: absolute;
    top: 90%;
    width: 100%;
  }
  .contents {
    float: left;
    width: 80%;
  }
</style>
