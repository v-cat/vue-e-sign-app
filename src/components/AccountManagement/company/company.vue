<template>

    <div class="company">
        <OBJECT ID="SesSealOcx" style="display: none" CLASSID="clsid:86E42EBD-C877-4BA3-A26F-7DEA1B200A11" codeBase="./WAFA-SES.CAB#Version=1,0,0,2" width="0" height="0"></OBJECT>
        <div class="company-contract-body margin100">

            <!-- 添加企业信息-->
            <div v-if="show" class="basic-infor">
                <div class="basic-my-seal">
                    <table class="contract-infor-form">
                        <tr>
                            <td>
                                <el-form label-width="150px" size="medium" class="demo-ruleForm" :rules="rules" ref="ruleForm" validate-on-rule-change="false" :model="ruleForm">
                                    <div class="menu">
                                        <ul>
                                            <li>
                                                <el-form-item label="营业执照:" style="width: 800px; height:70px" prop="xlicence">
                                                    <el-upload :limit="1" title="点击上传" action="" :http-request="()=>{}" :on-change="AddXlicence" :before-upload="CheckFile" :on-remove="RemoveXlicence">
                                                        <div class="uplodebtn">
                                                            <el-button type="primary">
                                                                <i class="el-icon-upload2">点击上传</i>
                                                            </el-button>
                                                        </div>
                                                        <div slot="tip" class="el-upload__tip">支持文件类型:JPG、JPEG、GIF、PNG、PDF 文件大小:5M以内</div>
                                                    </el-upload>
                                                </el-form-item>
                                            </li>
                                            <li>
                                                <el-form-item label="企业名称:" prop="vcorpname" style="height:70px">
                                                    <el-input type="text" v-model="ruleForm.vcorpname" placeholder="营业执照上的企业全称"></el-input>
                                                </el-form-item>
                                            </li>
                                            <li>
                                                <el-form-item label="企业代码:" prop="vcorpid" style="height:50px">
                                                    <el-input type="text" placeholder="统一社会信用代码/工商注册号" v-model="ruleForm.vcorpid"></el-input>
                                                </el-form-item>
                                            </li>
                                            <li>
                                                <el-form-item label="法定代表人:" prop="vlegalman" style="height:50px">
                                                    <el-input type="text" v-model="ruleForm.vlegalman" placeholder="请填写企业法定代表人的真实姓名"></el-input>
                                                </el-form-item>
                                            </li>
                                            <li>
                                                <el-form-item label="授权委托书:" prop="xauthorization" style="height:70px">
                                                    <el-upload :limit="1" action="" title="点击上传" :http-request="()=>{}" :before-upload="CheckFile" :on-change="AddXauthorization" :on-remove="RemoveXauthorization">
                                                        <div class="uplodebtn">
                                                            <el-button type="primary">
                                                                <i class="el-icon-upload2">点击上传</i>
                                                            </el-button>
                                                        </div>
                                                        <div slot="tip" class="el-upload__tip">支持文件类型:JPG、JPEG、GIF、PNG、PDF 文件大小:5M以内</div>
                                                    </el-upload>
                                                </el-form-item>
                                            </li>
                                            <li>
                                                <el-form-item label="开户行:" prop="vbankname" style="height:50px">
                                                    <el-input type="text" v-model="ruleForm.vbankname" placeholder="企业对公账户开户行"></el-input>
                                                </el-form-item>
                                            </li>
                                            <li>

                                                <el-form-item label="银行账户:" prop="vbankaccount" style="height:50px">
                                                    <el-input type="text" v-model="ruleForm.vbankaccount" placeholder="企业对公账户"></el-input>
                                                </el-form-item>
                                            </li>
                                            <li>
                                                <el-form-item label="企业地址:" prop="vaddress" style="height:50px">
                                                    <el-input type="text" v-model="ruleForm.vaddress" placeholder="企业所在地"></el-input>
                                                </el-form-item>
                                            </li>
                                            <li>
                                                <el-form-item label="联系电话:" prop="vtelphone" style="height:50px">
                                                    <el-input type="text" v-model="ruleForm.vtelphone" placeholder="企业联系方式"></el-input>
                                                </el-form-item>
                                            </li>
                                            <li>
                                                <el-form-item label="纳税人识别号:" prop="vtaxpayeridnum" style="height:50px">
                                                    <el-input type="text" v-model="ruleForm.vtaxpayeridnum" placeholder="纳税人识别号"></el-input>
                                                </el-form-item>
                                            </li>
                                            <li class="agree" style="margin-left: 150px;">
                                                <el-radio v-model="ruleForm.radio" label="1">国密</el-radio>
                                                <el-radio v-model="ruleForm.radio" label="0">RSA</el-radio>
                                            </li>
                                            <li class="agree">

                                                <el-form-item prop="agree" style="height:50px;position: absolute;">
                                                    <el-checkbox label="我已阅读并同意" v-model="ruleForm.agree"></el-checkbox>
                                                </el-form-item>

                                            </li>

                                            <li class="agreeBtn" style="height:50px">
                                                <el-button @click="EnterInfo()" class="search-infor-a" :disabled="!ruleForm.agree">提交</el-button>

                                                <el-dialog title="是否确认提交？" :visible.sync="SubmitInfo" :before-close="handleClose">
                                                    <div class="company-words">
                                                        <!-- 您正在提交企业认证信息，任何一项填写错误将不会认证通过，为节省认证审核时间请您仔细核对以下信息   -->
                                                        提交前请核对一下信息
                                                    </div>
                                                    <div class="company-el-form" style="width:500px;margin:0px auto; ">
                                                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px">
                                                            <el-form-item label="企业名称:"> <span style="float: left;"> {{ruleForm.vcorpname}}</span></el-form-item>
                                                            <el-form-item label="企业代码:"><span style="float: left;">{{ruleForm.vcorpid}}</span> </el-form-item>
                                                            <el-form-item label="法定代表人:"> <span style="float: left;">{{ruleForm.vlegalman}}</span> </el-form-item>
                                                            <el-form-item label="银行账户:"> <span style="float: left;">{{ruleForm.vbankaccount}}</span> </el-form-item>
                                                            <el-form-item label="纳税人识别号:"> <span style="float: left;">{{ruleForm.vtaxpayeridnum}}</span> </el-form-item>
                                                        </el-form>
                                                    </div>
                                                    <span slot="footer" class="dialog-footer">
                                                        <el-button class="cancel-button" @click="SubmitInfo = false">取 消</el-button>
                                                        <el-button class="join-button " type="primary" @click="SubmitAuthInfo()">确定</el-button>

                                                    </span>
                                                </el-dialog>

                                                <el-button @click="CertificationFalse" class="search-infor-a">取消</el-button>

                                            </li>
                                        </ul>

                                    </div>
                                </el-form>
                            </td>
                        </tr>
                    </table>
                    <!-- <div class="basic-my"> </div> -->
                </div>
            </div>
            <!-- 点击认证 -->

            <div v-else class="main-content">
                <div class="enterprise">

                    <div class="upgrade">
                        <div class="el-row">
                            <div class="block-item basic">
                                <div class="linear-border"></div>

                                <div class="content" v-if="user">
                                    <div class="timetree number">
                                        <p class="strong marginbottom">认证为企业用户</p>
                                        <div class="item clearfix">
                                            <span class="strong">提交企业基本信息</span>
                                            <em class="circle">
                                                <i>1</i>
                                                <!-- class="el-icon-check" -->
                                            </em>
                                        </div>
                                        <div class="item clearfix">
                                            <span class="strong">对公账户打款：¥0.01</span>
                                            <em class="circle">
                                                <i>2</i>
                                            </em>
                                        </div>
                                        <div class="item clearfix">

                                            <span class="orange-text">收款账户：6222021102060464842</span>

                                        </div>
                                    </div>
                                    <a @click="Certification">
                                        <button type="button" class="el-button bordered el-button--primary">

                                            <span>企业认证</span>
                                        </button>
                                    </a>
                                    <span class="black-text">或</span>

                                    <span class="blue-text" style="cursor: pointer;" @click="CompanyInfor=true">加入企业</span>
                                    <el-dialog title="加入企业" :visible.sync="CompanyInfor" :before-close="handleClose">
                                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                                            <el-form-item prop="companyname" label="企业名称:">
                                                <el-input v-model="ruleForm.companyname" placeholder="请输入企业名称"></el-input>
                                            </el-form-item>
                                        </el-form>
                                        <span slot="footer" class="dialog-footer">
                                            <el-button class="cancel-button" @click="CompanyInfor = false">取 消</el-button>
                                            <el-button class="join-button " type="primary" @click="JoinCompany('ruleForm')">申请加入</el-button>

                                        </span>
                                    </el-dialog>
                                </div>
                                <div class="content" v-else>
                                    <div class="timetree number">
                                        <p class="strong marginbottom">企业用户认证成功</p>
                                        <div class="item clearfix">
                                            <span class="strong">企业名称：{{auth.vcorpname}}</span>

                                        </div>
                                        <div class="item clearfix">
                                            <span class="strong">企业代码：{{auth.vcorpid}}</span>

                                        </div>
                                    </div>
                                    <el-button type="primary" @click="CompanyEnter=true">申请接入</el-button>
                                    <el-dialog title="新增终端" :visible.sync="CompanyEnter" :before-close="handleClose">
                                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                                            <el-form-item prop="terminalcode" label="终端编码:">
                                                <el-input v-model="ruleForm.terminalcode" placeholder="4-20个字母或数字"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="terminalname" label="终端名称:">
                                                <el-input v-model="ruleForm.terminalname" placeholder="4-20个字符"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="terminalkey" label="激活码:">
                                                <el-input v-model="ruleForm.terminalkey" placeholder="6-12位字符"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="terminalkeysure" label="确认激活码:">
                                                <el-input v-model="ruleForm.terminalkeysure" placeholder="6-12位字符"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="selCert" label="选择证书:">
                                                <el-select v-model="ruleForm.selCert" placeholder="选择证书" style="float:left">
                                                    <el-option v-for="(item,idx) of ruleForm.certs" :key="idx" :label="item.name" :value="item">
                                                    </el-option>
                                                </el-select>
                                                <el-button type="primary" icon="el-icon-search" @click="LoadCert" style="float:left;margin-left:50px;margin-top:10px">加载证书</el-button>
                                            </el-form-item>

                                            <el-form-item prop="terminalnumber" label="序号:">
                                                <el-input v-model="ruleForm.terminalnumber" placeholder="请输入序号"></el-input>
                                            </el-form-item>
                                        </el-form>
                                        <span slot="footer" class="dialog-footer">
                                            <el-button class="cancel-button  search-infor-a" @click="CompanyEnter =false">取消</el-button>
                                            <el-button class="join-button  search-infor-a" @click="ApiAdd">保存</el-button>
                                        </span>
                                    </el-dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="strong">企业账户高级功能</p>
                    <div class="utility el-row" style="margin-left: -10px; margin-right: -10px;">
                        <div class="el-col el-col-12 el-col-lg-8" style="padding-left: 10px; padding-right: 10px;">
                            <div class="item">
                                <p class="title">合同模板</p>
                                <div class="tip">上传的Word文件可直接转换成在线模板，发起用印申请时可由发起方或接收方填写模板中的参数</div>
                                <div class="bg" style="background-position: 0px 0px;"></div>
                            </div>
                        </div>
                        <div class="el-col el-col-12 el-col-lg-8" style="padding-left: 10px; padding-right: 10px;">
                            <div class="item">
                                <p class="title">制作并管理电子印章</p>
                                <div class="tip">分配电子印章的管理及使用权限，即使不在办公室，也可以随时签署电子文件</div>
                                <div class="bg" style="background-position: -90px 0px;"></div>
                            </div>
                        </div>
                        <div class="el-col el-col-12 el-col-lg-8" style="padding-left: 10px; padding-right: 10px;">
                            <div class="item">
                                <p class="title">管理业务分类</p>
                                <div class="tip">可以配置该业务分类的审批/签署流程，发起人选择已配置的业务分类一键发起用印申请，提高效率</div>
                                <div class="bg" style="background-position: 0px -90px;"></div>
                            </div>
                        </div>
                        <div class="el-col el-col-12 el-col-lg-8" style="padding-left: 10px; padding-right: 10px;">
                            <div class="item">
                                <p class="title">组织结构管理</p>
                                <div class="tip">企业可在组织结构中管理所有的部门和子公司及所有员工，并分配平台中的操作权限</div>
                                <div class="bg" style="background-position: -90px -90px;"></div>
                            </div>
                        </div>
                        <div class="el-col el-col-12 el-col-lg-8" style="padding-left: 10px; padding-right: 10px;">
                            <div class="item">
                                <p class="title">管理物理章</p>
                                <div class="tip">企业可通过印控仪管理公司的物理章，物理章所有的申请和使用都将记录在册</div>
                                <div class="bg" style="background-position: 0px -180px;"></div>
                            </div>
                        </div>
                        <div class="el-col el-col-12 el-col-lg-8" style="padding-left: 10px; padding-right: 10px;">
                            <div class="item">
                                <p class="title">防伪打印</p>
                                <div class="tip">已签署好的电子文件可受控打印，打印后的文件印章中带有敏行签约特制的防伪标识，保护纸质文件无法被篡改</div>
                                <div class="bg" style="background-position: -90px -180px;"></div>
                            </div>
                        </div>
                        <div class="el-col el-col-12 el-col-lg-8" style="padding-left: 10px; padding-right: 10px;">
                            <div class="item">
                                <p class="title">定制化的人事合同方案</p>
                                <div class="tip">可以更方便更便捷的发起并签署人事合同，支持批量发起人事合同功能</div>
                                <div class="bg" style="background-position: 0px -270px;"></div>
                            </div>
                        </div>
                        <div class="el-col el-col-12 el-col-lg-8" style="padding-left: 10px; padding-right: 10px;">
                            <div class="item" style="background-position: -90px -90px;">
                                <p class="title">定制化需求</p>
                                <div class="tip">根据企业的需求，开放企业微信集成、开放平台等多种服务...详细可来电咨询</div>
                                <div class="bg" style="background-position: -90px -270px;"></div>
                            </div>
                        </div>
                    </div>
                    <div data-v-0f150e72="" class="el-dialog__wrapper" style="display: none;">
                        <div class="el-dialog el-dialog--tiny" style="top: 15%;">
                            <div class="el-dialog__header">
                                <span class="el-dialog__title">加入企业</span>
                                <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                                    <i class="el-dialog__close el-icon el-icon-close"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import './company.css';
</style>
<style>
.el-upload-list__item-name {
  background: #ecebeb;
  margin-right: 0px;
}
.company-el-form .el-form-item__content {
  line-height: 28px;
}
.company-el-form .el-form-item {
  margin-bottom: 0px;
}
</style>
 <script src='./company.js'></script>
 

