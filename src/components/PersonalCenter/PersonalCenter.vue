<template >
  <div style="height:100%;" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">
    <!-- element-loading-spinner="web-sign-icon-weimingming-" -->
    <div id="person" class="personalcenter-head">
      <!-- 导航条 -->
      <persenalnav></persenalnav>
      <!-- 导航条 -->

      <div class="navigation-back" id="searchBar" v-bind:class="{fixed:isFixed }"></div>

      <!-- 白色透明背景 -->
      <div class="personal-header">
        <div class="middle-squear"></div>
      </div>

      <!-- 背景图 -->
      <div class="navigationImg">
        <img class="homePageImg" src="../../assets/images/个人登录首页b.jpg">
      </div>
      <!-- 中间部分 -->
      <div class="navigationBar-middle">
        <div>
          <!-- 个人信息 -->
          <div class="person-infor">
            <div class="person-service"> </div>
            <div class="person-information">
              <ul>
                <li>
                  <h5 class="world2">昵称：{{personInformation.vusername}} </h5>
                </li>
                <li>
                  <a v-if="userVerify" class="unverified coyellow">{{ verification.authenticated}}</a>
                  <a v-else class="unverified cored">{{ verification.unauthorized}}</a>
                </li>
                <li>
                  <h5 class="world2">账号：{{personInformation.vusercode}} </h5>
                </li>
                <li>
                  <router-link to="accountManagement/signature/seal" class="sign-man">管理我的印章</router-link>
                </li>

              </ul>
            </div>
          </div>
          <!-- 签发文件 -->
          <div class="person-sign">
            <div class="person-time">
              <div class="person-time-infor">
                <h5 class="world1">套餐剩余次数
                  <span>19</span> 次</h5>
                <h6>2022年02月02日前有效 </h6>
              </div>
            </div>
            <router-link to="/UploadContracts" class="person-sign-img1"> </router-link>
            <router-link to="/UploadContracts" class="person-sign-img2"> </router-link>
            <div class="person-sign-img3"></div>
          </div>
          <!-- 签章状态 -->
          <div class="sign-news">
            <div class="sign-news-inf">
              <!-- 待我签 -->
              <div @mouseenter="showSignMe(1)" @mouseleave="showSignMe(0)" class="sign-news-infor">
                <a class="sign-my" v-show="signMe ===0">
                  <svg class="sign-my-icon" aria-hidden="true" color='black'>
                    <use class="green" xlink:href="#icon-CDdaiwoqianshu"></use>
                  </svg>
                  <div class="sign-my-words ">
                    <a>待我签
                      <a class="sign-my-number">{{signNew.signMe}}</a>
                    </a>
                  </div>
                </a>
                <a class="sign-my1 sign-style" v-show="signMe === 1" @click="SignMe('001,004')">
                  <svg class="sign-my-icon" aria-hidden="true" color='black'>
                    <use class="green" xlink:href="#icon-CDdaiwoqianshu"></use>
                  </svg>
                  <div class=" sign-style-words" @click="SignMe('001,004')">
                    <a>待我签
                      <a class="sign-my-number">{{signNew.signMe}}</a>
                    </a>
                    <!-- <router-link to="/contractManagement"> 待我签
                      <a class="sign-my-number">{{signNew.signMe}}</a>
                    </router-link> -->

                  </div>
                </a>
              </div>
              <!-- 待他签 -->
              <div @mouseenter="showSignHe(2)" @mouseleave="showSignHe(0)" class="sign-news-infor">
                <a class="sign-her" v-show="signHe === 0">
                  <svg class="sign-her-icon" aria-hidden="true" color='black'>
                    <use class="green" xlink:href="#icon-CDdaitarenqianshu"></use>
                  </svg>
                  <div class="sign-her-words ">
                    <a>待他签
                      <a class="sign-her-number">{{signNew.signHe}}</a>
                    </a>
                  </div>
                </a>
                <a class="sign-her1 sign-style" v-show="signHe === 2" @click="SignMe('002')">
                  <svg class="sign-her-icon" aria-hidden="true" color='black'>
                    <use class="green" xlink:href="#icon-CDdaitarenqianshu"></use>
                  </svg>
                  <div class=" sign-style-words">
                    <a>待他签
                      <a class="sign-style-number">{{signNew.signHe}}</a>
                    </a>
                  </div>
                </a>
              </div>
              <!-- 已完成 -->
              <div @mouseenter="showSignFinish(3)" @mouseleave="showSignFinish(0)" class="sign-news-infor">
                <a class="sign-ok" v-show="signFinish === 0">
                  <svg class="sign-ok-icon" aria-hidden="true" color='black'>
                    <use class="green" xlink:href="#icon-yiwancheng"></use>
                  </svg>
                  <div class="sign-ok-words ">
                    <a>已完成
                      <a class="sign-ok-number ">{{signNew.signFinish}}</a>
                    </a>
                  </div>
                </a>
                <a class=" sign-ok1 sign-style" v-show="signFinish === 3" @click="SignMe('099')">
                  <svg class="sign-ok-icon" aria-hidden="true" color='black'>
                    <use class="green" xlink:href="#icon-yiwancheng"></use>
                  </svg>
                  <div class=" sign-style-words">
                    <a>已完成
                      <a class=" sign-style-number">{{signNew.signFinish}}</a>
                    </a>
                  </div>
                </a>
              </div>

              <!-- 草稿箱 -->
              <div @mouseenter="showSignDrafts(4)" @mouseleave="showSignDrafts(0)" class="sign-news-infor">
                <a class="sign-drafts" v-show="signDrafts === 0">
                  <svg class="sign-drafts-icon" aria-hidden="true" color='black'>
                    <use class="green" xlink:href="#icon-caogao"></use>
                  </svg>
                  <div class="sign-drafts-words">
                    <a>草稿箱
                      <a class="sign-drafts-number">{{signNew.signDrafts}}</a>
                    </a>
                  </div>
                </a>
                <a class="sign-drafts1 sign-style" v-show="signDrafts === 4" @click="SignMe('005')">
                  <svg class="sign-drafts-icon" aria-hidden="true" color='black'>
                    <use class="green" xlink:href="#icon-caogao"></use>
                  </svg>
                  <div class="sign-style-words">
                    <a>草稿箱
                      <a class="sign-style-number">{{signNew.signDrafts}}</a>
                    </a>
                  </div>
                </a>
              </div>
              <!-- tips -->
              <div class="sign-tip sign-news-infor" @mouseenter="showRecentNews(5)" @mouseleave="showRecentNews(0)">
                <a class="sign-tips" v-show="recentNews === 0">
                  <div class="sign-tips-icons">
                    <svg class="sign-tips-icon" aria-hidden="true" color='black'>
                      <use class="green" xlink:href="#icon-tishi1"></use>
                    </svg>
                    <a> 最新消息</a>
                  </div>
                  <div class="sign-tips-words">
                    <a v-if="userVerify" class="unverified">
                      <span v-if="hasEseal">3、去签署</span>
                      <span v-else>2、上传印章</span>
                    </a>
                    <a v-else class="unverified">1、去认证</a>
                  </div>
                </a>
                <a class="sign-tips1" v-show="recentNews === 5" @click="News">
                  <div class="sign-tips-icons">
                    <svg class="sign-tips-icon" aria-hidden="true" color='black'>
                      <use class="green" xlink:href="#icon-tishi1"></use>
                    </svg>
                    <a> 最新消息</a>
                  </div>
                  <div class="sign-tips-words">
                    <a v-if="userVerify" class="unverified">
                      <span v-if="hasEseal">3、去签署</span>
                      <span v-else>2、上传印章</span>
                    </a>
                    <a v-else class="unverified">1、去认证</a>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <!-- 最近合同 -->
          <div>
            <div class="contract">
              <span class="contract-world1">最近合同</span>

              <router-link class="contract-world2" to="/contractManagement">查看更多>>> </router-link>

            </div>
            <div>
              <div class="contract-my-words ">
                <div class="contCard" v-if="verify">
                  <!-- <a class="contract-my"> -->
                  <a class="contract-my-back">
                    <a class="lineheight">暂无合同信息！</a>
                  </a>
                  <!-- </a> -->
                </div>
                <div class="contract-my-text" v-for="(item,idx) in contracts.list">
                  <div class="contCard">
                    <!-- <a class="contract-my"> -->
                    <a class="contract-my-back">
                      <div class="conHead">
                        <span :title="item.verecordname">{{item.verecordname}} </span>
                        <div class="iconBtn">
                          <a class="search-infor-a" v-if="item.vtaskstr==='001'" @click="HandSign(item.verecordid)">手写</a>
                          <!-- <a class="search-infor-a" v-if="item.vtaskstr==='001'" @click="GoSign(item.verecordid)">手写</a> -->
                          <a class="search-infor-a" v-if="item.vtaskstr==='001'" @click="GoSign(item.verecordid)">签署</a>
                          <a class="search-infor-a" @click="Preview(item.verecordid)">预览</a>
                        </div>
                      </div>
                      <ul class="flex-space-between conBody">
                        <li style="width: calc(100% / 4)" :title="$valkey($param.contractState['s'+item.vtaskstr],'name')">
                          <span>状态</span>
                          <h4>{{$valkey($param.contractState['s'+item.vtaskstr],'name')}}</h4>
                        </li>
                        <li style="width: calc(100%   / 4)" :title="item.vcontractcode">
                          <span>合同编号</span>
                          <h4>{{item.vcontractcode}} </h4>
                        </li>
                        <li style="width: calc((100% - 200px) / 4)" :title="item.tcreatedate.substring(0,10)">
                          <span>发起时间</span>
                          <h4>{{item.tcreatedate.substring(0,10)}}</h4>
                        </li>
                        <li style="width: calc(100%  / 4)">
                          <span>发件人</span>
                          <h4>{{item.vcreateusercode === '' ? '--' : item.vcreateusercode}}</h4>
                        </li>
                      </ul>
                    </a>
                    <!-- </a> -->
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- 中间部分 end -->
      <!-- 尾部 -->
      <foot></foot>

    </div>
  </div>
</template>

<style scoped>
@import './PersonalCenter.css';
</style>
 
 <script src='./PersonalCenter.js'>
</script>
