<template>
  <div id="person " class="UploadContracts" v-loading="loading.upload" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">
    <!-- 导航文字 -->
    <div class="navigationWords">
      <div class="navigation-a">
        <ul>
          <li>
            <router-link to="/PersonalCenter">首页</router-link>
          </li>
          <li>
            <router-link class="activeLink" to="/contractManagement" id="activeLink">文件管理</router-link>
          </li>
          <li>
            <router-link to="/accountManagement">个人中心</router-link>
          </li>
          <!-- <li>
            <a>模板管理</a>
          </li> -->
        </ul>
        <!-- 导航图标 -->
        <div class="navigation-Icons ">
          <ul>
            <li>
              <span v-if="savebtn" class="search-infor-a">下一步</span>
              <span v-else class="search-infor-a" @click="GoSave" v-loading="loading.saving">下一步</span>
            </li>
            <li>
              <span class="search-infor-a" @click="$router.back(-1)">取消</span>
            </li>
            <li>
              <span class="search-infor-a">存草稿</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 导航背景 -->

    <div class="navigation-back"></div>

    <div class="contract-body">
      <!-- 上传 -->
      <div class="upload-infor">
        <div class="uploadFile">
          <!-- 添加合同 -->
          <ul>
            <li>
              <div class="file" v-bind:class="{ backgroung: isBackgroung, 'backgroungWhite': hasError }">
                <input type="file" name="file" @change="FileChange">

              </div>
            </li>
            <li>
              <h5 style="margin-top: 10px;word-wrap: break-word; " v-if="isUpload"> {{file.name}} </h5>
            </li>
          </ul>

        </div>

      </div>

      <!-- 添加合同信息-->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" size="medium" class="demo-ruleForm">
        <div class="contract-information">
          <table class="contract-infor-img" style="margin: -30px 0px 0px 0px;">
            <tr>
              <td>
                <div class="contract-infor-back"></div>
                <span id="activeLink"> 添加合同信息</span>
                <div class="contract-infor-squar">
                  <!-- <a class="contract-infor-squar"></a> -->
                </div>
              </td>
            </tr>
          </table>
          <table class="contract-infor-form">
            <tr>
              <td>
                <div class="menu">
                  <el-form-item label="合同编码:" prop="code" style="width: 350px;">
                    <el-input v-model="ruleForm.code" placeholder="请输入合同编码" style="width:500px;"></el-input>
                  </el-form-item>
                </div>
                <div class="menu">
                  <el-form-item label="合同主题:" prop="name" style="width: 350px;">
                    <el-input v-model="ruleForm.name" placeholder="请输入合同主题" style="width:500px;"></el-input>
                  </el-form-item>
                </div>

                <div class="menu">
                  <el-form-item label="签署截止日期:">
                    <el-col :span="11">
                      <el-form-item>
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.datepick" style="width: 500px;"></el-date-picker>
                      </el-form-item>
                    </el-col>
                  </el-form-item>
                </div>
                <div class="menu">
                  <el-form-item label="备注:">
                    <el-input type="textarea" v-model="ruleForm.desc" placeholder="请添加备注信息"></el-input>
                  </el-form-item>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <!-- 签署方信息 -->
        <div class="contract-information">
          <table class="contract-infor-img ">
            <tr>
              <td>
                <div class="contract-infor-back2"></div>
                <span class="contract-inforword1" id="activeLink"> 添加签署方信息</span>
                <div class="contract-infor-squar">
                </div>
              </td>
            </tr>
          </table>
          <table class="contract-infor-form marginbottom100">
            <tr>
              <td>
                <div class="menu">
                  <el-form-item label="签署模式:">
                    <el-select v-model="ruleForm.signPattern" placeholder="请选择签署模式" style="width: 500px;">
                      <el-option label="签署文件（自己与对方均需签署，也可仅自己签署不发送）" value="签署文件"></el-option>
                      <el-option label="发送文件（自己不需要签署，仅对方签署）" value="发送文件"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="menu">
                  <el-form-item label="签署顺序:" prop="signOrder">
                    <el-select v-model="ruleForm.signOrder" placeholder="请选择签署顺序" style="width: 500px;">
                      <el-option label="顺序签署（按签署顺序一人签署完毕再发送并提醒下一人，即A→B→C→D）" value="1"></el-option>
                      <el-option label="无序签署（签署顺序不受限制）" value="2"></el-option>
                      <el-option label="单独签署（发起方单独发送每个收件人签署，即A→B,A→C,A→D）" value="3"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div>
                  <el-form-item label="签署方:" required>
                    <div v-for="(con, idx) in conList" class="height50">
                      <el-col :span="11">
                        <div class="contract-name">
                          <el-form-item>
                            <el-autocomplete popper-class="my-autocomplete" v-model="con.organization" :fetch-suggestions="QuerySearchAsync" placeholder="联系人（别名）" @select="HandleSelect" style="width: 200px;" @focus="Focus(idx)">
                              <template slot-scope="{item}">
                                <div class="name">{{ item.vcode }}</div>
                              </template>
                            </el-autocomplete>
                          </el-form-item>
                        </div>
                      </el-col>
                      <el-col :span="11">
                        <div class="contract-name">
                          <el-form-item>
                            <el-input v-model="con.number" placeholder="账号（手机号/邮箱）" style="width: 200px;"></el-input>
                          </el-form-item>
                        </div>
                      </el-col>
                      <el-col :span="11" v-if="idx > 0">
                        <div class="search-infor-a delect-infor">
                          <a @click="DelContact(con)">删除</a>
                        </div>
                      </el-col>
                    </div>
                  </el-form-item>
                </div>
                <div>
                  <el-col :span="12">
                    <div class="check-infor1">
                      <a class="search-infor-contact" @click="AddContact">添加签署方</a>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <el-radio-group v-model="radio2">
                      <!-- <el-radio :label="3">指定签署位置</el-radio>
                      <el-radio :label="6">允许未认证用户签署</el-radio> -->
                    </el-radio-group>
                    <!-- <div class="login-check check-infor2">
                      <span><input type="checkbox" class="input_check" id="checkbox1">
                        <label for="checkbox1"></label>
                        <a>指定签署位置 </a>
                      </span>
                    </div> -->
                  </el-col>
                  <!-- <el-col :span="11">
                    <div class="login-check check-infor">
                      <span><input type="checkbox2" class="input_check1" id="checkbox2">
                        <label for="checkbox2"></label>
                        <a>允许未认证用户签署 </a>
                      </span>
                    </div>
                  </el-col> -->
                </div>
              </td>
            </tr>
          </table>
        </div>
      </el-form>
    </div>
    <!-- 尾部 -->
    <div class="navigation-foot">
      <div class="navigation-foot-words">
        <a> copyright © 2016-2017 江苏敏行信息技术有限公司 All rights reserved</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import './UploadContracts.css';
</style>
 <script src='./UploadContracts.js'></script>
 

