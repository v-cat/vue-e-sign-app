/* eslint-disable no-undef */
// 引用axios
import router from '../router'
var axios = require('axios')
var root = require('./param')['default']['ApiRoot']
// 接口处理
function apiAxios(para) {
  axios({
    method: 'POST',
    url: para['url'],
    data: para['params'] === undefined ? {} : para['params'],
    params: null,
    baseURL: root,
    withCredentials: true,
    headers: para['headers'] === undefined ? {} : para['headers'],
    timeout: 300000000,
    transformRequest: para.transformRequest
  }).then(function (res) {
    if (para['suc'] !== undefined) {
      if (res.data.code === -100) {
        // alert('验证过期，请重新登录')
        window.sessionStorage.clear()
        router.replace({
          name: 'login'
        })
        window.location.reload()
      } else {
        para.suc(res.data)
      }
    }
  }).catch(function (err) {
    // if (err.response) {
    // }
    if (para['err'] !== undefined) {
      para.err(err)
    }
  })
}

// 返回在vue模板中的调用接口
export default {
  // 基础
  Base: function (para) {
    // para.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;'
    para.transformRequest = [function (data) {
      var formData = new FormData()
      for (var key in data) {
        formData.append(key, data[key])
      }
      return formData
    }]
    // para.transformRequest = [function (data) {
    //   var formStr = ''
    //   for (var key in data) {
    //     formStr += '&' + key + '=' + data[key]
    //   }
    //   if (formStr !== '') {
    //     formStr = formStr.substring(1)
    //   }
    //   return formStr
    // }]
    return apiAxios(para)
  },
  //
  Json: function (para) {
    para.headers['Content-Type'] = 'application/json'
    // para.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;'
    para.transformRequest = [function (data) {
      var formData = new Map()
      for (var key in data) {
        formData.set(key, data[key])
      }

      // console.log('11')

      let obj = Object.create(null);
      for (let [k, v] of formData) {
        obj[k] = v;
      }
      // console.log('222')

      //console.log(formData.get("xsourceimgstr"))
      //console.log(JSON.stringify(obj))
      return JSON.stringify(obj)
    }]
    // para.transformRequest = [function (data) {
    //   var formStr = ''
    //   for (var key in data) {
    //     formStr += '&' + key + '=' + data[key]
    //   }
    //   if (formStr !== '') {
    //     formStr = formStr.substring(1)
    //   }
    //   return formStr
    // }]
    return apiAxios(para)
  },
  // 文件上传
  File: function (para) {
    para.headers['Content-Type'] = 'x-www-form-urlencoded'
    para.transformRequest = [function (data) {
      var formData = new FormData()
      for (var key in data) {
        formData.append(key, data[key])
      }
      return formData
    }]
    return apiAxios(para)
  },
  // 表单
  Form: function (para) {
    para.headers['Content-Type'] = 'x-www-form-urlencoded'
    para.transformRequest = [function (data) {
      var formData = new FormData()
      for (var key in data) {
        formData.append(key, data[key])
      }
      return formData
    }]
    return apiAxios(para)
  }
}
