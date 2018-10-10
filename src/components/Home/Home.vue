<template>
    <div id="home">
        <div class="home-b">

            <div class="block">
                <template>
                    <el-carousel arrow="never" :interval="3000" trigger="click">
                        <!-- :interval="5000" -->
                        <el-carousel-item v-for="item in imgList" :key="item.id">

                            <!-- <img class="homePage" src="../../assets/images/首页_01.jpg" alt="首页"> -->
                            <img class="homePage" :src="item.idView">
                            <!-- <div v-html="item.html"> </div> -->
                            <div class="home-words">
                                <div class="homePageHead">
                                    <div class="homePageBtn1" v-if="!sessionFlag">
                                        <router-link to="/enter" class="login-log">登录</router-link>
                                        <router-link to="/login" class="login-log">注册</router-link>
                                    </div>
                                    <div class="homePageBtn1" v-if="sessionFlag">
                                        <router-link to="/personalCenter" class="login-log">个人中心</router-link>
                                    </div>
                                    <div class="homePageWords" v-html="item.html">

                                    </div>
                                </div>
                            </div>

                        </el-carousel-item>
                    </el-carousel>
                    <!-- <el-carousel arrow="always" trigger="click" indicator-position="none" class="width153" :interval="0">
                        <el-carousel-item :key="index" v-for="(item,index) in eseal.list">

                            <div draggable='true' @dragstart='dragStartHandler' :alt="item.vesealid">
                                <div class="removeIt"></div>
                                <img class="width153" :src="item.xsourceimgstr">
                            </div>
                        </el-carousel-item>
                    </el-carousel> -->
                </template>
            </div>
        </div>
        <!-- 导航条 -->
        <div class="homeHead" style="position: relative;margin-top:-55px;    z-index: 2;">
            <div class="navigationBar" id="searchBar" v-bind:class="{fixed:isFixed }">
                <div class=" navigationHead ">
                    <div class="nav-words ">
                        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#fff" active-text-color="#be926f">
                            <el-menu-item index="1">
                                <a class="navigation-Words activeLink">首页</a>
                            </el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">
                                    <a class="navigation-Words">产品中心 </a>
                                </template>
                                <el-submenu index="2-1">
                                    <template slot="title">
                                        <a class="navigation-Words" @click="SelectMe('1')">产品介绍 </a>
                                    </template>
                                    <el-menu-item index="2-5-1">
                                        <a class="navigation-Words" @click="SelectMe('1')">产品介绍 </a>
                                    </el-menu-item>
                                    <el-menu-item index="2-5-2">
                                        <a class="navigation-Words" @click="SelectMe('2')">电子签章 </a>
                                    </el-menu-item>

                                    <el-menu-item index="2-5-3">
                                        <a class="navigation-Words" @click="SelectMe('3')">电子签名 </a>
                                    </el-menu-item>

                                    <el-menu-item index="2-5-4">
                                        <a class="navigation-Words" @click="SelectMe('4')">电子印章 </a>
                                    </el-menu-item>
                                    <el-menu-item index="2-5-5">
                                        <a class="navigation-Words" @click="SelectMe('5')">电子合同 </a>
                                    </el-menu-item>

                                </el-submenu>
                                <el-menu-item index="2-2">
                                    <router-link to="/Service" class="navigation-Words">服务介绍 </router-link>
                                </el-menu-item>
                                <el-menu-item index="2-3">
                                    <router-link to="/Contract" class="navigation-Words">合同认证 </router-link>
                                </el-menu-item>
                                <el-menu-item index="2-4">
                                    <router-link to="/StorageData" class="navigation-Words">数据存证 </router-link>
                                </el-menu-item>
                            </el-submenu>
                            <!-- 解决方案 -->
                            <el-submenu index="3">
                                <template slot="title">
                                    <a class="navigation-Words">解决方案 </a>
                                </template>
                                <el-menu-item index="3-1">
                                    <router-link to="/BusinessUse" class="navigation-Words">行业应用 </router-link>
                                </el-menu-item>
                                <el-menu-item index="3-2">
                                    <router-link to="/Future" class="navigation-Words">未来应用 </router-link>
                                </el-menu-item>
                            </el-submenu>
                            <!-- 下载中心 -->
                            <el-submenu index="4">
                                <template slot="title">
                                    <a class="navigation-Words">下载中心 </a>
                                </template>
                                <el-menu-item index="4-1">
                                    <router-link to="/DownloadApp" class="navigation-Words">APP下载 </router-link>
                                </el-menu-item>

                            </el-submenu>
                            <!-- 开发平台 -->
                            <el-menu-item index="5">
                                <router-link to="/home" class="navigation-Words">开发平台</router-link>
                            </el-menu-item>
                            <el-menu-item index="6" style=" float: right;">
                                <div>
                                    <div class="navigationBtn" v-if="!sessionFlag">
                                        <router-link to="/enter" class="login-log">登录</router-link>
                                        <router-link to="/login" class="login-log">注册</router-link>
                                    </div>
                                    <div class="navigationBtn" v-if="sessionFlag">
                                        <router-link to="/personalCenter" class="login-log">个人中心</router-link>
                                    </div>
                                </div>
                            </el-menu-item>
                        </el-menu>
                    </div>
                </div>
            </div>
        </div>

        <!-- 合同服务 -->
        <div class="serviceFat">
            <div class="serviceFirst">
                <div class="serviceHead">
                    <ul>
                        <li class="width300">
                            <h1 class="world3">专业的电子合同服务</h1>
                        </li>
                        <li class="img353">
                            <img class="serviceLine" src="../../assets/images/服务02.png">
                        </li>
                    </ul>

                </div>
                <div class="serviceBody">
                    <a class="service">
                        <svg class="icon" aria-hidden="true" color='black'>
                            <use class="green" xlink:href="#icon-weibiaoti-"></use>
                        </svg>
                        <h3 class="world1">合同签署</h3>
                        <h5 class="world2">无需面对面，极速签发有效电子合同; 实名认证+数字证书，确保身份真实; 领先的数字签名技术，有效防篡改 </h5>
                    </a>
                    <a class="service">
                        <svg class="icon" aria-hidden="true" color='black'>
                            <use class="blue" xlink:href="#icon-contract"></use>
                        </svg>
                        <h3 class="world1">合同管理</h3>
                        <h5 class="world2">提供合同检索、归档、下载等免费功能; 降低合同管理的仓储成本和人力成本; 海量存储空间，合同管理一站解决 </h5>
                    </a>
                    <a class="service">
                        <svg class="icon" aria-hidden="true" color='black'>
                            <use class="yellow" xlink:href="#icon-bianji"></use>
                        </svg>
                        <h3 class="world1">在线编辑</h3>
                        <h5 class="world2">云端合同编辑，省心又省时;合同模板上传，在线修改更方便; 500+合 同模板，满足各类签署需求 </h5>
                    </a>
                    <a class="service">
                        <svg class="icon" aria-hidden="true" color='black'>
                            <use class="red" xlink:href="#icon-qukuailian"></use>
                        </svg>
                        <h3 class="world1">区块链存</h3>
                        <h5 class="world2">领先的区块链存证平台;为客户提供专业的电子合同证据链; 与微软(中国) 、Onchain联合成立法链 </h5>
                    </a>
                </div>
            </div>
        </div>
        <!-- 高效 -->
        <div class=" efficientFath  ">
            <div class="serviceHead">
                <ul>
                    <li class="width300">
                        <h1 class="world3 colwhite">敏行,让签约更高效</h1>
                    </li>
                    <li class="img353">
                        <img class="serviceLine" src="../../assets/images/服务02.png">
                    </li>
                </ul>
            </div>
            <div class="efficientBody">
                <div class="efficientImg">
                </div>
                <div class="efficientChi">
                    <a class="efficient1">
                        <h3 class="world1">便捷高效</h3>
                        <h5 class="world2">支持电脑网页、手机网页、微<br>信、APP随时签发、查阅<br>合同，高效协同。 </h5>
                    </a>
                    <a class="efficient2">
                        <h5 class="world2">严格遵照《电子签名法》<br>相关规定，平台电子合同法<br>律效力获得仲裁/司法机构认可。</h5>
                        <h3 class="world1">合法合规</h3>
                    </a>
                    <a class="efficient3">

                        <h3 class="world1">安全稳定</h3>
                        <h5 class="world2">领先的信息运维机制严守数据<br>安全；数据传输军用级别<br>加密防止信息泄露。</h5>
                    </a>
                    <a class="efficient4">

                        <h5 class="world2">
                            标准API接入，完美兼<br>容各类系统。敏行签约平台<br>在线 签署，满足个性化需求。
                        </h5>
                        <h3 class="world1">应用广泛</h3>
                    </a>
                </div>
            </div>
        </div>
        <!-- 丰富的行业应用场景 -->
        <div class="applicationFath">
            <!-- <div class="application serviceFirst"> -->
            <div class="serviceHead">
                <ul>
                    <li class="width300">
                        <h1 class="world3">丰富的行业应用场景</h1>
                    </li>
                    <li class="img353">
                        <img class="serviceLine" src="../../assets/images/服务02.png">
                    </li>
                </ul>
            </div>
            <div class="applicationBody">
                <div class="applicationBody1">
                    <a class="application1 applicationWords" @click="ChooseMe('1')">
                        <svg class="applicationIcon " aria-hidden="true" color='black'>
                            <use class="white" xlink:href="#icon-hulianwangjinrong"></use>
                        </svg>
                        <h2 class="world1 names">金融行业</h2>
                    </a>
                    <a class="application2 applicationWords" @click="ChooseMe('2')">
                        <svg class="applicationIcon" aria-hidden="true" color='black'>
                            <use class="white" xlink:href="#icon-dianshang1"></use>
                        </svg>
                        <h2 class="world1 names">电子商务</h2>
                    </a>
                    <a class="application3 applicationWords" @click="ChooseMe('3')">
                        <svg class="applicationIcon" aria-hidden="true" color='black'>
                            <use class="white" xlink:href="#icon-chuantongqiye"></use>
                        </svg>
                        <h2 class="world1 names">传统企业</h2>
                    </a>
                </div>
                <div class="applicationBody2">
                    <a class="application4 applicationWords" @click="ChooseMe('4')">
                        <svg class="applicationIcon" aria-hidden="true" color='black'>
                            <use class="white" xlink:href="#icon-renliziyuan"></use>
                        </svg>
                        <h2 class="world1 names">人力资源</h2>
                    </a>
                    <a class="application5 applicationWords" @click="ChooseMe('5')">
                        <svg class="applicationIcon" aria-hidden="true" color='black'>
                            <use class="white" xlink:href="#icon-kuaidi1"></use>
                        </svg>
                        <h2 class="world1 names">物流快递</h2>
                    </a>
                    <router-link to="/BusinessUse" class="application6 applicationWords">
                        <svg class="applicationIcon" aria-hidden="true" color='black'>
                            <use class="white" xlink:href="#icon-xiayibu"></use>
                        </svg>
                        <h2 class="world1">查看更多</h2>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="home-navigation-foot">
            <div class="home-navigation-foot-words">
                <a> copyright © 2016-2017 江苏敏行信息技术有限公司 All rights reserved</a>
            </div>
        </div>
    </div>
</template>
<style >
@import './Home.css';
</style>
  <style >
@import '../../assets/css/HomeRepir.css';
</style>  
<script src='./Home.js'></script>
