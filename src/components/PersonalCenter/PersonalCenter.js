import utils from '../../utilPackage/utils.js'
// import sha1 from 'js-sha1'
import persenalnav from '../PersenCenterNav/PersenCenterNav.vue'
import foot from '../Foot/Foot.vue'
export default {
  data() {
    return {

      signMe: 0,
      signHe: 0,
      signFinish: 0,
      signDrafts: 0,
      recentNews: 0,
      signinformation: {},
      personInformation: {},
      userVerify: true,
      hasEseal: true,
      signNew: {
        signMe: '',
        signHe: '',
        signFinish: '',
        signDrafts: '',
      },
      contracts: {
        inSearch: false,
        list: []
      },
      list: [],
      verify: true,
      loading: false,
      verification: {
        authenticated: '',
        unauthorized: '',

      },
      isFixed: false,
      // isNavigation: true,
    }
  },
  components: {
    persenalnav,
    foot
  },
  created() {
    var self = this
    self.loading = true
    self.GetInformation()
    self.SignNews()
    self.GetSchedule()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    redirect(options) {
      var url = options.attr('val')
      window.location.href = url
    },
    handleScroll() {
      var self = this
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 20) {
        self.isFixed = true
      }
      if (scrollTop < 20) {
        self.isFixed = false
      }
    },
    SignMe(item) {
      let self = this
      self.$router.push({
        path: "/contractManagement",
        query: {
          link: item,
        }
      })
    },
    News() {
      let self = this
      self.$router.replace({
        name: 'News'
      })
    },
    showSignMe(index) {
      this.signMe = index
    },
    showSignHe(index) {
      this.signHe = index
    },
    showSignFinish(index) {
      this.signFinish = index
    },
    showSignDrafts(index) {
      this.signDrafts = index
    },
    showRecentNews(index) {
      this.recentNews = index
    },
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
            self.personInformation = result.rows.userPo
            var verifyinfor = result.rows.isAuth
            var hasEseal = result.rows.hasEseal
            if (verifyinfor === 0) {
              self.loading = false
              self.userVerify = false
              self.verification.authenticated = '已认证'
              self.verification.unauthorized = '未认证'
            } else {
              self.loading = false
              self.userVerify = true
              self.verification.authenticated = '已认证'
              self.verification.unauthorized = '未认证'
            }
            if (hasEseal === 0) {
              self.hasEseal = false;
            }
          } else if (result.code !== 0) {
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading = false
          }
        },
        err: function () {
          self.$alert('获取个人信息错误，请检查网络。', '提示', {
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
    // 获取签署信息
    SignNews() {
      let self = this
      // 获取签署信息
      self.$api.Base({
        url: self.$url.Erecord.SignNews,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          //待我签
          if (result.code === 0) {
            self.signNew.signMe = result.rows.signMe
            self.signNew.signHe = result.rows.signHe
            self.signNew.signFinish = result.rows.signFinish
            self.signNew.signDrafts = result.rows.signDrafts
          } else {
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
          }
        },
        err: function () {
          self.$alert('获取签署信息错误，请检查网络。', '提示', {
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
    GetSchedule() {
      let self = this
      // 获取合同列表
      self.$api.Base({
        url: self.$url.Erecord.ListErecord,
        params: {
          top: 3,
          vstartdate: null,
          venddate: null,
          vstate: '001',
        },
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            self.contracts.list = result.rows
            var verifyinfor = result.rows.length
            if (verifyinfor === 0) {
              self.verify = true
            } else {
              self.verify = false
            }
          } else if (result.code !== 0) {
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
          }
        },
        err: function () {
          self.$alert('获取合同列表错误，请检查网络。', '提示', {
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

    Preview: function (id) {
      let self = this
      window.localStorage.setItem('Id', id)
      self.$router.replace({
        name: 'Preview'
      })
    },
    GoSign: function (id) {
      let self = this
      window.localStorage.setItem('Id', id)
      self.$router.replace({
        name: 'Sign'
      })
    },
    HandSign(id) {
      let self = this
      window.localStorage.setItem('Id', id)
      self.$router.replace({
        name: 'HangSign'
      })
    },
  }
}
