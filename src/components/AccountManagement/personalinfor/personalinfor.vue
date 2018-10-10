<template>
  <div class="personalinfor" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">

    <!-- 基本信息-->

    <div class="contract-my-seal">

      <table>
        <!-- 添加 印章管理 -->
        <tr>
          <td>
            <div class="person-infor">
              <div class="service"> </div>
              <div class="person-information">
                <ul>
                  <li>
                    <h5 style="margin-top: -5px;" class="world1">账号：{{personInformation.vusercode}} </h5>
                    <!-- <a>修改</a> -->
                  </li>
                  <li style="margin-top: -15px;">
                    <h5 class="world2">昵称：</h5>
                  </li>
                  <li class="information-li">
                    <div v-if="!buttonClick" v-model="input" ref="input" style="height:39px">
                      <h5 class="world2" style="margin: -30px 0px 0px 40px; width: 110px;">{{personInformation.vusername}}</h5>
                      <a class="word4" @click="EditNickName()">修改</a>
                    </div>
                    <div v-else style="width: 200px;height: 60px;">
                      <div class="inputcheck">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                          <el-form-item prop="vusername">
                            <el-input v-model="ruleForm.vusername" placeholder="请输入昵称"></el-input>
                          </el-form-item>
                        </el-form>
                        <div class="saveBtn">
                          <a class="word5" @click="savename( )">保存</a>
                          <a class="word5 " @click="EditNickName()">取消</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </td>
          <td>
            <div class="person-sruare">
            </div>
          </td>
          <td>
            <div class="person-infor1">
              <!-- 空 -->
              <div v-if="type==='nothing'" class="person-tips personmarg10">
              </div>
              <!-- 已认证 -->
              <div v-else-if="type==='userIsVerify'" class="person-tips personmarg10">
                <ul>
                  <li>
                    <div class="reminder">
                      <svg class="warning-Icon" aria-hidden="true" color='black'>
                        <use class="white" xlink:href="#icon-weibiaoti-1"></use>
                      </svg>
                    </div>

                  </li>
                  <li>
                    <a class="word1">你已完成实名认证</a>

                  </li>
                  <!-- <li>
                          <a class="word2">实名认证后才可以签署合同</a>
                        </li> -->
                  <li>
                    <router-link class=" word3 " to="/UploadContracts">去签署</router-link>
                    <!-- <a class="word3">去签署</a> -->
                  </li>
                </ul>
              </div>
              <!-- 未认证 -->
              <div v-else-if="type==='userUnverify'" class="person-tips personmarg3">
                <ul>
                  <li>
                    <div class="warning">
                      <svg class="warning-Icon" aria-hidden="true" color='black'>
                        <use class="white" xlink:href="#icon-warning"></use>
                      </svg>
                    </div>
                  </li>
                  <li>
                    <a class="unverified">你尚未完成实名认证</a>
                  </li>
                  <li>
                    <a class="word2">实名认证后才可以签署合同</a>
                  </li>
                  <li>
                    <!-- <router-link class="word3" to="/UploadContracts" id="activeLink">去认证</router-link> -->
                    <a class="word3" @click="openDialog('AddAuth')">去认证</a>
                  </li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
        <!-- 印章图片   -->
      </table>
    </div>
    <div class="basic-infor">
      <div class="basic-my-seal">
        <table>
          <!-- 添加 基本信息 -->
          <tr>
            <td>
              <div class="append-infor">
                <div class="contract-infor-back"></div>
                <span id="activeLink" class="basic-nformation">基本信息</span>
                <div class="contract-infor-squar">
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <!-- 基本信息  编辑 -->
              <div class="wid-sy-100">
                <div>
                  <ul class="line-t-xa ">
                    <li>
                      <span class="mg-r-30">个人账号</span>
                      <span class="txt-999 dip mg-r-10">{{personInformation.vusercode}}</span>

                      <a class="ng-scope-ic">
                        <svg class="ng-scope-icon yellowcolor" aria-hidden="true">
                          <use xlink:href="#icon-shimingrenzheng"></use>
                        </svg>
                      </a>
                      <!-- 已激活 -->
                      <div class="text-right">
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-xuanding"></use>
                          </svg>
                        </span>
                        <span class="dip">已激活</span>
                      </div>

                    </li>

                  </ul>
                  <ul class="line-t-xa clearfix">
                    <li class="">
                      <span class="mg-r-30">登录密码</span>
                      <span class="txt-999">********</span>
                      <a title="修改密码" class="ico_gai-ic" @click="openDialog('EditPwd')">
                        <svg class="ico_gai-icon" aria-hidden="true">
                          <use xlink:href="#icon-bianji1"></use>
                        </svg>
                      </a>
                      <!-- 已设置 -->
                      <div v-if="true" class="text-right">
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-xuanding"></use>
                          </svg>
                        </span>
                        <span class="dip">已设置</span>
                      </div>
                      <!-- 未设置 -->
                      <div v-else class="text-right">
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-warning"></use>
                          </svg>
                        </span>
                        <span class="dip">未设置</span>
                      </div>
                    </li>

                  </ul>

                  <ul class=" line-t-xa clearfix">
                    <li class="">
                      <span class="mg-r-30">真实姓名:</span>
                      <span v-if="userVerify" class="txt-999 ng-binding">{{personInformation.vidcardname}}</span>
                      <!-- <el-button v-else @click="openDialog('AddAuth')">现在去认证</el-button> -->
                      <a class="word3" v-else @click="openDialog('AddAuth')">去认证</a>
                      <!-- <a title="编辑" class="ico_gai-ic">
                              <svg class="ico_gai-icon" aria-hidden="true">
                                <use xlink:href="#icon-bianji1"></use>
                              </svg>
                            </a> -->
                      <!-- 已认证 -->
                      <div v-if="userVerify" class="text-right">
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-xuanding"></use>
                          </svg>
                        </span>
                        <span class="dip ng-binding">已认证</span>
                      </div>
                      <!-- 未认证 -->
                      <div v-else class="text-right">
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-warning"></use>
                          </svg>
                        </span>
                        <span class="dip ng-binding">未认证</span>
                      </div>
                    </li>

                  </ul>
                  <ul class=" line-t-xa">
                    <li class="">
                      <span class="mg-r-30">身份证号</span>
                      <span v-if="userVerify" class="txt-999 ng-binding">{{personInformation.vidcardnum}}</span>
                      <!-- <a title="编辑" class="ico_gai-ic">
                              <svg class="ico_gai-icon" aria-hidden="true">
                                <use xlink:href="#icon-bianji1"></use>
                              </svg>
                            </a> -->
                      <!-- 已认证 -->
                      <div v-if="userVerify" class="text-right">
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-xuanding"></use>
                          </svg>
                        </span>
                        <span class="dip ng-binding">已认证</span>
                      </div>
                      <!-- 未认证 -->
                      <div v-else class="text-right">
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-warning"></use>
                          </svg>
                        </span>
                        <span class="dip ng-binding">未认证</span>
                      </div>
                    </li>

                  </ul>
                  <ul class=" line-t-xa ">
                    <li class="">
                      <span class="mg-r-30">手机号码</span>
                      <span class="txt-999">{{personInformation.vtelphone}}</span>
                      <a title="编辑" class="ico_gai-ic">
                        <svg class="ico_gai-icon" aria-hidden="true" @click="openDialog('EditTel')">
                          <use xlink:href="#icon-bianji1"></use>
                        </svg>
                      </a>
                      <div v-if="personInformation.vtelphone != ''" class="text-right">
                        <span class="txt-999">(此号码用于接收重要通知)</span>
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-xuanding"></use>
                          </svg>
                        </span>
                        <span class="dip ng-binding">已绑定</span>
                      </div>
                      <div v-else class="text-right">
                        <span class="txt-999">(此号码用于接收重要通知)</span>
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-warning"></use>
                          </svg>
                        </span>
                        <span class="dip ng-binding">未绑定</span>
                      </div>
                    </li>
                  </ul>
                  <ul class="line-t-xa">
                    <li class="">
                      <span class="mg-r-30">电子邮件</span>
                      <span class="txt-999 ng-binding">{{personInformation.vemail}}</span>
                      <a title="编辑" class="ico_gai-ic">
                        <svg class="ico_gai-icon" aria-hidden="true" @click="openDialog('EditEmail')">
                          <use xlink:href="#icon-bianji1"></use>
                        </svg>
                      </a>
                      <!-- 已认证 -->
                      <div v-if="personInformation.vemail != ''" class="text-right">
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-xuanding"></use>
                          </svg>
                        </span>
                        <span class="dip ng-binding">已设置</span>
                      </div>
                      <!-- 未认证 -->
                      <div v-else class="text-right">
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-warning"></use>
                          </svg>
                        </span>
                        <span class="dip ng-binding">未设置</span>
                      </div>
                    </li>
                  </ul>
                  <ul class="line-t-xa">
                    <li class="">
                      <span class="mg-r-30">收件地址</span>
                      <span class="txt-999">{{personInformation.vdeliveryaddr}}</span>
                      <a title="编辑" class="ico_gai-ic">
                        <svg class="ico_gai-icon" aria-hidden="true" @click="openDialog('EditAddr')">
                          <use xlink:href="#icon-bianji1"></use>
                        </svg>
                      </a>
                      <!-- 已认证 -->
                      <div v-if="personInformation.vdeliveryaddr != ''" class="text-right">
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-xuanding"></use>
                          </svg>
                        </span>
                        <span class="dip ng-binding">已设置</span>
                      </div>
                      <!-- 未认证 -->
                      <div v-else class="text-right">
                        <span class="ico_renz-ic">
                          <svg class="ico_renz-icon" aria-hidden="true">
                            <use xlink:href="#icon-warning"></use>
                          </svg>
                        </span>
                        <span class="dip ng-binding">未设置</span>
                      </div>
                    </li>

                  </ul>
                  <!-- ngIf: bi.info.type==2?true:false -->
                </div>
              </div>
            </td>
          </tr>

        </table>
      </div>
    </div>
    <div class="inform-infor">
      <div class="basic-my-seal">
        <!-- <div class="contract-my"> </div>
              <div class="basic-my"> </div> -->
        <table>
          <!-- 添加 基本信息 -->
          <tr>
            <td>
              <div class="append-infor">
                <div class="contract-infor-back"></div>
                <span id="activeLink" class="basic-nformation">通知设置</span>
                <div class="contract-infor-squar">
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <!-- 基本信息  编辑 -->
              <div class="wid-sy-100">
                <div>
                  <ul class="line-t-xa ">
                    <li>
                      <span class="mg-r-30">合同签署截止日期前
                        <el-input-number size="mini" v-model="num6"></el-input-number>天提醒我</span>
                    </li>
                    <li>
                      <span class="mg-r-30">在合同有效期到期前
                        <el-input-number size="mini" v-model="num7"></el-input-number> 天提醒我</span>
                    </li>
                    <li>
                      <span class="mg-r-30">短信通知</span>
                      <span class="switch">
                        <el-switch v-model="value3" active-color="#8a8a8a" inactive-color="#be926f" active-text="关" inactive-text="开">
                        </el-switch>

                      </span>
                      <div>
                        <span class="mg-r-15">若关闭，进行实名认证、文件签署、完成文件签署时，将不通过短信的方式向您注册的手机发送通知短信</span>
                      </div>
                    </li>

                    <li>
                      <span class="mg-r-30">邮箱通知</span>
                      <span class="switch">
                        <el-switch v-model="value4" active-color="#8a8a8a" inactive-color="#be926f" active-text="关" inactive-text="开">
                        </el-switch>
                      </span>
                      <div>
                        <span class="mg-r-15">若关闭，进行实名认证、文件签署、完成文件签署时，将不通过邮件的方式向您注册的邮箱发送通知邮件</span>
                      </div>
                    </li>

                  </ul>

                </div>
              </div>
            </td>
          </tr>

        </table>
      </div>
    </div>

    <div id="dialog">
      <!-- 身份认证弹窗 -->
      <el-dialog title="实名认证" :visible.sync="dialog.authShow">
        <el-form :model="dialog" ref="dialog" :rules="rules1" label-width="100px">
          <ul>
            <li>

              <el-form-item label="姓名" prop="vidcardname">
                <el-input type="text" v-model="dialog.vidcardname" auto-complete="off"></el-input>
              </el-form-item>
            </li>
            <li style="margin-top: 40px;">
              <el-form-item label="身份证号" prop="vidcardnum">
                <el-input type="text" v-model="dialog.vidcardnum" auto-complete="off"></el-input>
              </el-form-item>
            </li>
            <li style="margin-top: 40px;">
              <div>
                <a class="word5" type="primary" @click="Authentication()">提交</a>
                <a class="word5" style="margin-left: 20px;" @click="resetForm('dialog')">重置</a>
                <!-- <el-button type="primary" @click="EditPwd()" :loading="saveBtnLoading">提交</el-button>
                <el-button @click="resetForm('dialog')">重置</el-button> -->
              </div>

            </li>
          </ul>
          <!-- <el-form-item>
            <el-button type="primary" @click="Authentication()" :loading="saveBtnLoading">提交</el-button>
            <el-button @click="resetForm('dialog')">重置</el-button>
          </el-form-item> -->
        </el-form>
      </el-dialog>

      <!-- 修改密码弹窗 -->
      <el-dialog title="修改密码" :visible.sync="dialog.pwdShow">
        <el-form :model="dialog" status-icon :rules="rules1" ref="dialog" label-width="120px" validate-on-rule-change="false">
          <ul>
            <li>

              <el-form-item label="新密码:" prop="vpassword">
                <el-input type="password" v-model="dialog.vpassword" auto-complete="off" placeholder="输入新的密码(6-18位字母、数字组合)"></el-input>
              </el-form-item>
            </li>
            <li style="margin-top: 40px;">
              <el-form-item label="确认密码:" prop="checkpass">
                <el-input type="password" v-model="dialog.checkpass" auto-complete="off" placeholder="再次输入"></el-input>
              </el-form-item>
            </li>
            <li style="margin-top: 40px;">
              <div>
                <a class="word5" type="primary" @click="EditPwd()">提交</a>
                <a class="word5" style="margin-left: 20px;" @click="resetForm('dialog')">重置</a>
                <!-- <el-button type="primary" @click="EditPwd()" :loading="saveBtnLoading">提交</el-button>
                <el-button @click="resetForm('dialog')">重置</el-button> -->
              </div>

            </li>
          </ul>

        </el-form>
      </el-dialog>

      <!-- 修改手机号弹窗 -->
      <el-dialog title="修改手机号" :visible.sync="dialog.telShow">
        <el-form :model="dialog" status-icon :rules="rules1" ref="dialog" label-width="100px" validate-on-rule-change="false">
          <el-form-item prop="vtelphone">
            <el-input type="text" placeholder="手机号" v-model="dialog.vtelphone" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <a class="word5" type="primary" @click="EditTel()">确认</a>
            <a class="word5" style="margin-left: 20px;" @click="dialog.telShow = !dialog.telShow">取消</a>
            <!-- <el-button type="primary" @click="EditTel()" :loading="saveBtnLoading">确认</el-button>
            <el-button @click="dialog.telShow = !dialog.telShow">取消</el-button> -->
          </el-form-item>
        </el-form>
      </el-dialog>

      <!-- 修改收件地址弹窗 -->
      <el-dialog title="修改收件地址" :visible.sync="dialog.addrShow">
        <el-form :model="dialog" status-icon :rules="rules1" ref="dialog" label-width="100px" validate-on-rule-change="false">
          <el-form-item prop="vdeliveryaddr">
            <el-input type="text" placeholder="收件地址" v-model="dialog.vdeliveryaddr" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <a class="word5" type="primary" @click="EditAddr()">确认</a>
            <a class="word5" style="margin-left: 20px;" @click="dialog.addrShow = !dialog.addrShow">取消</a>
            <!-- <el-button type="primary" @click="EditAddr()" :loading="saveBtnLoading">确认</el-button>
            <el-button @click="dialog.addrShow = !dialog.addrShow">取消</el-button> -->
          </el-form-item>
        </el-form>
      </el-dialog>

      <!-- 修改邮箱地址弹窗 -->
      <el-dialog title="修改邮箱" :visible.sync="dialog.emailShow">
        <el-form :model="dialog" status-icon :rules="rules1" ref="dialog" label-width="100px" validate-on-rule-change="false">
          <el-form-item prop="vemail">
            <el-input type="text" placeholder="邮箱" v-model="dialog.vemail" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <a class="word5" type="primary" @click="EditEmail()">确认</a>
            <a class="word5" style="margin-left: 20px;" @click="dialog.emailShow = !dialog.emailShow">取消</a>
            <!-- <el-button type="primary" @click="EditEmail()" :loading="saveBtnLoading">确认</el-button>
            <el-button @click="dialog.emailShow = !dialog.emailShow">取消</el-button> -->
          </el-form-item>
        </el-form>
      </el-dialog>

    </div>
    <router-view></router-view>
  </div>
</template>
<style scoped>
@import './personalinfor.css';
</style>
 
<script src='./personalinfor.js' >
</script>
 