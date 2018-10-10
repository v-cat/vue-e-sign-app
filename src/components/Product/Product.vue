<template>
    <div id="person">
        <!-- 导航条 -->
        <homenav></homenav>
        <!-- 背景图  -->
        <div class="product-body">
            <div class="banner ie8-bg">
                <div class="jumbotron container">
                    <div class="slider-slogan text-left">
                        <h1>
                            <span class="visible-sm-inline visible-xs-inline"> 敏行签约为更多客户提供高效安全的电子化签约模式</span>
                            <!-- <br class="visible-sm visible-xs"> -->
                        </h1>
                        <h2>
                            <p>
                                电子签章，电子合同，实体章管控，数据存证，防伪打印，私有化部署，敏行签约系统性帮您解决 <br>各类用印需求，提升您的用印效率和合法合规性！ <br>
                            </p>
                        </h2>
                        <div class="btn btn-primary " type="button">
                            <a>免费试用</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 二级导航条和内容 -->
            <div v-cloak>
                <tabs v-model="activeKey">
                    <pane label="产品介绍" name="1">
                        <!-- 标签yi的内容 dddd -->
                        <introduce> </introduce>
                    </pane>
                    <pane label="电子签章" name="2">
                        <eleSeal> </eleSeal>
                    </pane>
                    <pane label="电子签名" name="3">
                        <eleSign>

                        </eleSign>
                    </pane>
                    <pane label="电子印章" name="4">
                        <seal></seal>
                    </pane>
                    <pane label="电子合同" name="5">
                        <eleContract>

                        </eleContract>
                    </pane>

                </tabs>
            </div>
        </div>

        <foot></foot>

    </div>
</template>
 <style scoped>
@import '../../assets/css/public.css';
@import './Product.css';
</style>
 <style>
/* @import '../../assets/css/HomeRepir.css'; */
@import './ProductSlot.css';
</style>
<script src='./Product.js'>
</script>

