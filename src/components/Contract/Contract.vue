<template>
    <div id="person" v-loading="loading.upload" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">
        <!-- 导航条 -->
        <homenav></homenav>
        <!-- 中间部分 -->
        <div class="contract-body ">
            <h2>
                合同验签
            </h2>
            <div class="upload-border">
                <div class="summary">
                    <ul>
                        <li>

                        </li>
                        <li>
                            <span>
                                检测合同签名是否被篡改，电子合同是否真实有效
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="upload-infor ">
                    <div class="uploadFile ">
                        <!-- 添加合同 -->
                        <ul>

                            <li>
                                <div class="file" v-bind:class="{ backgroung: isBackgroung, 'backgroungWhite': hasError }">
                                    <input type="file" name="file" @change="FileChange">

                                </div>
                            </li>
                            <li>
                                <h5 style="margin-top: 10px;     word-wrap: break-word;" v-if="isUpload"> {{file.name}} </h5>
                            </li>

                        </ul>

                    </div>
                </div>
                <div class="SignBtn">
                    <a v-if="uploaded" class="login-log" @click="SignInfo"> 验签 </a>
                    <a v-else class="login-btn"> 验签 </a>
                </div>

            </div>
            <el-dialog title="验签结果" :visible.sync="SignInfor" :before-close="handleClose">
                <div>
                    <div class="result-content">
                        <p class="title">
                            <i class="icon-play">
                                <svg class="navigationIcon " aria-hidden="true" color='black'>
                                    <use class="white" style="margin-top20px" xlink:href="#icon-qianming"></use>
                                </svg>
                            </i>基本信息</p>
                        <table class="ui padded table file-info">
                            <tbody>
                                <tr>
                                    <td>文件名称：{{file.name}} </td>
                                    <!-- <td>文件ID：</td> -->
                                </tr>
                                <tr>
                                    <td class="validity">文件有效性：
                                        <span class="ui red header">“文档未被修改"</span>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                        <p class="title">
                            <i class="icon-play">
                                <svg class="navigationIcon " aria-hidden="true" color='black'>
                                    <use class="white" xlink:href="#icon-qianming"></use>
                                </svg>
                            </i>签署信息（文件中共有
                            <span class="number">{{signInfoLength}}</span> 个签章）</p>
                        <table v-for="(item,idx) in signInfoList" class="ui basic table sign-info">
                            <tbody>
                                <tr>
                                    <td>签署方：</td>
                                    <td>{{item.subject}}</td>
                                </tr>
                                <tr>
                                    <td>证书颁发机构：</td>
                                    <td>{{item.issuer}}</td>
                                </tr>
                                <tr>
                                    <td>证书有效期：</td>
                                    <td>{{item.certValidTime}}</td>
                                </tr>
                                <tr>
                                    <td>签名者信息：</td>
                                    <td> 签名者信息如下列表，其身份包含在您的可信任证书列表中，且其所有父证书均是可信任证书。</td>
                                </tr>
                                <tr>
                                    <td>电子印章：</td>
                                    <td><img :src="item.picData"></td>
                                </tr>
                                <tr>
                                    <td>印章有效期：</td>
                                    <td> {{item.sealValidStart == null && item.sealValidEnd == null ? "": item.sealValidStart +" 至 "+item.sealValidEnd}}</td>
                                </tr>
                                <!-- <tr>
                                    <td>签署平台：</td>
                                    <td></td>
                                </tr> -->
                                <tr>
                                    <td>签名算法：</td>
                                    <td>{{item.sigAlg}}</td>
                                </tr>
                                <tr>
                                    <td rowspan="3">时间戳：</td>
                                    <td>是否使用时间戳：{{item.hasTimeToken==1 ? "是":"否"}}</td>
                                </tr>
                                <tr>
                                    <td class="no-border">签署时间：{{item.signDateTime}}</td>
                                </tr>
                                <tr>
                                    <td class="no-border">时间戳是否有效：{{item.hasTimeToken==1 ? "是":"否"}}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <!-- <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body>
                </el-dialog> -->
                <!-- <div slot="footer" class="dialog-footer">
                    <el-button @click="outerVisible = false">取 消</el-button>
                    <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
                </div> -->
            </el-dialog>
            <div class="upload-border padbtn20 ">

                <div class="ui container">
                    <h3 class="ui    ">合同验签流程：</h3>
                    <div class="ui items">
                        <div class="item">
                            <div class="content">
                                <p class="supplement">1、下载合同</p>
                                <div class="description">
                                    <p>登录
                                        <strong>敏行签约云平台</strong>，在合同列表栏下载需要验签的合同文件（同时支持验证从第三方平台下载的合同）</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ui items">
                        <div class="item">
                            <div class="content">
                                <p class="supplement">2、上传PDF文件</p>
                                <div class="description">
                                    <p>将合同PDF文件拖拽至上传区域内，或点击
                                        <strong>“上传PDF”</strong>按钮进行上传</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ui items">
                        <div class="item">
                            <div class="content">
                                <p class="supplement">3、点击验签，查看结果</p>
                                <div class="description">
                                    <p>查看验签结果</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <!-- 尾部 -->
        <foot></foot>

    </div>
</template>
<script src="./Contract.js"></script>
<style scoped>
@import './Contract.css';
</style>
<style  >
@import '../../assets/css/HomeRepir.css';
</style>
