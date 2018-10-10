// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 兼容IEcn
import 'event-source-polyfill'
import 'promise-polyfill'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import routers from './router/index'
// import router from 'vue-router'
import '././assets/icon/iconfont.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入element ui样式
import '../static/theme/index.css'
// 引用API文件
import api from '../src/utilPackage/api.js'
// 配置参数
import param from '../src/utilPackage/param.js'
// 导入接口URL参数
import apiUrl from '../src/utilPackage/apiUrl.js'
import axios from 'axios'
import './assets/icon/loading/iconfont.css';
// Vue.use(router)
//Vue.use($);
Vue.use(ElementUI);
Vue.use(require('vue-moment'));
Vue.prototype.$param = param
Vue.prototype.$url = apiUrl
Vue.prototype.$api = api
// 字段值获取
Vue.prototype.$valkey = function (object, key) {
  try {
    if (key === undefined || key === null || object === undefined || object === null) {
      return '...'
    } else {
      var keys = key.split('.')
      var val = object
      for (var i in keys) {
        var item = keys[i]
        if (val[item] !== undefined || val[item] !== null) {
          val = val[item]
        } else {
          return '...'
        }
      }
      return val
    }
  } catch (e) {
    return '...'
  }
}
Vue.prototype.quit = function () {
  window.sessionStorage.setItem('SESSION', '')
  window.sessionStorage.setItem('ORISESSION', '')
  window.localStorage.setItem('updateSession', ' ')
  this.$router.replace({
    name: 'Home'
  })
}
axios.interceptors.response.use(
  response => {
    var session = window.sessionStorage.getItem('SESSION')
    if (session === undefined || session === null || session === '' || session === ' ' || session === 'null') {
      // router.replace({
      //   name: 'enter'
      // })
      // window.location.reload()
    } else {
      if (response.data.refreshToken) {
        window.sessionStorage.setItem('SESSION', response.data.refreshToken)
        window.sessionStorage.setItem('ORISESSION', response.data.refreshToken)
        window.localStorage.setItem('updateSession', response.data.refreshToken)
      }
    }
    return response;
  }
);


new Vue({
  el: '#app',
  router: routers,
  components: {
    App
  },
  template: '<App/>'
})
