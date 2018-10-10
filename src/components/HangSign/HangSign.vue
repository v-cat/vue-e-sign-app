<template>
  <div id="person" class="HangSign" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">
    <persenalnav></persenalnav>
    <!-- 导航条 -->

    <div class="navigation-back"></div>

    <div class="contract-body accountManagement">
      <div class="contract-my-seal">
        <ul>
          <li>
            <!-- 添加 印章管理 -->
            <div class="append-infor">
              <div class="contract-infor-back"></div>
              <span> 手写签名</span>
              <router-link to="/UploadContracts" class="append-infor-button">签发文件</router-link>
              <div class="contract-infor-squar">
              </div>
            </div>
          </li>
          <li>
            <!-- 印章图片 -->
            <!-- <div class="contract-my-code">
            </div> -->

            <div class="signhand-my-code">
              <img style="width:200px;height: 200px;" :src="idView">
            </div>
          </li>
          <li>
            <div class="contract-my-codes">
              请使用手机扫一扫功能扫描此二维码,请勿刷新页面
            </div>
          </li>

        </ul>

      </div>

    </div>

    <!-- 尾部 -->
    <foot></foot>

  </div>
  </div>
</template>
<style>
@import './HangSign.css';
</style>
<script src='./HangSign.js' >
</script>
 