<template>
    <div class="part">
      <el-input type="text" class="que" />
      <el-button type="button" class="semsg" @click="sendmeg" ref="question"><img src="static/send.png"></el-button>
    </div>
</template>

<script>
  export default {
    name: "homes"
  }

</script>


<style scoped>
  .part {
    border-top:1px #e4e4e4;
    position:fixed;
    z-index :100;
    left :0;
    right :0;
    bottom:1px;
    background-color:#fff;
    width:100%;
    height:40px;
    display:flex;

  }
  .que {
    width: 80%;
    height: 50px;
    float: left;
  }
  .semsg {
    width: 40px;
    height: 40px;
    float: left;
    margin-left: 5px;
    padding: 0;
  }


</style>
