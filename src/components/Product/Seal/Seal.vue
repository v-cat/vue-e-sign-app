<template>
    <div class="seal" v-show="show">
        <!-- 1 电子签名介绍-->
        <div class="minx-wid minx-gray  ">
            <div class="minx-wid-178 animate_tab animate" data-atclass="animate">
                <div class="minx-produce-rd minx-job two-flash animate07">
                    <div class="show-text">
                        <h3> 电子印章的实现原理：</h3>
                        <p> 电子印章是进行电子签署时，附加的印章外观表现形式。我们将组织的印章外观，附加在原文之上，经过哈希运算及数字签名，让电子印章具备与纸质盖章同等的法律效力。
                        </p>

                    </div>
                    <div class="minx-produce-l">
                        <img src="../../../assets/copyImg/4.png" alt="产品形态分布，支持PC、APP、微信等多终端签署，满足客户多样化需求">
                    </div>
                </div>
            </div>
        </div>
        <!-- 2 产品特点介绍-->
        <div class="minx-wid minx-gray mx-gray minx-sign">
            <div class="minx-wid-178  minx-produce-rd animate_tab animate" data-atclass="animate">
                <div class="e_signature-title">电子印章特点</div>
                <div class=" margintop30 minx-management  minx-border two-flash animate07">
                    <div class="show-text">
                        <h3>具有法律效力的电子印章</h3>
                        <p> 敏行为您定义制作合法有效的电子公章/合同章/法人章/个人私章，并为这些印章匹配可靠的电子签名！ </p>
                    </div>
                    <div class="minx-produce-l">
                        <img src="../../../assets/copyImg/4.png" alt="产品形态分布，支持PC、APP、微信等多终端签署，满足客户多样化需求">
                    </div>
                </div>
                <div class="minx-produce-rd minx-border margintop15 minx-job two-flash animate07">
                    <div class="show-text">
                        <h3> 提供合法有效的电子印章1
                        </h3>
                        <p> 电子印章并不是电子化的印章图形，仅有印章电子化图形是没有法律效力的。本质上电子印章的合法有效性是依据这个图形的背后支撑：即依据法律法规设定的数字证书、时间戳、数据存证技术等组合而成的可靠电子签名技术。</p>
                    </div>
                    <div class="minx-produce-l">
                        <img src="../../../assets/copyImg/4.png" alt="产品形态分布，支持PC、APP、微信等多终端签署，满足客户多样化需求">
                    </div>
                </div>
                <div class="  minx-management margintop15 minx-border two-flash animate07">
                    <div class="show-text">
                        <h3>提供合法有效的电子印章2</h3>
                        <p> 敏行为组织定义制作受国家法律保护的电子公章、电子合同章、电子法人章和电子个人私章，并且可以为这些印章匹配可靠的电子签名。所有电子印章的数字证书都由敏行时时校验有效性，保证每一个电子印签在合法有效的情况下使用。</p>
                    </div>
                    <div class="minx-produce-l">
                        <img src="../../../assets/copyImg/4.png" alt="产品形态分布，支持PC、APP、微信等多终端签署，满足客户多样化需求">
                    </div>
                </div>
                <div class="minx-produce-rd minx-border margintop15 minx-job two-flash animate07">
                    <div class="show-text">
                        <h3>提供合法有效的电子印章3
                        </h3>
                        <p> 在部分业务中，为了避免纸质文件的繁琐，可以采用电子文件加盖企业电子印章的形式。通过印控系统，对生成的PDF文件自动加盖时间戳、企业数字签名，生成文件不可篡改，具备纸质盖章文件同等的法律效力。</p>
                    </div>
                    <div class="minx-produce-l">
                        <img src="../../../assets/copyImg/4.png" alt="产品形态分布，支持PC、APP、微信等多终端签署，满足客户多样化需求">
                    </div>
                </div>

            </div>
        </div>

        <!-- 4 产品价值-->
        <div class="minx-wid minx-gray mx-gray minx-sign">

            <div class="minx-wid-178 minx-span minx-produce-rd animate_tab animate" data-atclass="animate">
                <div class="e_signature-title">电子印章功能构成部分</div>
                <div class="e_contract-value">
                    <ul>
                        <li>

                            <div class="e_contract-value-img"></div>
                            <span class="e_contract-value-title">【时间戳】</span>
                            <span class="e_contract-value-content"> 电子印章每次签署后，都在签署文件中增加时间戳，时间戳由国家授时中心实时颁发，用以证明签署时间。</span>

                        </li>
                        <li>
                            <div class="e_contract-value-img"></div>
                            <span class="e_contract-value-title"> 【数字证书】</span>
                            <span class="e_contract-value-content"> 数字证书由国家权威数字证书机构颁发，用以证明签署人身份。</span>
                        </li>
                        <li>
                            <div class="e_contract-value-img"></div>
                            <span class="e_contract-value-title">【签名外观】</span>
                            <span class="e_contract-value-content"> 签名外观包括印章样式，个人签名笔迹等，用来辅助证明签署信息。</span>
                        </li>
                        <li>
                            <div class="e_contract-value-img"></div>
                            <span class="e_contract-value-title">【数字文件指纹】</span>
                            <span class="e_contract-value-content"> 通过Hash算法，对被签署电子文件计算出的唯一的数字文件指纹信息，也被记录在电子印章中，用以证明被签署文件的完整性。</span>
                        </li>
                        <li>
                            <div class="e_contract-value-img"></div>
                            <span class="e_contract-value-title">【备注字段】</span>
                            <span class="e_contract-value-content"> 备注字段可以自定义填写，比如备注上电子印章使用范围和授权对象，作为字段信息增加电子印章权威性。</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <!-- 3 产品功能 -->
        <div class="minx-wid minx-gray  minx-sign">

            <div class="minx-wid-178  minx-produce-rd animate_tab animate" data-atclass="animate">
                <div class="e_signature-title">电子印章服务特点</div>
                <div class="e_signature-function ty_signature-function">
                    <ul class="row">
                        <li class="col-li   ">
                            <div class="function-tags">
                                <span class="e_signature-function-img"></span>
                                <span class="e_signature-function-content">安全可靠</span>
                                <div class="left-table-content">
                                    <div class="redcircle-content">
                                        <span class="redcircle"></span>敏行的各类系统及应用，严格按照法律规定的合法有效、安全可靠的标准进行设计开发，联合省级和国家级的第三方的CA机构（即数字证书认证授权中心），并联合公安部的公民网络身份识别系统及芝麻信用和人脸识别系统，为各类组织和个人提供合法的电子印章服务，保证签署安全。</div>

                                </div>
                            </div>

                        </li>
                        <li class=" col-li">
                            <div class="function-tags">
                                <span class="e_signature-function-img"></span>
                                <span class="e_signature-function-content"> 多种应用方式</span>
                                <div class="left-table-content">
                                    <div class="redcircle-content">
                                        <span class="redcircle"></span>敏行电子签章服务方式：提供第三方电子合同平台满足企业与企业、企业与个人、个人与个人之间的合同签署中的电子印章应用，并提供Restful风格的标准化电子签署API接口，灵活与企业已有的业务系统集成，完成电子合同签署中的电子印章应用。</div>

                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

        <slot> </slot>
    </div>
</template>
 <style>
@import './Seal.css';
</style>
<script src='./Seal.js'></script>