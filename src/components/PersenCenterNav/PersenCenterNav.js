import utils from '../../utilPackage/utils.js'
export default {
  name: 'persenalnav',
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
      number: ''
    }
  },
  created() {
    let self = this
    self.GetInformation()
  },
  methods: {
    //页面跳转
    Buy(item) {
      let self = this
      this.$router.push({
        path: "/AccountManagement/account",
        query: {
          details: item,
        }
      })
    },
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
            var numbers = result.rows.msgAmount
            if (numbers > 0) {
              self.number = numbers
            }
          } else {
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading = false
          }
        },
        err: function () {

          self.$alert('获取证书信任链信息错误，请检查网络。', '提示', {
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
