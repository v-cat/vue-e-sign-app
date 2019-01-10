import utils from '../../utilPackage/utils.js'
import moment from 'moment'
import sha1 from 'js-sha1'
import persenalnav from '../PersenCenterNav/PersenCenterNav.vue'
import foot from '../Foot/Foot.vue'
export default {
  data() {

    return {

      flag: 0,
      showLogin: true,
      showRegister: true,
      showTishi: false,
      tishi: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: '',
      checked: true,
      currentPage4: 4,
      tableData: [],
      isInit: false,
      currentRow: null,
      paging: {
        current: 1, // 当前页数 从 1 开始
        limit: 20, // 数量
        total: 0 // 总数
      },
      verecordname: '',
      state: '',
      isActive: '001,002,000,099,004,003,005,100',
      loading: false,

    }
  },
  components: {
    persenalnav,
    foot,
  },
  created() {
    let self = this
    self.loading = true
    var link = this.$route.query.link
    if (link == null) {
      var vstateStr = '001,002,000,099,004,003,005,100'
      self.GetInformation(vstateStr)
    } else {
      self.GetInformation(link)
    }
  },
  methods: {
    //分页改变
    PagingChange(currentPage) {
      let self = this
      // self.paging.current = currentPage
      self.GetInformation(self.state)
    },
    PagingSizeChange(pageSize) {
      let self = this
      self.paging.limit = pageSize
      self.paging.current = 1
      self.GetInformation(self.state)
    },
    // 检索
    SearchInterTaskpoolLis() {
      let self = this
      self.paging.current = 1
      self.GetInformation(self.state)
    },
    // 获取合同列表
    GetInformation(vstateStr) {
      let self = this
      self.loading = true
      self.isActive = vstateStr
      self.flag = vstateStr
      // 获取合同列表
      self.$api.Base({
        url: self.$url.Erecord.ListErecord,
        params: {
          start: (self.paging.current - 1) * self.paging.limit,
          limit: self.paging.limit,
          vstartdate: null,
          venddate: null,
          vstate: vstateStr,
          vcontractcode: self.verecordname
        },
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            self.flag = 0
            self.paging.total = result['count']
            self.state = vstateStr
            // console.log(self.state)
            self.tableData = result.rows.rows
            if (result.rows.isInit === 1) {
              self.isInit = true
            }
            self.loading = false
          } else if (result.code !== 0) {
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading = false
          }
        },
        err: function () {
          self.$alert('获取合同信息错误，请检查网络。', '提示', {
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
    //时间格式化
    dateFormat: function (row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(date).format("YYYY-MM-DD");
    },
    Preview: function (id) {
      let self = this
      window.localStorage.setItem('Id', id)
      window.localStorage.setItem('isSign', 0)
      self.$router.replace({
        // name: 'Preview'
        name: 'signOcx'
      })
    },
    HandSign(id) {
      let self = this
      window.localStorage.setItem('Id', id)
      self.$router.replace({
        name: 'HangSign'
      })
    },
    GoSign: function (id) {
      let self = this
      window.localStorage.setItem('Id', id)
      window.localStorage.setItem('isSign', 1)
      self.$router.replace({
        // name: 'Sign'
        name: 'signOcx'
      })
    },
    //同步
    SyncPPList() {
      let self = this
      self.loading = true
      // self.isActive = vstateStr
      // self.flag = vstateStr
      // 获取合同列表
      self.$api.Base({
        url: self.$url.Erecord.SyncPPList,
        params: {},
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            alert('success')
            self.loading = false
          } else if (result.code !== 0) {
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading = false
          }
        },
        err: function () {
          self.$alert('获取信息错误，请检查网络。', '提示', {
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
