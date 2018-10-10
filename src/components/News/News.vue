<template>
    <div id="person " class="news news-head">
        <persenalnav></persenalnav>
        <!-- 导航条 -->

        <div class="navigation-back"></div>

        <!-- 合同导航 -->
        <div class="navigation">
            <div class="contract-information-button ">
                <router-link to="/UploadContracts" class="search-infor-sig">签发文件</router-link>
            </div>
            <ul>
                <li>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="合同消息 " name="1">
                            <contract></contract>
                        </el-tab-pane>
                        <el-tab-pane label="其他消息 " name="2">
                            <other></other>
                        </el-tab-pane>
                        <el-tab-pane label="敏行公告 " name="3">
                            <announcement></announcement>
                        </el-tab-pane>
                    </el-tabs>
                </li>
            </ul>
        </div>

        <!-- 尾部 -->
        <foot></foot>
    </div>
</template>
<style scoped>
@import './News.css';
/* @import '../../assets/css/navs.css'; */
</style>
<style  >
@import './New.css';
</style>
<style>
</style>
 <script src='./News.js'>
</script>
