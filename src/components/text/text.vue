<template>
  <div>
    <div id="print">
      <canvas id="canvas" class="inputele" v-bind:style="{   width: width + 'px', height: height + 'px' }" style=" border: 1px dashed;">
        <!-- width: 100%;height: 100%; -->
        <!-- height: 100%; -->

      </canvas>
      <!-- //写字区域   -->

      <div id="controller" style="width: 38px;">

        <div class="op_btn" id="clear_btn" @click="clearBtn">
          <!-- <img src="./clear1.png"> -->
          N
        </div>
        <div class="op_btn" id="save-img" @click="SaveImg">
          <!-- <img src="./Confirm1.png"> -->
          Y
        </div>
      </div>
      <div>
        <!-- <button id="save-img"> 保存</button> -->
        <div id="sign_show"></div>
      </div>
    </div>
  </div>
  <!-- <script src='./text.js'></script> -->
</template>
<style scoped>
@import './text.css';
</style>
<<script>
  
</script>