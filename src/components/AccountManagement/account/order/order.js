import utils from '../../../../utilPackage/utils.js'
import sha1 from 'js-sha1'
export default {
  name: 'order',
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
      tableData: [],
      tableData1: [{
        date: 111
      }],
      loading: false,
      paging: {
        current: 1, // 当前页数 从 1 开始
        limit: 10, // 数量
        total: 0 // 总数
      },
      state: '',
    }
  },
  created() {
    let self = this
    self.listProduct()
  },
  methods: {
    //分页改变
    PagingChange(currentPage) {
      let self = this
      // self.paging.current = currentPage
      self.listProduct(self.state)
    },
    PagingSizeChange(pageSize) {
      let self = this
      self.paging.limit = pageSize
      self.paging.current = 1
      self.listProduct(self.state)
    },
    listProduct(item) {
      let self = this
      self.loading = true
      var params = {
        start: (self.paging.current - 1) * self.paging.limit,
        limit: self.paging.limit,
      }
      self.$api.Base({
        url: self.$url.Order.listOrder,
        params: params,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            //  element.render('50');
            self.paging.total = result['count']
            console.log(result)
            self.tableData = result.rows
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
