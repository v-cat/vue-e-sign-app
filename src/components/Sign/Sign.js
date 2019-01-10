import utils from '../../utilPackage/utils.js'
import sha1 from 'js-sha1'
import persenalnav from '../PersenCenterNav/PersenCenterNav.vue'
import foot from '../Foot/Foot.vue'
// import myHead from '../SignStyle/SignStyle.vue'
export default {

  data() {
    return {
      eseal: {
        list: [],
        item: {}
      },
      imgList: [],
      erecord: {},
      dragNodes: [],
      imgCanBeDrag: false, // 拖拽后生成的image是否能被拖拽
      movingNodeGuid: '', // 表示正在移动的node guid
      _movingNodeOffset: {},
      isActive: true,
      formData: [],
      guidCur: {},
      esealCur: {},
      contract: {
        height: 800,
      },
      ele: '',
      loading: {
        seal: false,
        contract: false,
      },
      // pathName: [],

    }
  },
  components: {
    persenalnav,
    foot,
  },
  created() {
    var self = this
    self.loading.seal = true
    self.loading.contract = true
    self.formData = new Map()
    self.GetSeal()
    self.GetContract()
  },
  methods: {

    GetSeal() {
      var self = this
      self.loading.seal = true
      var params = {}
      self.$api.Base({
        url: self.$url.Eseal.GetEseal,
        params: params,
        headers: {
          'WCOSIGNTOKEN': utils.Auth()
        },
        suc: function (result) {
          if (result.code === 0) {
            self.eseal.list = result.rows["eseallist"]
            self.loading.seal = false

            // console.log(self.eseal.list[3].xsourceimgstr)
            // var img = document.getElementsByClassName('removeIt')
            // Console.log(img)
          } else {
            self.$alert(' 获取印章失败,' + result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading.seal = false
          }
        },
        err: function () {
          self.$alert(' 获取印章失败，请检查网络!', '提示', {
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
    //获取合同
    GetContract() {
      var self = this
      self.loading.contract = true
      var params = {
        verecordid: window.localStorage.getItem('Id'),
        flag: 0
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
            self.loading.contract = false
          } else {
            self.$alert(' 获取印章失败,' + result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
            self.loading.contract = false
          }
        },
        err: function () {
          self.$alert(' 获取印章失败，请检查网络!', '提示', {
            type: 'error',
            callback: () => {
              self.$router.replace({
                name: 'Error'
              })
            }
          })
          self.loading.contract = false
        }
      })
    },
    removeParentNode(self) {
      self.parentNode.parentNode.removeChild(self.parentNode);
    },
    //生成唯一标识
    guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
    //拖动印章
    dragStartHandler(e) {
      //获取位置
      let self = this
      var offset = e.currentTarget.clientHeight - e.target.clientHeight;
      var seal = document.getElementsByClassName('contract-my-back')
      this.contract.height = seal[0].scrollHeight
      //console.log(this.contract.height)
      var data = {};
      offset = offset / 2;
      var left = e.offsetX
      var top = e.offsetY + offset
      // 传输数据
      data = Object.assign(data, {
        html: e.currentTarget.outerHTML,
        offsetX: left,
        offsetY: top
      })
      var vesealid = e.currentTarget.getAttribute('alt')
      this.esealCur = vesealid
      var guid = this.guid()
      this.guidCur = guid
      //传输数据 ，生成字符串传输
      // 获取拖动元素的id
      this.ele = JSON.stringify(data);
    },
    dropHandler(e) {
      // console.log(1)
      var self = this
      //记录鼠标当前位置
      var x = e.clientX;
      var y = e.clientY;
      var seal = document.getElementsByClassName('contract-my-back')
      // console.log(seal[0].offsetLeft)
      var clientX = x - seal[0].offsetLeft
      var clientY = y + seal[0].scrollTop - 70
      var dragNode = {};
      e.preventDefault();
      //获取数据
      // 获取拖动元素的id
      var data = this.ele
      //解析字符串
      data = JSON.parse(data);
      var guid = self.guidCur
      var leftnumber = clientX - data.offsetX
      var left = Math.abs(leftnumber)
      //  console.log(left,'1')
      var top = clientY - data.offsetY
      dragNode = Object.assign({}, {
        guid,
        html: data.html,
        left: left,
        top: top,
      });
      var vesealid = this.esealCur
      var dataAttr = {
        vesealid,
        left,
        top
      }

      this.formData.set(guid, dataAttr)
      this.dragNodes.push(dragNode);
    },
    //获取鼠标点击相对于this.dragNodes中的某个对象，记录鼠标点击的位置
    mouseDownHandler(evt) {
      var movingNode = evt.target.parentNode;
      var movingNodeparent = movingNode.parentNode
      var guid = movingNodeparent.getAttribute('guid');
      this.dragNodes.map((node, index) => {
        if (node.guid === guid) {
          this.movingNodeGuid = guid
          this.imgCanBeDrag = true
          this._movingNodeOffset = { //鼠标点击图片的位置
            offsetX: evt.offsetX,
            offsetY: evt.offsetY
          }
        }
      })
    },
    mouseMovingHandler(evt) {
      if (!this.imgCanBeDrag) return;
      var x = evt.clientX;
      var y = evt.clientY;
      var seal = document.getElementsByClassName('contract-my-back')
      // var signSeal = document.getElementsByClassName('contract-my-words')
      var clientX = x - seal[0].offsetLeft
      var clientY = y + seal[0].scrollTop - 70
      const self = this;
      this.dragNodes = this.dragNodes.map((node, index) => {
        if (node.guid === self.movingNodeGuid) {
          var {
            offsetX,
            offsetY
          } = this._movingNodeOffset;
          // console.log(1)
          var left = clientX - offsetX
          var top = clientY - offsetY
          var vesealid = self.formData.get(node.guid)["vesealid"]
          var dataAttr = {
            vesealid,
            left,
            top
          }
          this.formData.set(node.guid, dataAttr)
          // console.log(left)
          return Object.assign(node, {
            left: left,
            top: top
          });
        }
        return node;
      })
    },
    mouseUpHandler(evt) {
      this.imgCanBeDrag = false;
      //  console.log(this.formData)
    },
    removeImg(evt) {
      const target = evt.target;
      const currentTarget = evt.currentTarget;
      const guid = currentTarget.getAttribute('guid');
      if (target.className === 'removeIt') {
        let len = this.dragNodes.length;
        for (let i = 0; i < len; i++) {
          const node = this.dragNodes[i];
          if (node.guid === guid) {
            this.dragNodes.splice(i, 1);
            this.formData.delete(node.guid)
            // console.log(this.formData)
            break
          }
        }
      }
    },
    // 保存
    Save() {
      var self = this
      self.loading.contract = true
      let len = self.dragNodes.length;
      if (len > 0) {
        self.loading.contract = true
        // console.log(len)
        var vesealids = ""
        var left = ""
        var top = ""
        for (var [key, value] of self.formData) {
          vesealids += value["vesealid"] + ","
          left += value["left"] + ","
          top += value["top"] + ","
        }
        var params = {
          vutx: self.erecord.vutx,
          verecordid: self.erecord.verecordid,
          vesealids: vesealids,
          left: left,
          top: top,
          remark: 'beizhu'
        }
        self.$api.Base({
          url: self.$url.Erecord.Sign,
          params: params,
          headers: {
            'WCOSIGNTOKEN': utils.Auth()
          },
          suc: function (result) {
            if (result.code === 0) {
              self.$message(result.msg)
              self.$router.replace({
                name: 'ContractManagement',
              })
              self.loading.contract = false
            } else {
              // console.log(result.code)
              self.$alert('签章失败！' + result.msg, '提示', {
                type: 'warning',
                callback: () => {}
              })
            }
          },
          err: function () {
            self.$alert(' 签章失败，请检查网络!', '提示', {
              type: 'error',
              callback: () => {
                self.$router.replace({
                  name: 'Error'
                })
              }
            })
            self.loading.contract = false
          }
        })
      } else {
        self.$alert('  请至少添加一个印章！', '提示', {
          type: 'error',
          callback: () => {}
        })
        self.loading.contract = false
      }

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
            self.$message(result.msg)
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
    }
  }
}
