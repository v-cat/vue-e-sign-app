<template>
  <div class="account" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">
    <!-- 签名 印章 -->
    <div class="account-contract-seal">
      <ul>
        <!-- 添加 印章管理 -->
        <li>
          <div class="append-infor">
            <div class="sign-name">
              <div class="contract-infor-back"></div>
              <span id="activeLink" class="set-meal"> 我的套餐</span>
            </div>
            <div class="contract-infor-squar">
            </div>
            <div class="sign-name-info">
              <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">

                <el-tab-pane label="我的套餐" name="1">
                  <overall></overall>
                </el-tab-pane>
                <el-tab-pane label="购买套餐" name="2">
                  <person></person>
                </el-tab-pane>
                <el-tab-pane label="订单查询" name="3">
                  <order></order>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<style scoped>
@import './account.css';
</style>
 <style >
@import './accounts.css';
</style>
<script src='./account.js'></script>