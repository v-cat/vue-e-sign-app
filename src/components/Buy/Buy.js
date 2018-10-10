import utils from '../../utilPackage/utils.js'
import sha1 from 'js-sha1'
import persenalnav from '../PersenCenterNav/PersenCenterNav.vue'
import foot from '../Foot/Foot.vue'
// import myHead from '../../components/head/head.vue'
export default {
  data() {
    return {
      activeName2: '1',
      imgList: [],
      erecord: {},
      tableData: [],
      Code: '...',
      vid: '',
      loading: true
    }
  },
  components: {
    persenalnav,
    foot,
  },
  created() {
    let self = this
    self.loading = true
    self.ProductList()
    //   var order = this.$route.query.order
    //   if (order == null) {
    //     var vstateStr = '1'
    //     self.ProductList(vstateStr)
    //   } else {
    //     self.ProductList(order)
    //   }
  },

  methods: {
    //获取合同
    ProductList(item) {
      let self = this
      self.loading = true
      var params = {
        // verecordid: window.localStorage.getItem('Id'),
        // flag: 1
        vid: 2
      }
      self.$api.Base({
        url: self.$url.Order.buyProduct,
        params: params,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            console.log(result)
            self.tableData = result.rows
            self.Code = result.rows[0].vorderCode
            self.vid = result.rows[0].vid
            self.loading = false
          } else {
            self.$alert('获取失败！', '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading = false
          }
        },
        err: function () {
          self.$alert('获取失败，请检查网络!', '提示', {
            type: 'error',
            callback: () => {
              // self.$router.replace({
              //   name: 'Error'
              // })
            }
          })
          self.loading = false
        }
      })

    },
    Paymoney() {
      let self = this
      // self.loading = true
      var params = {
        vid: self.vid
      }
      self.$api.Base({
        url: self.$url.Order.alipay,
        params: params,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },

        suc: function (result) {
          console.log(result)
         document.write(result)
          if (result.code != null && result.code === 0) {
          console.log(result)
          self.loading = false
        } else {
          self.$alert('获取失败！', '提示', {
            type: 'warning',
            callback: () => {}
          })
          self.loading = false
        }
        },
        err: function () {
          self.$alert('获取失败，请检查网络!', '提示', {
            type: 'error',
            callback: () => {
              // self.$router.replace({
              //   name: 'Error'
              // })
            }
          })
          self.loading = false
        }
      })


    }

  }
}
