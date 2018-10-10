<template>
    <div id="person">
        <!-- 导航条 -->
        <homenav></homenav>
        <!-- 背景图  -->
        <div class="product-body product-introduction">
            <!-- <div class="navigationImg">
                <img class="homePageImg" src="../../assets/copyImg/8.png">
                <div class="lx-container">
                    <div class="product-animation-new-hu slideinblurredright">
                        <div class="row product-font-new-hu">科技创新的产物——电子合同。</div>
                        <p class="product-font-size-new-hu">告别纸质合同，拥抱电子合同</p>
                    </div>
                </div>
            </div> -->
            <div class="banner ">
                <div class="jumbotron container">
                    <div class="text-left">
                        <h1>
                            <span class="visible-sm-inline visible-xs-inline">敏行签约为您提供安全可靠的电子签名及印控方案</span>
                            <!-- <br class="visible-sm visible-xs"> -->
                        </h1>
                        <h2>
                            <p>
                                敏行签约无缝对接各业务管理软件系统，不改变现有的审批签署模式，给政府及企业客户提供<br>最流畅的电子化签约和印章管控体验！
                            </p>
                        </h2>
                        <div class="btn btn-primary " type="button">
                            <a>免费试用</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="trade" class=" screen-common for-future  ">
                <a name="target-trade" class="target-a at-top"></a>
                <div class="screen-title">
                    <h2 class="dark-grey">
                        敏行签约在各行业的应用
                    </h2>
                    <p>
                        敏行签约助力各行业轻松实现签约模式革新，释放企业发展新动力
                    </p>
                </div>
                <div class="minx-wid  minx-sign">
                    <div class="minx-wid-178  minx-produce-rd animate_tab animate" data-atclass="animate">
                        <div class="e_contract-value">
                            <ul>
                                <li>
                                    <a class="business-link" @click="SelectMe('1')">
                                        <div class="e_contract-value-img"></div>
                                        <span class="e_contract-value-title">金融行业</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="business-link" @click="SelectMe('2')">
                                        <div class="e_contract-value-img"></div>
                                        <span class="e_contract-value-title">电子商务</span>
                                        <!-- <span class="e_contract-value-content">收件人签署，支持多种实名身份验证方式（手机验证，邮件验证，身份验证，视频验证），身份确认安全可信。</span> -->
                                    </a>
                                </li>
                                <li>
                                    <a class="business-link" @click="SelectMe('3')">
                                        <div class="e_contract-value-img"></div>
                                        <span class="e_contract-value-title"> 传统企业</span>
                                        <!-- <span class="e_contract-value-content">丰富的文档签名和字段编辑功能，个性化定义签名（手写），字体和字段随心定义，多种字体和大小、颜色随心可换，可选。</span> -->
                                    </a>
                                </li>
                                <li>
                                    <a class="business-link" @click="SelectMe('4')">
                                        <div class="e_contract-value-img"></div>
                                        <span class="e_contract-value-title">人力资源</span>
                                        <!-- <span class="e_contract-value-content">发件方要求填写所需内容及签名字段，收件方签署具有可视导航工具，完成签名内容、日期，各类字段的设定一步搞定。</span> -->
                                    </a>
                                </li>
                                <li>
                                    <a class="business-link" @click="SelectMe('5')">
                                        <div class="e_contract-value-img"></div>
                                        <span class="e_contract-value-title">物流快递</span>
                                        <!-- <span class="e_contract-value-content">全面支持最新iOS11、Android8.0+移动客户端操作系统、iPad、iPhone、Android平板电脑和Android手机，无约束自由签署。</span> -->
                                    </a>
                                </li>
                                <li>
                                    <a class="business-link" @click="SelectMe('6')">
                                        <div class="e_contract-value-img"></div>
                                        <span class="e_contract-value-title"> 旅游行业</span>
                                        <!-- <span class="e_contract-value-content">基于区块链技术，合同签署完成后，只需将合同加密数据存放至区块链，则任何人都不可能对数据进行篡改，从而全面保障合同的法律效力。</span> -->
                                    </a>
                                </li>
                                <li>
                                    <a class="business-link" @click="SelectMe('7')">
                                        <div class="e_contract-value-img"></div>
                                        <span class="e_contract-value-title"> 保险行业</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="business-link" @click="SelectMe('8')">
                                        <div class="e_contract-value-img"></div>
                                        <span class="e_contract-value-title"> 建筑建材</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="business-link" @click="SelectMe('9')">
                                        <div class="e_contract-value-img"></div>
                                        <span class="e_contract-value-title"> 银行及贷款</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="business-link" @click="SelectMe('10')">
                                        <div class="e_contract-value-img"></div>
                                        <span class="e_contract-value-title"> 医疗健康行业</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="business-link" @click="SelectMe('11')">
                                        <div class="e_contract-value-img"></div>
                                        <span class="e_contract-value-title"> 政府及事业单位</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="business-link" @click="SelectMe('12')">
                                        <div class="e_contract-value-img"></div>
                                        <span class="e_contract-value-title"> 公共事业</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>
 <style scoped>
@import '../../assets/css/public.css';
@import './BusinessUse.css';
@import '../../assets/css/PBIntroduce.css';
</style>
 <style>
/* @import './BusinessNav.css'; */
@import '../../assets/css/HomeRepir.css';
</style>
<script src='./BusinessUse.js'>
</script>



