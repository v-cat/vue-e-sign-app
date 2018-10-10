<template>
    <div id="person" class="business">
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
            <!-- 3 产品功能 -->
            <div class="business-wid business-gray  business-sign">

                <div class="business-wid-178  business-produce-rd animate_tab animate" data-atclass="animate">
                    <div class="e_signature-title marginbtm30">
                        <router-link class="navigation-Words" to="BusinessUse">行业应用</router-link>
                        <span>/</span>
                        <span class="navigation-Words color-words">{{business.name}}</span>

                    </div>
                    <!-- 二级导航条和内容 -->
                    <div class="business-tabs margintop30">
                        <el-tabs :tab-position="tabPosition" v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="金融行业" name="1">
                                <financial> </financial>
                            </el-tab-pane>
                            <el-tab-pane label="电子商务" name="2">
                                <ebusiness>
                                </ebusiness>
                            </el-tab-pane>
                            <el-tab-pane label="传统企业" name="3">
                                <traditional> </traditional>
                            </el-tab-pane>
                            <el-tab-pane label="人力资源" name="4">
                                <humanResource> </humanResource>
                            </el-tab-pane>
                            <el-tab-pane label="物流快递" name="5">
                                <express></express>
                            </el-tab-pane>
                            <el-tab-pane label="旅游行业" name="6">
                                <travel></travel>
                            </el-tab-pane>
                            <el-tab-pane label="保险行业" name="7">
                                <insurance></insurance>
                            </el-tab-pane>
                            <el-tab-pane label="建筑建材" name="8">
                                <architecture></architecture>
                            </el-tab-pane>
                            <el-tab-pane label="银行及贷款" name="9">
                                <bank></bank>
                            </el-tab-pane>
                            <el-tab-pane label="医疗健康行业" name="10">
                                <medical></medical>
                            </el-tab-pane>
                            <el-tab-pane label="政府及事业单位" name="11">
                                <government></government>
                            </el-tab-pane>
                            <el-tab-pane label="公共事业" name="12">
                                <commonality></commonality>
                            </el-tab-pane>

                        </el-tabs>
                    </div>
                </div>
            </div>

        </div>

        <foot></foot>

    </div>
</template>
 <style scoped>
@import '../../assets/css/BusinessIntroduce.css';
@import './Business.css';
@import '../../assets/css/BusinessPublic.css';
</style>
 <style>
@import './BusinessNav.css';
@import '../../assets/css/HomeRepir.css';
</style>
<script src='./Business.js'>
</script>


