// import utils from '../../utilPackage/utils.js'
import utils from '../../../utilPackage/utils.js'
import sha1 from 'js-sha1'
export default {
  name: 'personalinfor',
  props: {
    name: {
      type: String
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.dialog.checkpass !== '') {
          this.$refs.dialog.validateField('checkpass');
        }
        callback();
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.dialog.vpassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }

    return {
      rules1: {
        vpassword: [{
          validator: validatePass,
          trigger: 'blur'
        }, {
          pattern: /^\w{6,18}$/,
          message: '请输入6-18位数字、字母组合的密码'
        }],
        checkpass: [{
          validator: validatePass2,
          trigger: 'blur'
        }],
        vemail: [{
            required: true,
            trigger: 'blur',
            message: '请输入邮箱'
          },
          {
            pattern: /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/,
            trigger: 'blur',
            message: '请输入正确的邮箱地址'
          }
        ],
        vtelphone: [{
            required: true,
            trigger: 'blur',
            message: '请输入手机号'
          },
          {
            pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
            trigger: 'blur',
            message: '请输入正确的手机号'
          }
        ],
        vdeliveryaddr: [{
            required: true,
            trigger: 'blur',
            message: '请输入地址'
          },
          {
            pattern: /^\S+$/,
            trigger: 'blur',
            message: '地址不能为空'
          }
        ],
        vidcardname: [{
            required: true,
            trigger: 'blur',
            message: '请输入姓名'
          },
          {
            pattern: /(^[\u4E00-\u9FA5]{2,}$)|(^[a-zA-Z]{3,20}$)/,
            message: '请输入真实姓名'
          }
        ],
        vidcardnum: [{
            required: true,
            trigger: 'blur',
            message: '请输入身份证号'
          },
          {
            pattern: /(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
            message: '身份证号码格式不正确'
          }
        ],

      },
      rules: {
        vusername: [{
            required: true,
            message: '请输入昵称',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 8,
            message: '长度在 3 到 8 个字符',
            trigger: 'blur'
          }
        ],
      },
      ruleForm: {
        vusername: '',
      },
      value3: true,
      value2: true,
      value3: true,
      value4: true,
      num7: 1,
      num6: 1,
      buttonClick: false,
      personInformation: {},
      dialog: {
        pwdShow: false,
        telShow: false,
        addrShow: false,
        emailShow: false,
        authShow: false,
        saveBtnLoading: false,
        vpassword: '',
        checkpass: '',
        vdeliveryaddr: '',
        vemail: '',
        vidcardnum: '',
        vidcardname: '',
        vtelphone: ''
      },
      input: {
        vuserid: '',
        vusercode: '',
        // vusername: ''
      },
      type: 'nothing',
      userVerify: true,
      isYellowcolor: true,
      isRedcolor: false,
      loading: false,

    }
  },
  created() {
    var self = this
    self.loading = true
    self.GetInformation()

  },
  methods: {
    // 获取个人信息
    GetInformation() {
      let self = this
      self.loading = true
      // 获取个人信息
      self.$api.Base({
        url: self.$url.Person.personalcenter,
        params: {},
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            self.loading = false
            //console.log(result)
            self.personInformation = result.rows.userPo
            var verifyinfor = result.rows.isAuth
            // console.log(verifyinfor)
            //console.log(self.personInformation)
            //0的时候未认证
            if (verifyinfor === 0) {
              self.loading = false
              self.type = 'userUnverify'
              // console.log(self.type)
              self.userVerify = false
              self.isYellowcolor = false
              self.isRedcolor = true
            } else {
              self.type = 'userIsVerify'
            }
          } else if (result.code !== 0) {
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading = false
          }
        }
      })
    },
    openDialog(formName) {
      var self = this
      switch (formName) {
        case 'EditPwd':
          self.dialog.pwdShow = true
          break
        case 'EditEmail':
          self.dialog.emailShow = true
          break
        case 'EditAddr':
          self.dialog.addrShow = true
          break
        case 'EditTel':
          self.dialog.telShow = true
          break
        case 'AddAuth':
          self.dialog.authShow = true
      }
    },
    Authentication() {
      var self = this
      var params = {
        vuserid: self.personInformation.vuserid,
        vusercode: self.personInformation.vusercode,
        vidcardname: self.dialog.vidcardname,
        vidcardnum: self.dialog.vidcardnum
      }
      self.$refs['dialog'].validate((valid) => {
        if (valid) {
          self.dialog.saveBtnLoading = true
          self.$api.Base({
            url: self.$url.Userinfo.addAuthInfo,
            params: params,
            headers: {
              'WCOSIGNTOKEN': utils.Auth()
            },
            suc: function (result) {
              self.dialog.saveBtnLoading = false
              if (result.code === 0) {
                self.$message('申请认证信息已提交')
                self.GetInformation()
                self.dialog.authShow = false
              } else {
                self.$alert(result.msg, '提示', {
                  type: 'warning',
                  callback: () => {}
                })
              }
            },
            err: function () {
              self.dialog.saveBtnLoading = false
              self.$alert('操作失败，请重试', '提示', {
                type: 'error',
                callback: () => {
                  self.$router.replace({
                    name: 'Error'
                  })
                }
              })
            }
          })
        } else {
          return false
        }
      })

    },
    EditPwd() {
      var self = this
      var params = {
        vuserid: self.personInformation.vuserid,
        vusercode: self.personInformation.vusercode,
        vpassword: sha1(self.dialog.vpassword)
      }
      self.$refs['dialog'].validate((valid) => {
        if (valid) {
          self.dialog.saveBtnLoading = true
          self.$api.Base({
            url: self.$url.Userinfo.editPassword,
            params: params,
            headers: {
              'WCOSIGNTOKEN': utils.Auth()
            },
            suc: function (result) {
              self.dialog.saveBtnLoading = false
              if (result.code === 0) {
                self.$message('密码修改成功')
                self.GetInformation()
                self.dialog.pwdShow = false
              } else {
                self.$alert(result.msg, '提示', {
                  type: 'warning',
                  callback: () => {}
                })
              }
            },
            err: function () {
              self.dialog.saveBtnLoading = false
              self.$alert('操作失败，请重试', '提示', {
                type: 'error',
                callback: () => {
                  self.$router.replace({
                    name: 'Error'
                  })
                }
              })
            }
          })
        } else {
          return false
        }
      })
    },
    EditEmail() {
      var self = this
      var params = {
        vuserid: self.personInformation.vuserid,
        vemail: self.dialog.vemail
      }
      self.$refs['dialog'].validate((valid) => {
        if (valid) {
          self.dialog.saveBtnLoading = true
          self.$api.Json({
            url: self.$url.Userinfo.editUserInfo,
            params: params,
            headers: {
              'WCOSIGNTOKEN': utils.Auth()
            },
            suc: function (result) {
              self.dialog.saveBtnLoading = false
              if (result.code === 0) {
                self.$message('修改成功')
                self.GetInformation()
                self.dialog.emailShow = false
              } else {
                self.$alert(result.msg, '提示', {
                  type: 'warning',
                  callback: () => {}
                })
              }
            },
            err: function () {
              self.dialog.saveBtnLoading = false
              self.$alert('操作失败，请重试', '提示', {
                type: 'error',
                callback: () => {
                  self.$router.replace({
                    name: 'Error'
                  })
                }
              })
            }
          })
        } else {
          return false
        }
      })
    },
    EditAddr() {
      var self = this
      var params = {
        vuserid: self.personInformation.vuserid,
        vdeliveryaddr: self.dialog.vdeliveryaddr
      }
      self.$refs['dialog'].validate((valid) => {
        if (valid) {
          self.dialog.saveBtnLoading = true
          self.$api.Json({
            url: self.$url.Userinfo.editUserInfo,
            params: params,
            headers: {
              'WCOSIGNTOKEN': utils.Auth()
            },
            suc: function (result) {
              self.dialog.saveBtnLoading = false
              if (result.code === 0) {
                self.$message('修改成功')
                self.GetInformation()
                self.dialog.addrShow = false
              } else {
                self.$alert(result.msg, '提示', {
                  type: 'warning',
                  callback: () => {}
                })
              }
            },
            err: function () {
              self.dialog.saveBtnLoading = false
              self.$alert('操作失败，请重试', '提示', {
                type: 'error',
                callback: () => {
                  self.$router.replace({
                    name: 'Error'
                  })
                }
              })
            }
          })
        } else {
          return false
        }
      })
    },
    EditTel() {
      var self = this
      var params = {
        vuserid: self.personInformation.vuserid,
        vtelphone: self.dialog.vtelphone
      }
      self.$refs['dialog'].validate((valid) => {
        if (valid) {
          self.dialog.saveBtnLoading = true
          self.$api.Json({
            url: self.$url.Userinfo.editUserInfo,
            params: params,
            headers: {
              'WCOSIGNTOKEN': utils.Auth()
            },
            suc: function (result) {
              self.dialog.saveBtnLoading = false
              if (result.code === 0) {
                self.$message('修改成功')
                self.GetInformation()
                self.dialog.telShow = false
              } else {
                self.$alert(result.msg, '提示', {
                  type: 'warning',
                  callback: () => {}
                })
              }
            },
            err: function () {
              self.dialog.saveBtnLoading = false
              self.$alert('操作失败，请重试', '提示', {
                type: 'error',
                callback: () => {
                  self.$router.replace({
                    name: 'Error'
                  })
                }
              })
            }
          })
        } else {
          return false
        }
      })
    },
    savename() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.EditNickName(true)
        } else {
          return false
        }
      })
    },
    EditNickName(edit) {
      var self = this
      self.buttonClick = !self.buttonClick



      if (self.ruleForm.vusername === "") {
        self.primary = false;
        return false;
      } else {
        self.primary = true;
      }
      if (edit) {
        var params = {
          vuserid: self.personInformation.vuserid,
          vusername: self.ruleForm.vusername,
          vusercode: self.input.vusercode
        }
        // if(sels.input.vusername.trim() === ''){
        //   alert(wwww)
        //   return
        // }
        self.$api.Json({
          url: self.$url.Userinfo.editUserInfo,
          params: params,
          headers: {
            'WCOSIGNTOKEN': utils.Auth()
          },
          suc: function (result) {
            if (result.code === 0) {
              self.GetInformation()
            } else {
              self.$alert(result.msg, '提示', {
                type: 'warning',
                callback: () => {}
              })
            }
          },
          err: function () {
            self.$alert('操作失败，请重试', '提示', {
              type: 'error',
              callback: () => {
                self.$router.replace({
                  name: 'Error'
                })
              }
            })
          }
        })
      }
    },
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
