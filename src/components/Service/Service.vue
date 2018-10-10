<template>
    <div id="person Service">
        <!-- 导航条 -->
        <homenav></homenav>
        <!-- 背景图  -->
        <div class="product-body product-introduction">
            <div class="navigationImg">
                <img class="homePageImg" src="../../assets/copyImg/8.png">
                <div class="lx-container">
                    <div class="product-animation-new-hu slideinblurredright">
                        <div class="row product-font-new-hu">科技创新的产物——电子合同。</div>
                        <p class="product-font-size-new-hu">告别纸质合同，拥抱电子合同</p>
                    </div>
                </div>
            </div>
            <!-- 二级导航条和内容 -->
            <!-- 快捷服务 -->
            <section class="row product-tab2-bg">
                <div class="lx-container">
                    <div class="minx-wid  ">
                        <div class="minx-wid-178">
                            <div class="row text-center product-quick-new-hu">
                                快捷服务
                                <hr class="product-hr-new-hu"></div>
                            <div class="row text-center">
                                <div class="col-xs-6">
                                    <div class="product-padding-new-hu"><img src="../../assets/copyImg/9.png" width="333px" height="109px"></div>
                                    <div class="row col-xs-6 col-xs-offset-3">
                                        <div class="row service-pad">
                                            <p class="product-p-new-hu">公证服务</p>
                                        </div>
                                        <div class="row service-pad text-left">
                                            <p class="product-p1-new-hu">对已签合同进行存证处存证，在法律纠纷</p>
                                            <p class="product-p1-new-hu">时，公证处出具具有法律效力的公证文书</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-6">
                                    <div class="product-padding-new-hu"><img src="../../assets/copyImg/10.png" width="333px" height="104px"></div>
                                    <div class="row col-xs-6 col-xs-offset-3 service-use">
                                        <div class="row service-pad  ">
                                            <p class="product-p-new-hu">合同模板</p>
                                            <a class="product-a-new-hu">使用模板</a>
                                        </div>
                                        <div class="row service-pad  text-left">
                                            <p class="product-p1-new-hu">不断完善的合同模板库，零成本的生成你</p>
                                            <p class="product-p1-new-hu">的专属合同，有效规避潜在法律风险</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 2基础服务 -->
            <div class="minx-wid  ">
                <div class="minx-wid-178">
                    <!-- <h3 class="minx-produce-bt animate_tab animate01 animate" data-atclass="animate">产品优势</h3> -->
                    <div class="row text-center product-quick-new-hu minx-produce-bt animate_tab animate01 animate">
                        基础服务
                        <hr class="product-hr-new-hu"></div>
                    <div class="minx-produce-ys animate_tab animate" data-atclass="animate">
                        <ul>
                            <li class="two-flash animate01">
                                <span class="minx-img one"></span>
                                <i>实名认证</i>
                                <p class="minx-produce-ba product-p3-new-hu">对接公安部身份实名系统，并配合人脸识 别技术；对用户真实身份进行验证</p>

                            </li>
                            <li class="two-flash animate02">
                                <span class="minx-img two"></span>
                                <i>电子签名</i>
                                <p class="minx-produce-ba product-p3-new-hu">用户手动设置签名+中国金融认证中心颁 发的数字证书=具有法律效力的电子签名

                                </p>

                                </p>
                            </li>
                            <li class="mg-none two-flash animate03">
                                <span class="minx-img three"></span>
                                <i>数据加密</i>
                                <p class="minx-produce-ba product-p3-new-hu"> 敏行签约提供和支付宝相同的金融级别的 数据加密服务，保障合同数据的安全性

                                </p>

                            </li>
                            <li class=" two-flash animate04">
                                <span class="minx-img four"></span>
                                <i>合同验真</i>
                                <p class="minx-produce-ba product-p3-new-hu"> 提供检测合同是否被篡改，文档签名是否 真实有效的服务

                                </p>
                            </li>
                            <li class=" two-flash animate05">
                                <span class="minx-img five"></span>
                                <i>法律服务</i>
                                <p class="minx-produce-ba product-p3-new-hu"> 董事会旗下的律所整合线下1500名资深 律师，为用户提供标准化的合同文件类、 法律咨询类服务

                                </p>
                            </li>
                            <li class="mg-none two-flash animate06">
                                <span class="minx-img six"></span>
                                <i>保险服务

                                </i>
                                <p class="minx-produce-ba product-p3-new-hu"> 敏行签约引入保险机制,与世界第二大保险 公司——美亚保险达成战略合作，为用户 信息安全再添一重障

                                </p>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 产品价格 -->
            <section class="row product-tab4-bg product-tab2-bg">
                <div class="lx-container">
                    <div class="row text-center product-quick-new-hu">
                        产品价格
                        <hr class="product-hr-new-hu"></div>
                    <div class="row text-center product-center">
                        <!-- <div class="btnClass btnActive">企业用户</div>
                        <div class="btnClass">个人用户</div> -->
                        <el-tabs v-model="activeName2" type="card">
                            <el-tab-pane name="first" label="企业用户">
                                <company></company>
                            </el-tab-pane>
                            <el-tab-pane name="second" label="个人用户">
                                <person></person>
                            </el-tab-pane>

                        </el-tabs>

                    </div>

                </div>
            </section>
        </div>

        <foot></foot>

    </div>
</template>
 <style scoped>
@import '../../assets/css/public.css';

@import '../../assets/css/PBIntroduce.css';
/* @import '../../assets/css/personPrice.css'; */
</style>
 <style>
/* @import '../../assets/css/personPrice.css'; */
@import './Service.css';
@import './ServicePrice.css';
@import '../../assets/css/HomeRepir.css';
</style>
<script src='./Service.js'>
</script>

