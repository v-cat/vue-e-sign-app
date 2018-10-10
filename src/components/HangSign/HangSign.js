import utils from '../../utilPackage/utils.js'
import sha1 from 'js-sha1'
import persenalnav from '../PersenCenterNav/PersenCenterNav.vue'

import foot from '../Foot/Foot.vue'

export default {
  inject: ['reload'],
  data() {
    return {
      idView: [],
      signClicked: false
    };
  },
  components: {
    persenalnav,
    foot,
  },
  created() {
    let self = this
    self.getQRCode()

  },
  mounted() {
    let self = this
    if (self.timer) {
      clearInterval(self.timer);
    } else {
      self.timer = setInterval(() => {
        self.getUploadDetail();
      }, 5000);
    }
  },
  destroyed() {
    let self = this
    clearInterval(self.timer)
  },
  methods: {
    // Request
    getUploadDetail() {
      let self = this
      // alert('qqq'),
      self.$api.Json({
        url: self.$url.HangSign.isUpload,
        params: '',
        headers: {
          WCOSIGNTOKEN: utils.Auth()
        },
        suc: function (result) {
          if (result.rows === 1) {
            // alert('www')
            if (self.timer)
              clearInterval(self.timer)
            self.$router.replace({
              name: 'ContractManagement'
            })
            // self.reload()
          } else {
            // alert('2')
          }
        },
        err: function () {
          self.$alert('手写签名获取错误，请检查网络!', '提示', {
            type: 'error',
            callback: () => {
              self.$router.replace({
                name: 'Error'
              })
            }
          })
        }
        //跳转至error页面
      })
    },
    getQRCode() {

      var self = this

      var params = {

        vid: window.localStorage.getItem('Id'),

      }
      self.$api.Base({
        url: self.$url.HangSign.getQRCode,
        params: params,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            self.idView = result.rows
          }

        },
        err: function () {
          self.$alert('二维码获取失败，请检查网络!', '提示', {
            type: 'error',
            callback: () => {
              // self.$router.replace({
              //   name: 'Error'
              // })
            }
          })
          //跳转至error页面
        }
      })
    },
  }

}
