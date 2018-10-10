import utils from '../../../../utilPackage/utils.js'
import sha1 from 'js-sha1'
// import from '../signature.js'
export default {
  name: 'upload',
  inject: ['reload'],
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
      // activePrice: '1',
      imageUrl: '',
      file: {
        file: undefined,
        name: '...',
        base64: ''
      },
      isUpload: true,
      isBackgroung: true,
      hasError: false
    }
  },
  created() {
    let self = this
    // $(".acc-signature").css("color", "#be926f",
    //   "border-bottom", "1px")
    $(".acc-signature").addClass("select-signature");
    // var each = document.getElementsByClassName('search-infor-words')
    // // each.color = "red";
    // console.log(each)
  },
  methods: {
    // 预览图片点击事件
    // PreviewImgClick(e) {
    //   if (this.isUpload) {
    //     e.currentTarget.nextElementSibling.click()
    //   } else {
    //     utils.PubVue().$emit('id-sealmademodal')
    //   }
    // },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isPNG) {
        this.$message.error('上传头像图片只能是 PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isPNG && isLt2M;

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
        if (fileType.toLocaleLowerCase() !== 'png') {
          self.file.name = '...'
        } else if (fileSize / 1024 > 2000) {

          self.file.name = '...'

        } else {
          self.file.name = fileName

          var fileReader = new FileReader()
          fileReader.onload = function () {
            self.file.base64 = this.result
          }
          fileReader.readAsDataURL(e.currentTarget.files[0])
        }
        e.currentTarget.value = ''

      }
    },
    EsealSave() {
      var self = this
      var params = {
        xsourceimgstr: self.file.base64
      }
      self.$api.Json({
        url: self.$url.Eseal.Add,
        params: params,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {

            self.$router.replace({
              name: 'seal'
            })

          } else {
            self.$alert('印章烧制失败,' + result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
          }
        },
        err: function () {
          self.$alert('印章烧制错误，请检查网络!', '提示', {
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

  }

}
