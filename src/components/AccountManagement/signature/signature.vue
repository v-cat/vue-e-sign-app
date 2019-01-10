<template>
  <div
    class="signature"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-background="rgba(236,235, 235, 0.8)"
  >

    <!-- 签名 印章 -->

    <div class="signature-seal">
      <ul>
        <!-- 添加 印章管理 -->
        <li>
          <div class="append-infor">
            <div class="sign-name">
              <div class="contract-infor-back"></div>
              <span id="activeLink"> 我的签名</span>
            </div>
            <div class="contract-infor-squar">
            </div>
            <div class="sign-name-info">
              <div class="signature-navs">
                <router-link
                  to="/accountManagement/signature/seal"
                  class="signature-infor-words"
                >
                  <!-- v-bind:class="{managementActive: isActived}"  v-bind:class="{managementActive: isActived1}"-->
                  <a> 印章管理</a>
                </router-link>
                <router-link
                  to="/accountManagement/signature/uploading"
                  class="signature-infor-words "
                >
                  <a> 上传印章</a>
                </router-link>
                <!-- <router-link to="/accountManagement/signature/upload" class="signature-infor-words ">
                  <a> 上传印章2</a>
                </router-link> -->
                <router-link
                  to="/accountManagement/signature/signhand"
                  class="signature-infor-words"
                >
                  <a> 手写签名</a>
                </router-link>
              </div>
              <router-view></router-view>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<style>
@import "./signature.css";
</style>
<script src='./signature.js'></script>
