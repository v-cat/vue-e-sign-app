import utils from '../../../utilPackage/utils.js'
export default {
  name: 'company',
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
    return {
      rules: {
        xlicence: [{
          //required: true,
          //message: "请上传营业执照",
          // trigger: 'blur',
        }],
        xauthorization: [{
          // required: true,
          //message: "请上传授权委托书",
          // trigger: 'change',
        }],
        agree: [{
          pattern: /true/,
          message: "请阅读并勾选注册协议",
          trigger: "change"
        }],
        vcorpname: [{
          required: true,
          message: "请填写企业名称",
          trigger: "blur"
        }],
        vcorpid: [{
          required: true,
          message: "请填写企业代码",
          trigger: "blur"
        }],
        vlegalman: [{
          required: true,
          message: "法人代表不能为空",
          trigger: "blur"
        }],
        vbankname: [{
          required: true,
          message: "请填写开户行名称",
          trigger: "blur"
        }],
        vbankaccount: [{
          required: true,
          message: "银行账户不能为空",
          trigger: "blur"
        }],
        vaddress: [{
          required: true,
          message: "请填写企业地址",
          trigger: "blur"
        }],
        vtelphone: [{
          required: true,
          pattern: /^\d[\d-]+\d$/,
          message: "请填写联系电话",
          trigger: "change"
        }],
        vtaxpayeridnum: [{
          required: true,
          pattern: /^[a-zA-Z0-9]+$/,
          message: "请填写正确格式的纳税人识别号",
          trigger: "change"
        }],
        companyname: [{
          required: true,
          message: '请输入企业名称',
          trigger: 'blur'
        }],
        terminalcode: [{
          required: true,
          message: '请输入终端编码',
          trigger: 'blur'
        }, {
          min: 4,
          max: 20,
          message: '长度在4-20个字母或数字',
          trigger: 'blur'
        }],
        terminalname: [{
          required: true,
          message: '请输入终端名称',
          trigger: 'blur'
        }, {
          min: 4,
          max: 20,
          message: '长度在4-20个字符',
          trigger: 'blur'
        }],
        terminalkey: [{
          required: true,
          message: '请输入激活码',
          trigger: 'blur'
        }, {
          min: 6,
          max: 12,
          message: '长度在6-12位字符',
          trigger: 'blur'
        }],
        terminalkeysure: [{
          required: true,
          message: '请确认激活码',
          trigger: 'blur'
        }, {
          min: 6,
          max: 12,
          message: '长度在6-12位字符',
          trigger: 'blur'
        }],
        terminalnumber: [{
          required: true,
          message: '请输入序号',
          trigger: 'blur'
        }],
      },
      ruleForm: {
        vcorpname: '',
        vcorpid: '',
        vlegalman: '',
        vbankname: '',
        vbankaccount: '',
        vaddress: '',
        vtelphone: '',
        vtaxpayeridnum: '',
        xlicense: '',
        xauthorization: '',
        agree: false,
        radio: '1',
        companyname: '',
        terminalcode: '',
        terminalname: '',
        terminalkey: '',
        terminalkeysure: '',
        terminalnumber: '',
        certs: [],
        selCert: '',
      },
      // radio: '0',
      savebtn: false,
      // loading: false,
      show: false,
      user: true,
      auth: {},
      CompanyInfor: false,
      CompanyEnter: false,
      SubmitInfo: false,
      options: [{
        value: '选项1',
        label: '证书1'
      }, {
        value: '选项2',
        label: '证书2'
      }, {
        value: '选项3',
        label: '证书3'
      }, {
        value: '选项4',
        label: '证书4'
      }, {
        value: '选项5',
        label: '证书5'
      }],
      value: '',
    }
  },
  created() {
    let self = this
    self.GetOrgInfo()

  },
  methods: {
    //校验上传文件
    CheckFile(file) {
      let self = this
      var fname = file.name
      if (fname != undefined && fname != '') {
        if (file.size > 5 * (2 << 19)) {
          self.$message('文件超过5m!')
          return false
        }
        var reg = /(png)|(jpg)|(jpeg)|(gif)|(pdf)/
        if (reg.test(fname.slice(fname.length - 3, ))) {
          return true
        } else {
          self.$message('不支持的文件类型')
          return false
        }
        return false
      }
    },
    //添加授权书文件
    AddXauthorization(file) {
      let self = this
      var reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = function (e) {
        self.ruleForm.xauthorization = this.result
      }
    },
    //添加营业执照文件
    AddXlicence(file) {
      let self = this
      var reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = function (e) {
        self.ruleForm.xlicense = this.result
      }
    },
    //移除营业执照文件
    RemoveXlicence() {
      let self = this
      self.ruleForm.xlicense = ''
    },
    //移除授权书文件
    RemoveXauthorization() {
      let self = this
      self.ruleForm.xauthorization = ''
    },
    //获取企业信息
    GetOrgInfo() {
      let self = this
      var params = {}
      self.$api.Json({
        url: self.$url.OrgInfo.GetOrgInfo,
        params: params,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            // console.log(result)
            self.savebtn = false
            self.user = false
            self.auth = result.rows
          } else {}
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
          self.user = false
        }
      })
    },

    //提交企业认证表单
    EnterInfo() {
      let self = this
      self.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          self.SubmitInfo = true
        } else
          return false
        if (!(self.ruleForm.xauthorization && self.ruleForm.xlicense)) {
          self.$message('请上传相关文件')
          return false
        }
      })
    },
    SubmitAuthInfo() {
      let self = this
      var params = {
        vcorpname: self.ruleForm.vcorpname,
        vcorpid: self.ruleForm.vcorpid,
        vlegalman: self.ruleForm.vlegalman,
        vbankname: self.ruleForm.vbankname,
        vbankaccount: self.ruleForm.vbankaccount,
        vaddress: self.ruleForm.vaddress,
        vtelphone: self.ruleForm.vtelphone,
        vtaxpayeridnum: self.ruleForm.vtaxpayeridnum,
        xlicense: self.ruleForm.xlicense,
        xauthorization: self.ruleForm.xauthorization,
        vdefine1: self.ruleForm.radio
      }
      self.$api.Json({
        url: self.$url.OrgInfo.addOrgInfo,
        params: params,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          self.savebtn = false
          if (result.code === 0) {
            // console.log(result)
            self.$message('申请认证成功')
            self.savebtn = false
            self.show = false
            self.user = false
            self.auth = result.rows
            //   self.auth.vcorpid=''
          } else {
            console.log(result.code)
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })

          }
        },
        err: function () {
          // self.savebtn = false
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
    },
    Certification() {
      let self = this
      self.show = true
    },
    CertificationFalse() {
      let self = this
      self.show = false
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    JoinCompany(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('申请加入!');
          this.CompanyInfor = false
        } else {
          return false;
        }
      });
    },
    LoadCert() { //加载证书
      var self = this
      //
      try {
        let ocx = document.getElementById('SesSealOcx')
        if (ocx) {
          self.ruleForm.certs = []
          self.ruleForm.selCert = ''
          var rv = ocx.SESealInitialize()
          var CertCount = ocx.SESealEnumCerts()
          var list = []
          for (var i = 0; i < CertCount; i++) {
            var Cert = ocx.SESealGetCertByIndex(i)
            var CertDn = ocx.SESealGetCertInfo(Cert, 'subject')
            list.push({
              name: CertDn,
              cert: Cert,
              idx: i.toString()
            })
          }
          rv = ocx.SESealFinalize()
          // 证书列表获取结束
          if (list.length === 0) {
            self.$alert('未检测到UK,请插入UK.', '提示', {
              type: 'warning',
              callback: () => {}
            })
          } else {
            self.$alert('读取到' + list.length + '个证书', '提示', {
              type: 'success',
              callback: () => {
                self.ruleForm.certs = list
                self.ruleForm.selCert = self.ruleForm.certs[0]
              }
            })
          }
        }
      } catch (e) {
        self.$alert('ActiveX控件加载失败，请使用IE11浏览器，并开启ActiveX权限', '提示', {
          type: 'error',
          callback: () => {}
        })
      }
    },
    ApiAdd() { //添加终端
      var self = this
      if (self.ruleForm.terminalkey !== self.ruleForm.terminalkeysure) {
        self.$alert('两次输入的密码不一样', '提示', {
          type: 'warning',
          callback: () => {}
        })
      } else {
        let params = {
          tscode: self.ruleForm.terminalcode,
          tsname: self.ruleForm.terminalname,
          password: self.ruleForm.terminalkey,
          xcertstr: self.ruleForm.selCert.cert,
          xh: 0,
          state: '01',
        }
        // 添加终端数据 数据
        self.$api.Form({
          url: self.$url.Term.Add,
          headers: {
            'WCOSIGNTOKEN': utils.Auth()
          },
          params: params,
          suc: function (result) {
            self.CompanyEnter = false
            if (result.code === 0) {
              self.CompanyEnter = false
              self.$message('申请接入成功')
              //self.ApiTermList(self.suppList.selItem)
            } else {
              self.$alert(result.msg, '提示', {
                type: 'warning',
                callback: () => {}
              })
            }
          },
          err: function () {
            self.CompanyEnter = false
            self.$alert('申请接入错误，请检查网络。', '提示', {
              type: 'error',
              callback: () => {}
            })
          }
        })
      }
    },
  },

}
