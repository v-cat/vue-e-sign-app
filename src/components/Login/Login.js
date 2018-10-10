import utils from '../../utilPackage/utils.js'
import sha1 from 'js-sha1'
import foot from '../Foot/Foot.vue'
import homenav from '../HomeNav1/HomeNav.vue'
export default {
  data() {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: '',
      checked: true,
      loginForm: {
        name: '',
        pass: '',
        confirmPassword: ''
      },
      loginBtnTitle: '注 册',
      loginAlertName: ['color-danger', ''],
      loginAlertPass: ['color-danger', ''],
      loginAlertConfirmPassword: ['color-danger', ''],
      checked: false,
      // activeIndex: '1',
      // activeIndex2: '1'
    }
  },
  components: {

    foot,
    homenav

  },
  watch: {
    "$route": 'Login'
  },
  methods: {
    Login() {
      var self = this
      var login = true
      // if (self.loginForm.name.trim() === '' || self.loginForm.pass.trim() === '' || self.loginForm.confirmPassword.trim() === '') {
      //   self.loginAlertName = ['color-warning', '请输入用户名']
      //   console.log(self.loginAlertName)
      //   login = false
      //   return
      // }
      if (self.loginForm.name.trim() === '') {
        self.loginAlertConfirmPassword = ['color-mInfo', '']
        self.loginAlertPass = ['color-mInfo', '']
        self.loginAlertName = ['color-warning', '请输入用户名']
        login = false
        return;
      } else if (self.loginForm.name.trim() !== '') {
        self.loginAlertConfirmPassword = ['color-mInfo', '']
        self.loginAlertPass = ['color-mInfo', '']
        self.loginAlertName = ['color-mInfo', '']
        login = true
      }
      if (self.loginForm.pass.trim() === '') {
        self.loginAlertName = ['color-mInfo', '']
        self.loginAlertConfirmPassword = ['color-mInfo', '']
        self.loginAlertPass = ['color-warning', '请输入密码']
        login = false
        return
      } else if (self.loginForm.pass.trim() !== '') {
        self.loginAlertName = ['color-mInfo', '']
        self.loginAlertConfirmPassword = ['color-mInfo', '']
        self.loginAlertPass = ['color-mInfo', '']
        login = true
      }
      if (self.loginForm.confirmPassword.trim() === '') {
        self.loginAlertName = ['color-mInfo', '']
        self.loginAlertPass = ['color-mInfo', '']
        self.loginAlertConfirmPassword = ['color-warning', '请确认密码']
        login = false
        return
      } else if (self.loginForm.pass.trim() !== self.loginForm.confirmPassword.trim()) {
        self.loginAlertName = ['color-mInfo', '']
        self.loginAlertPass = ['color-mInfo', '']
        self.loginAlertConfirmPassword = ['color-warning', '两次输入密码不一致!']
        login = false
        return
      } else if (self.loginForm.confirmPassword.trim() !== '') {
        self.loginAlertName = ['color-mInfo', '']
        self.loginAlertPass = ['color-mInfo', '']
        self.loginAlertConfirmPassword = ['color-mInfo', '']
        login = true
      }
      if (login = true) {

        self.loginAlertName = ['color-mInfo', '']
        self.loginAlertPass = ['color-mInfo', '']
        self.loginAlertConfirmPassword = ['color-mInfo', '']
        var pass = sha1(self.loginForm.pass)
        this.loginBtnTitle = '正在注册'
        // 注册请求
        self.$api.Json({
          url: self.$url.User.register,
          params: {
            vusercode: self.loginForm.name,
            vusername: self.loginForm.name,
            vpassword: pass,
          },
          headers: {},

          suc: function (result) {
            if (result.code === 0) {
              self.loginBtnTitle = '注册成功'

              window.sessionStorage.setItem('SESSION', result['refreshToken'])
              window.localStorage.setItem('refreshToken', JSON.stringify(result.refreshToken))
              self.$alert('注册成功', '提示', {
                type: 'success',
                callback: () => {

                  self.$router.replace({
                    name: 'Enter'
                  })
                }
              })

            } else {
              self.$alert(result.msg, '提示', {
                type: 'warning',
                callback: () => {}
              })

              self.loginBtnTitle = '注 册'
            }
          },
          err: function () {
            self.$alert('网络有点问题', '提示', {
              type: 'warning',
              callback: () => {
                self.$router.replace({
                  name: 'Error'
                })
              }
            })
            // self.loginAlert = ['color-danger', '网络有点问题']

            self.loginBtnTitle = '注 册'
            // codeDiv.refresh()
            // self.ChangeCode()
          }
        })
      }
    }
  }
}
