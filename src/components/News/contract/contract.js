import utils from '../../../utilPackage/utils.js'
export default {
  name: 'contract',
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
      delectAll: false,
      readAll: false,
      flag: 0,
      // isRead: true,
      tableData: [],
      loading: false,
      state: '',
      multipleSelection: [],
      vid: '',
      paging: {
        current: 1, // 当前页数 从 1 开始
        limit: 20, // 数量
        total: 0 // 总数
      },

      options: [{
        value: '1',
        label: '已读消息'
      }, {
        value: '0',
        label: '未读消息'
      }, ],

    }
  },
  created() {
    let self = this
    // self.loading = true
    var vstateStr = '1'
    self.GetNews(vstateStr)
  },
  methods: {
    //分页改变
    PagingChange(currentPage) {
      let self = this
      // self.paging.current = currentPage
      self.GetNews(self.state)
    },
    PagingSizeChange(pageSize) {
      let self = this
      self.paging.limit = pageSize
      self.paging.current = 1
      self.GetNews(self.state)
    },
    GetNews(vstateStr) {
      let self = this
      self.loading = true
      // 获取合同列表
      self.$api.Base({
        url: self.$url.News.getNews,
        params: {
          start: (self.paging.current - 1) * self.paging.limit,
          limit: self.paging.limit,
          ltype: vstateStr,
        },
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            self.flag = 0
            self.paging.total = result['count']
            self.state = vstateStr
            self.tableData = result.rows
            self.loading = false
            // self.lisread = result.rows.lisread
          } else if (result.code !== 0) {
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading = false
          }
        },
        err: function () {
          self.$alert('获取合同消息错误，请检查网络。', '提示', {
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
    Detial(item) {
      let self = this
      self.$router.push({
        path: "/contractManagement",
        query: {
          link: item,
        }
      })
    },
    //全选
    SelectAll(val) {
      let self = this
      self.multipleSelection = []
      for (var i = 0; i < val.length; i++) {
        var vid = val[i].vid
        self.multipleSelection.push(vid);
      }
      self.delectAll = true
      self.readAll = true
    },
    //勾选数据行的 Checkbox
    SelectOne(val) {
      let self = this
      self.multipleSelection = []
      if (val.length >= 1) {
        for (var i = 0; i < val.length; i++) {
          var vid = val[i].vid
          self.multipleSelection.push(vid);
        }
      }
      self.delectAll = true
      self.readAll = true
    },
    //删除
    Delet() {
      let self = this
      self.loading = true
      var vvids = self.multipleSelection.join(',')
      console.log(vvids)
      if (vvids == '') {
        self.$alert('请选择要标记的文件', '提示', {
          type: 'warning',
          callback: () => {}
        })
        // alert('请选择要标记的文件')
        self.loading = false
      } else {
        // 获取合同列表
        self.$api.Base({
          url: self.$url.News.Delect,
          params: {
            vids: vvids,
          },
          headers: {
            'WCOSIGNTOKEN': utils.Auth()
          },
          suc: function (result) {
            if (result.code === 0) {
              self.loading = false
              self.$message('删除成功!')
              self.reload()
              //console.log(result)
            } else if (result.code !== 0) {
              self.$alert(result.msg, '提示', {
                type: 'warning',
                callback: () => {}
              })
              self.loading = false
            }
          },
          err: function () {
            self.$alert(' 删除失败', '提示', {
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
      }


    },
    //标为已读
    IsRead() {
      let self = this
      self.loading = true
      var vvids = self.multipleSelection.join(',')
      console.log(vvids)
      if (vvids == '') {
        self.$alert('请选择要标记的文件', '提示', {
          type: 'warning',
          callback: () => {}
        })
        // alert('请选择要标记的文件')
        self.loading = false
      } else {
        // 获取合同列表
        self.$api.Base({
          url: self.$url.News.IsRead,
          params: {
            vids: vvids,
          },
          headers: {
            'WCOSIGNTOKEN': utils.Auth()
          },
          suc: function (result) {
            if (result.code === 0) {
              self.$message('标记成功!')
              self.loading = false
              self.reload()

            } else if (result.code !== 0) {
              self.$alert(result.msg, '提示', {
                type: 'warning',
                callback: () => {}
              })
              self.loading = false
            }
          },
          err: function () {
            self.$alert(' 标记失败', '提示', {
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
      }

    },
    //选择已读 未读
    changeRead(item) {
      let self = this
      self.loading = true
      var isRead = item
      //已读为1，未读为0

      // 获取合同列表
      // console.log(item)
      self.$api.Base({
        url: self.$url.News.getNews,
        params: {
          start: (self.paging.current - 1) * self.paging.limit,
          limit: self.paging.limit,
          ltype: 1,
          lisread: isRead
        },
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            // alert(isRead)
            self.tableData = result.rows
            self.loading = false
            // self.reload()
          } else if (result.code !== 0) {
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading = false
          }
        },
        err: function () {
          self.$alert('获取合同消息错误，请检查网络。', '提示', {
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
