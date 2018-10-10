<template>
  <div class="signhand">

    <ul>
      <li style="display: inline-block;">
        <div class="signhand-my-code">
          <img style="border-radius: 20px; width:200px;height: 200px;" :src="idView">
        </div>
      </li>
      <li>
        <div class="contract-my-codes">
          请使用手机扫一扫功能扫描此二维码,请勿刷新页面
        </div>
        <div class="contract-my-codes">
          <router-link to="/SignWebWriting" class="search-infor-button">手写签名</router-link>
        </div>
      </li>
    </ul>

  </div>
</template>
<style scoped>
@import './signhand.css';
</style>
 <script src="./signhand.js"></script>