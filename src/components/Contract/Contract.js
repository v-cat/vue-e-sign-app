import utils from '../../utilPackage/utils.js'
import sha1 from 'js-sha1'
import foot from '../Foot/Foot.vue'
import homenav from '../HomeNav/HomeNav.vue'
export default {
  name: 'Enter',
  data() {
    return {
      isUpload: true,
      isBackgroung: true,
      hasError: false,
      isRevert: true,
      isRevertWhite: false,
      file: {
        file: undefined,
        name: '...',

      },
      activeIndex: '2',
      activeIndex2: '2',
      SignInfor: false,
      innerVisible: false,
      signInfoList: [],
      signInfoLength: '',
      loading: {
        upload: false,
        saving: false,

      },
      uploaded: false,
      sessionFlag: false,
      activeIndex2: '2-5-1'
    }
  },
  components: {
    foot,
    homenav,
  },
  created() {
    var session = window.sessionStorage.getItem('SESSION')
    if (session === undefined || session === null || session === '' || session === ' ' || session === 'null') {
      this.sessionFlag = false;
      // console.log(session)
    } else {
      this.sessionFlag = true;
    }
  },
  methods: {
    //页面跳转
    SelectMe(item) {
      let self = this
      self.$router.push({
        // name: 'contractManagement',
        path: "/Product",
        query: {
          link: item,
        }
      })
      // console.log(self.$route.query)
    },
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
          // console.log(self.file.base64)
          self.uploaded = true

        }
      }
    },
    SignInfo() {
      var self = this
      self.loading.upload = true
      var params = {
        erecordFile: self.file.base64
      }
      self.$api.File({
        url: self.$url.Erecord.SignInfo,
        params: params,
        headers: {
          //'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            self.signInfoList = result.rows
            self.signInfoLength = result.rows.length
            self.SignInfor = true
            self.loading.upload = false
          } else {
            self.$alert('验签失败', '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading.upload = false
          }
        },
        err: function () {
          self.$alert('验签失败失败，请检查网络!', '提示', {
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
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    // 上传
    // Upload() {
    //   var self = this
    //   self.loading.upload = true
    //   var params = {
    //     file: self.file.base64
    //   }
    //   self.$api.File({
    //     url: self.$url.Erecord.Upload,
    //     params: params,
    //     headers: {
    //       'WCOSIGNTOKEN': utils.Auth()
    //     },
    //     suc: function (result) {
    //       if (result.code === 0) {
    //         self.ver = result.rows
    //         self.savebtn = false
    //         self.$message('上传合同成功!')
    //         self.loading.upload = false
    //       } else {
    //         self.$alert('上传合同失败,' + result.msg, '提示', {
    //           type: 'warning',
    //           callback: () => {}
    //         })
    //         self.savebtn = false
    //       }
    //     },
    //     err: function () {
    //       self.$alert('上传合同失败，请检查网络!', '提示', {
    //         type: 'error',
    //         callback: () => {}
    //       })
    //       self.savebtn = false
    //     }
    //   })
    // },
  }
}
