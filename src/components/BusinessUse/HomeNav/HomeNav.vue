<template>
    <div class="homenav">
        <!-- 导航条 -->
        <div class="header" id="searchBar">
            <!-- <div class="navigation-back"></div> -->
            <!-- <div style="position: relative;"> -->
            <div class="navigationBar" id="searchBar" v-bind:class="{fixed:isFixed }">
                <div class=" navigationHead ">
                    <div class="nav-words ">
                        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#fff" active-text-color="#be926f">
                            <el-menu-item index="1">
                                <router-link to="/home" class="navigation-Words activeLink">首页</router-link>
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
                                    <!-- <el-menu-item index="2-4-3">电子合同</el-menu-item> -->
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
                            <el-menu-item index="5">
                                <a class="navigation-Words">开发平台</a>
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
            <!-- </div> -->
        </div>
    </div>
</template>
 <style scoped>
@import '../../../assets/css/public.css';
@import './HomeNav.css';
</style>
 <style>
@import '../../../assets/css/HomeRepir.css';
</style>
<script src='./HomeNav.js'></script>

