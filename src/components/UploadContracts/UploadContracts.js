import utils from '../../utilPackage/utils.js'
import sha1 from 'js-sha1'
export default {
  data() {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: '',
      checked: true,
      currentPage4: 4,
      currentRow: null,
      contactList: [],
      timeout: null,
      rules: {
        code: [{
            required: true,
            message: '请输入合同主题',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 12,
            message: '长度在 3 到 12 个字符',
            trigger: 'blur'
          }
        ],
        name: [{
            required: true,
            message: '请输入合同主题',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 8,
            message: '长度在3 到 8 个字符',
            trigger: 'blur'
          }
        ],
        signPattern: [{
          required: false,
          message: '请选择签署模式',
          trigger: 'change'
        }],
        signOrder: [{
          required: true,
          message: '请选择签署顺序',
          trigger: 'change'
        }],
        datepick: [{
          type: 'date',
          required: false,
          message: '请选择日期',
          trigger: 'change'
        }],
        desc: [{
          required: false,
          message: '请添加备注信息',
          trigger: 'blur'
        }]

      },
      isBackgroung: true,
      hasError: false,
      isRevert: true,
      isRevertWhite: false,
      isUpload: true,
      file: {
        file: undefined,
        name: '...',

      },
      ruleForm: {
        code: '',
        name: '',
        datepick: '',
        desc: '',
        signPattern: '',
        signOrder: '',
      },
      conList: [{
        organization: '',
        number: ''
      }],
      idx: 0,
      ver: '',
      savebtn: true,
      fileType: [],
      loading: {
        upload: false,
        saving: false,

      }
    }
  },
  created() {
    this.List();
  },
  methods: {
    // 文件改变
    FileChange(e) {
      var self = this
      self.isBackgroung = false
      self.hasError = true
      if (e.currentTarget.files.length === 1) {
        var fileSize = e.currentTarget.files[0].size
        var fileName = e.currentTarget.files[0].name
        var fileType = fileName.substring(fileName.length - 3)
        // 文件类型判断
        if (fileType.toLocaleLowerCase() !== 'pdf') {
          self.file.name = '...'
          self.$alert('只能上传PDF文件!', '提示', {
            type: 'warning',
            callback: () => {}
          })
        } else if (fileSize / 1024 > 2000) {
          // 文件大小判断
          self.file.name = '...'
        } else {
          self.file.name = fileName
          self.file.base64 = e.currentTarget.files[0]
          self.Upload()

        }
      }
    },
    // 上传
    Upload() {
      var self = this
      self.loading.upload = true
      var params = {
        file: self.file.base64
      }
      self.$api.File({
        url: self.$url.Erecord.Upload,
        params: params,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            self.ver = result.rows
            self.savebtn = false
            self.$message('上传合同成功!')
            self.loading.upload = false
          } else {
            self.$alert('上传合同失败,' + result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.savebtn = false
          }
        },
        err: function () {
          self.$alert('上传合同失败，请检查网络!', '提示', {
            type: 'error',
            callback: () => {
              self.$router.replace({
                name: 'Error'
              })
            }
          })
          self.savebtn = false
        }
      })
    },
    GoSave() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.Save()
        } else {

          return false
        }
      })
    },

    // 保存
    Save() {
      var self = this
      var vcode = ""
      var vusercodes = ""
      self.loading.upload = true
      for (var i = 0; i < self.conList.length; i++) {
        vcode += self.conList[i].organization + ","
        vusercodes += self.conList[i].number + ","
      }

      var params = {
        ver: self.ver,
        type: self.ruleForm.signOrder,
        venddate: self.ruleForm.datepick === undefined ? self.ruleForm.datepick.Format('yyyy-MM-dd') + ' 23:59:59' : null,
        vcodes: vcode,
        vusercodes: vusercodes,
        verecordname: self.ruleForm.name,
        // xerecordstr: self.ruleForm.name,
        vcontractcode: self.ruleForm.code,
        remark: self.ruleForm.desc
      }
      self.$api.File({
        url: self.$url.Erecord.Add,
        params: params,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            // self.ver = result.rows

            self.$message('保存合同成功')
            // var Id = result.rows
            self.loading.upload = false
            window.localStorage.setItem('Id', result.rows)
            self.$router.replace({
              name: 'Sign',
            })
          } else {
            self.$alert('保存合同失败,' + result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading.upload = false
          }
        },
        err: function () {
          self.$alert('保存合同失败，请检查网络!', '提示', {
            type: 'error',
            callback: () => {
              self.$router.replace({
                name: 'Error'
              })
            }
          })
          self.loading.upload = false
        }
      })
    },
    List: function () {
      var self = this
      self.$api.Base({
        url: self.$url.Contact.List,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            self.contactList = result.rows
          }
        },
        err: function () {
          self.$alert('查询合同列表失败，请检查网络!', '提示', {
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
    QuerySearchAsync(queryString, cb) {
      var restaurants = this.contactList;
      var results = queryString ? restaurants.filter(this.CreateStateFilter(queryString)) : restaurants;

      cb(results);

    },
    CreateStateFilter(queryString) {
      return (state) => {
        return (state.vcode.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    HandleSelect(item) {
      var self = this
      var idx = self.idx
      self.conList[idx].organization = item.vcode
      self.conList[idx].number = item.vcontact
    },
    AddContact() {
      this.conList.push({
        organization: '',
        number: '',
      });
    },
    DelContact(item) {
      var index = this.conList.indexOf(item)
      if (index !== 0) {
        this.conList.splice(index, 1)
      }
    },
    Focus(idx) {
      this.idx = idx
    }
  }
}
