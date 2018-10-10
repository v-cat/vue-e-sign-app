
<template>
    <div class="overall" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">
        <!-- 账户总览 -->
        <div class="row">
            <div class="lvx-col lvx-col-12">
                <!-- <h5>签署服务</h5> -->
                <span>剩余文件份数：
                    <strong>{{buy}}</strong>
                </span><br>
                <span>
                    已使用文件份数：
                    <strong>{{use}}</strong>
                </span>
            </div>
        </div>
        <div class="circle">
            <el-progress type="circle" :percentage="percentage" color="#be926f" width="150" :stroke-width="12"> </el-progress>
        </div>
    </div>
</template>
<style scoped>
</style>
<style  >
@import './overall.css';
</style>
<script src='./overall.js'></script>