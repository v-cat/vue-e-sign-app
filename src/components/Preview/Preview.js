import utils from '../../utilPackage/utils.js'
import sha1 from 'js-sha1'
import persenalnav from '../PersenCenterNav/PersenCenterNav.vue'
import foot from '../Foot/Foot.vue'
// import myHead from '../../components/head/head.vue'
export default {
  data() {
    return {
      imgList: [],
      erecord: {},
      detailList: [],
      loading: true
    }
  },
  created() {

  },
  components: {
    persenalnav,
    foot,
  },
  mounted() {
    var self = this
    self.GetContract()
    self.loading = true
  },
  methods: {
    //获取合同
    GetContract() {
      var self = this
      self.loading = true
      var params = {
        verecordid: window.localStorage.getItem('Id'),
        flag: 1
      }
      self.$api.Base({
        url: self.$url.Erecord.GetErecord,
        params: params,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            self.erecord = result.rows.erecord
            self.imgList = result.rows.imglist
            self.detailList = result.rows.detaillist
            self.loading = false
          } else {
            self.$alert('获取合同失败！', '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading = false
          }
        },
        err: function () {
          self.$alert('获取合同失败，请检查网络!', '提示', {
            type: 'error',
            callback: () => {
              self.$router.replace({
                name: 'Error'
              })
            }
          })
          self.loading = false
        }
      })

    },
    Verify() {
      var self = this
      var params = {
        verecordid: self.erecord.verecordid
      }
      self.$api.Base({
        url: self.$url.Erecord.Verify,
        params: params,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            // self.eseal.list = result.rows["eseallist"]
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })

          } else {
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
          }
        },
        err: function () {
          self.$alert('验章失败，请检查网络!', '提示', {
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
    Download: function () {
      window.open(this.$param.ApiRoot + '/ctrl/erecord/download?verecordid=' + this.erecord.verecordid + '&WCOSIGNTOKEN=' + utils.Auth())
    },
    Print: function () {
      window.open('/web/static/Pdf/web/viewer.html?' + this.$param.ApiRoot + '/ctrl/erecord/download?verecordid=' + this.erecord.verecordid + '&WCOSIGNTOKEN=' + utils.Auth())
    }
  }
}
