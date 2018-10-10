<template >
  <div id="person" class="Sign">
    <!-- 导航文字 -->
    <persenalnav></persenalnav>
    <!-- 导航条 -->

    <div class="navigation-back"></div>

    <div class="contract-body demo">
      <!--合同印章 -->
      <div class="contract-my-seal  " v-loading="loading.seal" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">

        <ul class="margin10 ul-height">
          <li class="Sign-information-button margin10">
            <div>

              <a class="search-infor-button" @click="$router.back(-1)">返回</a>
              <a class="search-infor-button" @click="Save">签署</a>
              <a class="search-infor-button">存草稿</a>
            </div>
          </li>
          <li class="margin10">
            <!-- 添加 印章管理 -->
            <div class="append-infor">
              <div class="contract-infor-back"></div>
              <span id="activeLink"> 添加</span>
              <router-link to="accountManagement/signature/seal" class="append-infor-button">印章管理</router-link>
              <div class="contract-infor-squar ">
              </div>
            </div>
          </li>
          <li class="margin10">
            <!-- 提示文字 -->
            <div class="append-infor-words">
              鼠标点击以下签章/日期， 按住并拖放到文件内容中。
            </div>
          </li>
          <li class="margin10">
            <!-- 印章图片 -->
            <div class="usersign ghost mySign  ng-scope ng-isolate-scope Sign-my-code">
              <div class="wrap" style="height:153px;backgroung:red">
                <div id="slide">
                  <ul class="list">
                    <li>
                      <el-carousel arrow="always" trigger="click" indicator-position="none" class="width-153" :interval="0">
                        <el-carousel-item :key="index" v-for="(item,index) in eseal.list">

                          <div draggable='true' @dragstart='dragStartHandler' :alt="item.vesealid" class="midlle-img">

                            <div class="removeIt"></div>
                            <img class="width153" :src="item.xsourceimgstr">

                          </div>
                        </el-carousel-item>
                      </el-carousel>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="margin10">
            <!-- 默认印章选择 -->
            <div class="default-seal">
              默认印章
            </div>
          </li>
        </ul>
      </div>

      <!--文件详情 -->
      <div class="file-details ">
        <ul>
          <li>
            <div class="file-my-details">
              <div class="file-my-detail">
                <div class="file-my-squaer"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 合同详情 -->
      <div class="contract-details">
        <div class="contract-my-back" ref="myButton" @dragstart.prevent v-loading="loading.contract" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">
          <div class="contract-my-back1" v-bind:style="{ height:contract.height+'px' }" @drop="dropHandler" @dragover.prevent @mousemove="mouseMovingHandler" @mouseup="mouseUpHandler" @mousedown="mouseDownHandler">
            <div class='sign-animate' v-for="node in dragNodes" v-html="node.html" :guid="node.guid" :vid="node.vid" @click="removeImg" @dragstart.prevent :style="{ position:'absolute', width:'153px',left:node.left +'px',top:node.top+'px' }">
            </div>
            <div class="width800" v-for="(item,index) in imgList" :style="{backgroundImage: 'url(' + item + ')', backgroundSize:'contain'}"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <foot></foot>
  </div>
</template>
<style scoped>
@import './Sign.css';
</style>
 <style  >
@import './SignNav.css';
</style>
<script src='./Sign.js'></script>
  

 