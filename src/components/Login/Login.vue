<template>
  <div id="person">
    <!-- 导航条 -->

    <homenav></homenav>
    <!-- 背景图 -->
    <div class="navigationImg">
      <img class="homePageImg" src="../../assets/images/注册1.jpg">
    </div>
    <!-- 登录 -->
    <div class="login">
      <div class="login-wrap" v-show="showLogin">

        <router-link to="/enter" class="login-wrap-img"> </router-link>

        <ul class="login-wrap-input">
          <li>
            <h3>注册</h3>
            <!-- <a class="login-line"><img src="../../assets/images/注册3.png"></a> -->
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
              <td> <input type="text" placeholder="请输入用户名" v-model="loginForm.name" @keyup.enter="Login"></td>
              <td>
                <span class="warning" :class="loginAlertName[0]">
                  {{loginAlertName[1]}}
                </span>
              </td>
            </tr>
            <tr class="login-line-name password">
              <td class="username-icon">
                <svg class="navigationIcon " aria-hidden="true" color='black'>
                  <use class="white" xlink:href="#icon-mima"></use>
                </svg>
              </td>
              <td><input type="password" placeholder="请输入密码" v-model="loginForm.pass" @keyup.enter="Login"></td>
              <td>
                <span class="warning" :class="loginAlertName[0]">
                  {{loginAlertPass[1]}}
                </span>
              </td>
            </tr>
            <tr class="login-line-name password-ok">
              <td class="username-icon">
                <svg class="navigationIcon " aria-hidden="true" color='black'>
                  <use class="white" xlink:href="#icon-zaicishurumima_fuzhi"></use>
                </svg>
              </td>
              <td><input type="password" placeholder="请确认密码" v-model="loginForm.confirmPassword" @keyup.enter="Login"></td>
              <td>
                <span class="warning" :class="loginAlertName[0]">
                  {{loginAlertConfirmPassword[1]}}
                </span>
              </td>
            </tr>
            <!-- <tr class="login-line-name security-code">
              <td class="username-icon">
                <svg class="navigationIcon " aria-hidden="true" color='black'>
                  <use class="white" xlink:href="#icon-yanzhengma1"></use>
                </svg>
              </td>
              <td><input type="password" placeholder="手机验证码" v-model="newPassword">
                <a class="get-pass-word">获取验证码</a>
              </td>
            </tr> -->
          </table>
        </ul>
        <ul class="login-wrap-iterm">
          <li class="login-check">
            <el-checkbox v-model="checked">
              <a class="input_first">已阅读并同意</a>
              <a class="input_a">《使用协议》</a>
              <a class="input_first">及</a>
              <a class="input_a">《隐私条款》</a>
            </el-checkbox>
          </li>
          <li>
            <a class="login-loging" @click="Login">{{loginBtnTitle}}</a>
            <!-- v-on:click="login" -->
          </li>
          <li>
            <span>我已有账号</span>
            <!--  v-on:click="ToRegister" -->

            <router-link to="/enter" class="login-wrap-enter">立即登录 >></router-link>
            <!-- v-on:click="ToRegister" -->
          </li>
        </ul>
      </div>
    </div>
    <!-- 尾部 -->
    <foot></foot>
  </div>
</template>
<script src="./Login.js"></script>
<style scoped>
@import './Login.css';
</style>
 <style  >
@import '../../assets/css/HomeRepir.css';
</style>