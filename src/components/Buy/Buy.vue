<template>
  <div id="person" class="buy-head" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">
    <!-- 导航文字 -->
    <persenalnav></persenalnav>
    <!-- 导航条 -->
    <div class="header" id="searchBar">
      <div class="navigation-back"></div>
    </div>
    <div class="contract-body">
      <!-- 合同信息 -->
      <div class="contract-information">
        <!-- <table class="contract-infor-img"> -->

        <div class="contract-infor-back"></div>
        <span id="activeLink"> 购买详情</span>
        <div class="contract-information-button">
          <a class="search-infor-button" @click="$router.back(-1)">返回</a>
        </div>
        <div class="contract-infor-squar">
        </div>
      </div>
      <!-- 合同信息名称 -->
      <div class="navigation">
        <div class="bg-purple">订单编号: {{Code}}</div>
      </div>

      <el-table ref="table" :data="tableData" style="width: 100% ; border-radius: 20px;" align="center">
        <!-- <el-table-column type="index" width="100" align="center"></el-table-column> -->
        <el-table-column prop="vproductName" label="套餐名称" width="290" align="center"></el-table-column>
        <el-table-column prop="lamount" label="数量" width="290" align="center"></el-table-column>
        <el-table-column prop="lprice" label="金额" width="290" align="center"></el-table-column>
        <el-table-column prop="lpayment" label="应付金额" width="290 " align="center ">
        </el-table-column>
      </el-table>
      <!-- 合同详情 -->

      <div class="contract-my">
        <div class="contract-my-words">
          <div class="buy-info">
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
              <el-tab-pane label="支付宝" name="1">
                <!-- 支付宝 -->
                <div class="by-alipay">
                  <!-- <img class="alipay" src="../../assets/images/支付宝.png"> -->
                  <div class="alipay-words"><span class="buy-words" @click="Paymoney"> 立即支付</span></div>
                  <svg class="alipayIcon " aria-hidden="true" color='black'>
                    <use class="white" xlink:href="#icon-zhifubao"></use>
                  </svg>
                </div>

              </el-tab-pane>
              <el-tab-pane label="微信支付" name="2">
                <!-- 微信支付 -->
                <div class="by-alipay">
                  <div>
                    <img class="WeChat" src="../../assets/images/二维码.jpg">
                  </div>
                    <div class="WeChat-icon">
                      <svg class="BuyIcon" aria-hidden="true" color='black'>
                        <use class="white" xlink:href="#icon-icon-test"></use>
                      </svg>
                      <div class="WeChat-words">
                        <span>使用微信支付</span>
                      </div>
                    </div>

                  </div>
              </el-tab-pane>
              <el-tab-pane label="对公转账" name="3">
                <div class="buy-company">
                  <el-form label-width="100px">
                    <el-form-item label="公司名称:">
                      xxxx公司
                    </el-form-item>
                    <el-form-item label="对公账号:">
                      321321321321
                    </el-form-item>
                    <el-form-item label="开户行:">
                      江苏xxxx支行
                    </el-form-item>
                  </el-form>
                </div>

              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <foot></foot>
  </div>
</template>
<style scoped>
@import './Buy.css';
</style>
<style>
@import './Buys.css';
</style>

<script src='./Buy.js'></script>
