<template>
  <div id="person" class="accountManagement-head" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">
    <persenalnav></persenalnav>
    <!-- 导航条 -->

    <div class="navigation-back"></div>

    <div class="contract-body accountManagement">
      <!-- 个人信息 -->
      <div class="contract-information">
        <table class="contract-infor-img">
          <tr>
            <td class="td">
              <div class="contract-information-button floatright">
                <router-link to="/UploadContracts" class="search-infor-button floatright">签发文件</router-link>
              </div>
              <div class="accountManagement-senced-head">
                <el-tabs>
                  <div class="accountManagement-navs">
                    <router-link to="/accountManagement/personalinfor" class="search-infor-words acc-personalinfor" v-bind:class="{managementActive: isActived}">
                      <a @click="Choose"> 个人信息</a>
                    </router-link>
                    <router-link to="/accountManagement/account" class="search-infor-words acc-account" v-bind:class="{managementActive: isActived1}">
                      <a @click="Choose"> 个人账户</a>
                    </router-link>
                    <router-link to="/accountManagement/signature/seal" class="search-infor-words  acc-signature " v-bind:class="{managementActive: isActived2}">
                      <a @click="  Chooseperson"> 签名设置</a>
                    </router-link>
                    <router-link to="/accountManagement/company" class="search-infor-words acc-company">
                      <a @click="Choose"> 企业认证</a>
                    </router-link>
                  </div>
                </el-tabs>
                <router-view></router-view>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <!-- 基本信息-->
    </div>
    <!-- 尾部 -->
    <foot></foot>

  </div>
  </div>
</template>
<style>
@import './AccountManagement.css';
</style>
<script src='./AccountManagement.js' >
</script>
 