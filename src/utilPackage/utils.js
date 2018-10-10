/* eslint-disable no-undef,standard/no-callback-literal */
import router from '../router'
import Vue from 'vue'
var ping = ''
var ocxVue = new Vue()
export default {
  // 认证
  Auth: function () {
    var session = window.sessionStorage.getItem('SESSION')
    var orisession = window.sessionStorage.getItem('ORISESSION')
    if (session === undefined || session === null || session === '' || session === ' ' || session === 'null') {
      router.replace({
        name: 'enter'
      })
      window.location.reload()
    } else if (orisession === undefined || orisession === null || orisession === '' || orisession === 'null') {
      window.sessionStorage.setItem('ORISESSION', session)
      return session
    } else if (session !== orisession) {
      window.sessionStorage.setItem('ORISESSION', session)
      window.location.reload()
    } else {
      return session
    }
  },
  // 公共VUE
  PubVue() {
    return ocxVue
  },
  // 获取用户信息
  GetUserInfo() {
    try {
      var userinfo = window.localStorage.getItem('userinfo')
      if (userinfo === undefined || userinfo === null || userinfo === '') {
        window.localStorage.clear()
        window.sessionStorage.clear()
        router.replace({
          name: 'enter'
        })
        window.location.reload()
      } else {
        userinfo = JSON.parse(userinfo)
        return userinfo
      }
    } catch (e) {
      window.localStorage.clear()
      window.sessionStorage.clear()
      router.replace({
        name: 'login'
      })
      window.location.reload()
    }
  },
  // 树转成列表
  TreeToList(tree, nodeKey) {
    var array = []
    tree.forEach(val => {
      displayAndPushTree(val)
    })

    function displayAndPushTree(node) {
      array.push(node)
      if (node['childList'].length > 0) {
        node['childList'].forEach(val => {
          displayAndPushTree(val)
        })
      }
    }

    return array
  },
  // ping码输入
  GetPing(callback, view) {
    if (ping !== '') {
      callback(ping)
    } else {
      var ocx = document.getElementById('iStylePDF')
      if (ocx) {
        // ocx.zIndex = 999
        ocx.style.height = '100%'
        // alert('pin')
      }
      var sign = prompt('请输入ping码')
      if (sign != null) {
        ping = value
        callback(ping)
      }
      // there are many ways to use the prompt feature
      // var sign = window.prompt ()
      // open the blank prompt window
      // var sign = prompt()
      //  open the blank prompt window
      // var sign = window.prompt('Are you feeling lucky')
      // open the window with Text "Are you feeling lucky"
      // var sign = window.prompt('Are you feeling lucky', 'sure')
      // open the window with Text "Are you feeling lucky" and default value "sure"

      // view.$prompt('请输入ping码', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   inputType: 'password',
      //   inputPattern: /[a-zA-Z0-9]{1,12}/
      // }).then(({value}) => {
      //   ping = value
      //   callback(ping)
      // }).catch(() => {
      //   callback('')
      // }
      // )
    }
  },
  // ping清除
  ClearPing() {
    ping = ''
  },
  // 清除 数组中为空字符串的元素
  Array: {
    ClearVal(list) {
      var tmpList = []
      list.forEach((val) => {
        if (val !== undefined && val !== null && val !== '' && val.trim() !== '') {
          tmpList.push(val)
        }
      })
      return tmpList
    }
  }
}
