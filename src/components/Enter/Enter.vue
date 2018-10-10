<template>
  <div id="person">
    <!-- 导航条 -->
    <homenav></homenav>
    <!-- 背景图  -->
    <div class="navigationImg">
      <img class="homePageImg" src="../../assets/images/注册1.jpg">
    </div>
      <!-- 登录 -->
      <div class="login">
        <div class="login-wrap" v-show="showLogin">
          <router-link to="/login" class="login-wrap-img"> </router-link>
          <ul class="login-wrap-input">
            <li>
              <h3>登录</h3>
            </li>
          </ul>
          <ul class="margintop35">
            <table class="login-wrap-input1">
              <tr class="login-line-name username">
                <td class="username-icon">
                  <svg class="navigationIcon " aria-hidden="true" color='black'>
                    <use class="white" xlink:href="#icon-ren"></use>
                  </svg>
                </td>
                <td>
                  <input type="text" placeholder="请输入用户名" v-model="loginForm.name" @keyup.enter="Enter">
              </td>
                <td>
                  <span class="warning" :class="loginName[0]">
                    {{loginName[1]}}
                  </span>
                </td>

              </tr>
              <tr class="login-line-name password">
                <td class="username-icon">
                  <svg class="navigationIcon " aria-hidden="true" color='black'>
                    <use class="white" xlink:href="#icon-mima"></use>
                  </svg>
                </td>
                <td><input type="password" placeholder="请输入密码" v-model="loginForm.pass" @keyup.enter="Enter"></td>
                <td>
                  <span class="warning" :class="loginPass[0]">
                    {{loginPass[1]}}
                  </span>
                </td>
              </tr>
              <tr class="login-line-name password">
                <td class="username-icon">
                  <svg class="navigationIcon " aria-hidden="true" color='black'>
                    <use class="white" xlink:href="#icon-mima"></use>
                  </svg>
                </td>
                <td><input class="width135" v-model="loginForm.code" type="text" placeholder="请输入验证码" @keyup.enter="Enter"></td>
                <td class="passCode">
                  <el-tooltip class="item" effect="dark" content="点我刷新" placement="right">
                    <span id="codeDiv" @click="ChangeCode">

                    </span>
                  </el-tooltip>
                </td>
                <td>
                  <span class="warning" :class="loginCode[0]">
                    {{loginCode[1]}}
                  </span>
                </td>`
              </tr>
            </table>
          </ul>
          <ul class="login-wrap-iterm">
            <li class="login-check">
              <el-checkbox v-model="checked">记住账号</el-checkbox>
              <span>忘记密码？ </span>
            </li>
            <li>
              <a class="login-loging" @click="Enter ">{{loginBtnTitle}}</a>
            </li>
            <li>
              <span>没有账号？</span>
              <router-link to="/login" class="login-wrap-enter ">立即注册>></router-link>
            </li>
          </ul>
        </div>
      </div>

      <foot></foot>

    </div>
</template>
<script src="./Enter.js"></script>
<style scoped>
@import './Enter.css';
</style>
<style >
@import '../../assets/css/HomeRepir.css';
</style>
