
<template>
    <div class="seal seal-card" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">

        <!-- 印章图片   -->
        <div class="sealCard flex-end seal-my-code1  " v-if="delect">
            暂无印章信息!
        </div>
        <div class="sealCard flex-end seal-my-code fleft" v-for="(item,idx) in list" :style="{'background-image': 'url(\'' + item['xsourceimgstr'] + '\')' }">
            <!-- 删除 -->
            <div class="contract-my-code3">
                <svg class="icondelect " aria-hidden="true" color='black' @click.stop="ApiDelete(item,idx)">
                    <use class="white" xlink:href="#icon-quxiao1"></use>
                </svg>
            </div>
            <div class="contract-my-code2 margin138">
                <span @click.stop="ApiDefault(item,idx)" v-if="item.ldefault!=1">设为默认</span>
                <span v-if="item.ldefault==1" style="color:red">默认印章</span>
            </div>
        </div>
    </div>
</template>
<style  >
@import './seal.css';
</style>
<script src='./seal.js'></script>