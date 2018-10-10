<template>
    <div id="person" class="StorageData">
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

            <!-- 1 电子签名介绍-->
            <div class="minx-wid minx-gray  ">
                <div class="minx-wid-178 animate_tab animate" data-atclass="animate">
                    <div class="minx-produce-rd minx-job two-flash animate07">
                        <div class="show-text">
                            <h3>敏行数据存证</h3>
                            <p> 敏行签约联合公证处、司法鉴定中心、仲裁机构，共同推出存证保全产品，打造取证、存证、出证为一体的第三方电子数据保全平台。
                            </p>
                            <p>敏行签约记录用户认证、数据创建、存储和传输等电子签约全过程，保证数据私密安全，联合权威公证处进行文件hash值存证，并支持一键出证。</p>

                        </div>
                        <div class="minx-produce-l">
                            <img src="../../assets/copyImg/4.png" alt="产品形态分布，支持PC、APP、微信等多终端签署，满足客户多样化需求">
                        </div>
                    </div>
                </div>
            </div>
            <!-- 2 产品特点介绍-->
            <div class="minx-wid minx-gray mx-gray minx-sign">
                <div class="minx-wid-178  minx-produce-rd animate_tab animate" data-atclass="animate">
                    <div class="e_signature-title">数据存证特点</div>
                    <div class=" margintop30 minx-management  minx-border two-flash animate07">
                        <div class="show-text">
                            <h3>敏行数据存证特点</h3>
                            <p>
                                保全服务可从可信身份、可信来源、可信传输、可信存储四大方面落实技术研发，保证电子数据的真实、完整，保证取证的质量、鉴定证明力。 </p>
                        </div>
                        <div class="minx-produce-l">
                            <img src="../../assets/copyImg/4.png" alt="产品形态分布，支持PC、APP、微信等多终端签署，满足客户多样化需求">
                        </div>
                    </div>
                    <div class="minx-produce-rd minx-border margintop15 minx-job two-flash animate07">
                        <div class="show-text">
                            <h3>基于区块链技术的数据存证服务
                            </h3>
                            <p> 敏行签约可以对数据文件进行摘要，计算文件指纹，并在敏行签约云服务器和公证处本地服务器进行指纹的数据存证，通过增加时间戳和可信数字签名，确保文件一经篡改即可被发现和真实记录。任何存证的文件，数据指纹都会永久保存，可以在未来任何时间开具可信的公证书。</p>
                        </div>
                        <div class="minx-produce-l">
                            <img src="../../assets/copyImg/4.png" alt="产品形态分布，支持PC、APP、微信等多终端签署，满足客户多样化需求">
                        </div>
                    </div>
                </div>
            </div>
            <!-- 3 产品功能 -->
            <div class="minx-wid minx-gray  minx-sign">

                <div class="minx-wid-178  minx-produce-rd animate_tab animate" data-atclass="animate">
                    <div class="e_signature-title marginbtm30">敏行提供法律服务</div>
                    <!-- 二级导航条和内容 -->
                    <div class="minx-tabs margintop30 law-service">
                        <el-tabs :tab-position="tabPosition" style="height: 320px;">
                            <el-tab-pane label="存证 ">
                                <ProduceSave> </ProduceSave>
                            </el-tab-pane>
                            <el-tab-pane label="出证 ">
                                <ProduceShow>
                                </ProduceShow>
                            </el-tab-pane>
                            <el-tab-pane label="鉴定 ">
                                <auther> </auther>
                            </el-tab-pane>
                            <el-tab-pane label="维权 ">
                                <ProduceRights> </ProduceRights>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
            <!-- 4 产品价值-->
            <div class="minx-wid minx-gray mx-gray minx-sign">
                <div class="minx-wid-178  minx-produce-rd animate_tab animate" data-atclass="animate">
                    <div class="e_signature-title">产品价值</div>
                    <div class="e_contract-value">
                        <ul>
                            <li>

                                <div class="e_contract-value-img"></div>
                                <span class="e_contract-value-title">独创的场景式存证</span>
                                <span class="e_contract-value-content"> 首创场景式存证概念。区别于传统的仅对单一证据点的保全，敏行签约采用时间戳技术对一个事件发生的全过程各个节点进行固化，并通过证据ID将这些证据串联在一起保全到敏行签约，通过敏行签约可一站式展示全流程证据</span>

                            </li>
                            <li>
                                <div class="e_contract-value-img"></div>
                                <span class="e_contract-value-title">数据长效保存</span>
                                <span class="e_contract-value-content"> 敏行为客户供稳定的电子数据存证服务。并承诺在客户不续约的情况下免费为客户供一年数据延期存证的服务，免除了客户在合约有效期外的事后取证</span>
                            </li>
                            <li>
                                <div class="e_contract-value-img"></div>
                                <span class="e_contract-value-title">完善的法律服务体系</span>
                                <span class="e_contract-value-content"> 打通多个权威司法鉴定中心，为用户提供电子数据司法鉴定服务；打通多家知名公证处、仲裁委，实现在线公证、在线仲裁等服务；与杭中国互联网协会调解中心合作，实现证据实时同步至法院、调解中心等</span>
                            </li>
                            <li>
                                <div class="e_contract-value-img"></div>
                                <span class="e_contract-value-title">多家权威机构的认可</span>
                                <span class="e_contract-value-content"> 无需线下到公证处或司法鉴定中心排队，在线申请出具敏行签约证据报告、司法鉴定意见书、公证书等</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <!-- 6 产品架构-->
            <div class="minx-wid minx-gray mx-gray minx-sign">
                <div class="minx-wid-178  minx-produce-rd animate_tab animate" data-atclass="animate">
                    <div class="e_signature-title">产品架构</div>
                    <div class="evidence-framework">
                        <div class="evidence-framework-img"></div>
                    </div>
                </div>
            </div>

            <!-- 5 应用场景-->
            <div class="minx-wid minx-gray minx-sign">

                <div class="minx-wid-178  minx-produce-rd animate_tab animate" data-atclass="animate">
                    <div class="e_signature-title">应用场景</div>
                    <div class="ty_signature-sence">
                        <ul>
                            <li>
                                <span class="e_contract-sence-title">签署存证</span>
                                <span class="e_contract-sence-content">记录用户认证到签署全过程，结合哈希运算在公证处进行存证。</span>
                            </li>
                            <li>

                                <span class="e_contract-sence-title">文件存证</span>
                                <span class="e_contract-sence-content">上传文件至敏行签约进行存证, 便于快速出证，且具有更高可信度。</span>
                            </li>
                            <li>

                                <span class="e_contract-sence-title">照片存证</span>
                                <span class="e_contract-sence-content"> 通过敏行签约批量进行照片存证，防篡改防抵赖，保护数据安全。</span>
                            </li>
                            <li>
                                <span class="e_contract-sence-title">音频存证</span>
                                <span class="e_contract-sence-content">通过敏行签约，及时进行录音文件的第三方存证，支持永久保存。</span>
                            </li>
                            <li>
                                <span class="e_contract-sence-title">视频存证</span>
                                <span class="e_contract-sence-content">敏行签约支持多种视频格式的存证，保证数据一经篡改即可被发现。</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <foot></foot>

    </div>
</template>
 <style scoped>
@import '../../assets/css/public.css';
@import './StorageData.css';
@import '../../assets/css/PBIntroduce.css';
</style>
 <style>
@import './StorageNav.css';
@import '../../assets/css/HomeRepir.css';
</style>
<script src='./StorageData.js'>
</script>

