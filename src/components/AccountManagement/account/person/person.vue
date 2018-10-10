<template>
    <div class="person person-demo">
        <div class="text-center">
            <div class="col-xs-2 ">
                <div class="service-border-hu">
                    <div class="box-head-h">单份合同签署</div>
                    <div class="row service-box-pad-hu service-height-hu">
                        <div class="row manage-info-mar-h">
                            <div class="row display-inline">
                                <b class="text-l">￥</b>
                                <div class="text-r">3.0</div>
                            </div>
                        </div>
                        <div class="service-fw-hu">
                            <div class="row ">签署服务：
                                <b>1</b>次</div>
                            <div class="row service-mar-hu">有效期：永久有效</div>
                        </div>
                        <div class="row">
                            <router-link to="/Buy" class="service-btn-hu buy-btn-hu">立即购买</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-2 ">
                <div class="service-border-hu">
                    <div class="box-head-h">个人A套餐</div>
                    <div class="row service-box-pad-hu service-height-hu">
                        <div class="row manage-info-mar-h">
                            <div class="row display-inline">
                                <b class="text-l">￥</b>
                                <div class="text-r">50.0</div>
                            </div>
                        </div>
                        <div class="service-fw-hu">
                            <div class="row">签署服务：
                                <b>20</b>次</div>
                            <div class="row service-mar-hu">有效期：永久有效</div>
                        </div>
                        <div class="row">
                            <router-link to="/Buy" class="service-btn-hu buy-btn-hu">立即购买</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-2 ">
                <div class="service-border-hu">
                    <div class="box-head-h">个人B套餐</div>
                    <div class="row service-box-pad-hu service-height-hu">
                        <div class="row manage-info-mar-h">
                            <div class="row display-inline">
                                <b class="text-l">￥</b>
                                <div class="text-r">98.0</div>
                            </div>
                        </div>
                        <div class="service-fw-hu">
                            <div class="row">签署服务：
                                <b>50</b>次</div>
                            <div class="row service-mar-hu">有效期：永久有效</div>
                        </div>
                        <div class="row">
                            <router-link to="/Buy" class="service-btn-hu buy-btn-hu">立即购买</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-2 ">
                <div class="service-border-hu">
                    <div class="box-head-h">个人C套餐</div>
                    <div class="row service-box-pad-hu service-height-hu">
                        <div class="row manage-info-mar-h">
                            <div class="row display-inline">
                                <b class="text-l">￥</b>
                                <div class="text-r">298.0</div>
                            </div>
                        </div>
                        <div class="service-fw-hu">
                            <div class="row">签署服务：
                                <b>200</b>次</div>
                            <div class="row service-mar-hu">有效期：永久有效</div>
                        </div>
                        <div class="row">
                            <router-link to="/Buy" class="service-btn-hu buy-btn-hu">立即购买</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-2 ">
                <div class="service-border-hu">
                    <div class="box-head-h">个人D套餐</div>
                    <div class="row service-box-pad-hu service-height-hu">
                        <div class="row manage-info-mar-h">
                            <div class="row display-inline">
                                <b class="text-l">￥</b>
                                <div class="text-r"> 998.0</div>
                            </div>
                        </div>
                        <div class="service-fw-hu">
                            <div class="row">签署服务：
                                <b>800</b>次</div>
                            <div class="row service-mar-hu">有效期：永久有效</div>
                        </div>
                        <div class="row">
                            <!-- @click="SignMe('002')" -->
                            <a class="service-btn-hu buy-btn-hu" @click="SignMe('002')">立即购买</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 <style>
@import './person.css';
</style>
<script src='./person.js'></script>