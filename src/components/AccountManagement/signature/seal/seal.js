import utils from '../../../../utilPackage/utils.js'
export default {
  name: 'seal',
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
      dialogImageUrl: '',
      dialogVisible: false,
      imageUrl: '',
      file: {
        file: undefined,
        name: '...',
        base64: ''
      },
      list: [],
      //   setDefault: '设为默认'
      delect: true,
      loading: false,
      // loading: {
      //   seal: false,
      // },
    }
  },
  created() {
    let self = this
    this.loading = true
    this.ApiSearch()

  },
  methods: {
    ApiSearch() {
      var self = this
      self.loading = true
      self.delect = false
      self.$api.Base({
        url: self.$url.Seal.List,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        params: {

        },
        suc: function (result) {

          if (result.code === 0) {
            self.list = result['rows']
            self.loading = false
            self.delect = true
          }
          if (result.count !== 0) {
            self.delect = false
            self.loading = false
          }
        },
        err: function () {
          self.$alert('印章获取失败，请检查网络', '提示', {
            type: 'error',
            callback: () => {
              self.$router.replace({
                name: 'Error'
              })
            }
          })

          self.loading = true
          self.delect = true
        }
      })
    },
    // 删除
    ApiDelete(item, idx) {
      var self = this
      self.$confirm('此操作将永久删除该印章, 是否继续?', '删除-印章', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //self.loadingIdx = idx
        self.$api.Base({
          url: self.$url.Seal.Delete,
          params: {
            vesealids: item['vesealid']
          },
          headers: {
            'WCOSIGNTOKEN': utils.Auth()
          },
          suc: function (result) {
            self.loadingIdx = -1
            if (result.code === 0) {
              self.$message('印章删除成功！')
              self.ApiSearch()
            } else {
              self.$alert(result.msg, '提示', {
                type: 'warning',
                callback: () => {}
              })
            }
          },
          err: function () {
            self.$alert('删除印章错误，请检查网络。', '提示', {
              type: 'error',
              callback: () => {
                self.$router.replace({
                  name: 'Error'
                })
              }
            })
            self.loadingIdx = -1
          }
        })
      }).catch(() => {})
    },
    //设为默认
    ApiDefault(item, idx) {
      var self = this
      self.$api.Base({
        url: self.$url.Seal.SetDefault,
        params: {
          vesealid: item['vesealid']
        },
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            self.ApiSearch()

            self.$message.success('设置默认印章成功！')
          } else {
            self.$alert(result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
          }
        },
        err: function () {
          self.$alert('印章设置默认错误，请检查网络。', '提示', {
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
