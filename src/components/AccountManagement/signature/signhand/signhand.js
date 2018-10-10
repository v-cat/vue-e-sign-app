import utils from '../../../../utilPackage/utils.js'
export default {
  inject: ['reload'],
  data() {
    return {
      idView: [],
      signClicked: false

    };
  },
  created() {
    let self = this
    self.getQRCode()
    $(".acc-signature").addClass("select-signature");
    //  var each = document.getElementsByClassName('search-infor-words')
    //  // each.color = "red";
    //  console.log(each)
  },
  mounted() {
    let self = this
    if (self.timer) {
      clearInterval(self.timer);
    } else {
      self.timer = setInterval(() => {
        self.getUploadDetail();
        self.getQRCode()
      }, 3000);
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
        url: self.$url.SignHandWriting.isUpload,
        params: '',
        headers: {
          WCOSIGNTOKEN: utils.Auth()
        },
        suc: function (result) {
          if (result.rows === 1) {
            if (self.timer)
              clearInterval(self.timer)
            self.$router.replace({
              name: 'seal'
            })

          } else {

          }
        },
        err: function () {
          self.$alert('二维码获取失败，请检查网络!', '提示', {
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
    getQRCode() {
      var self = this
      var params = {}
      self.$api.Json({
        url: self.$url.Eseal.GetQRCode,
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
              self.$router.replace({
                name: 'Error'
              })

            }
          })


        }
      })
    },
  }
}
