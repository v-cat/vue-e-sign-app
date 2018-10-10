import utils from '../../utilPackage/utils.js'
import sha1 from 'js-sha1'
import foot from '../Foot/Foot.vue'
import homenav from '../HomeNav1/HomeNav.vue'
export default {
  name: 'Enter',
  // inject: ['reload'],
  data() {
    return {
      // ruleForm: {
      //   name: '',

      // },
      // rules: {
      //   name: [{
      //       required: true,
      //       message: '请输入活动名称',
      //       trigger: 'blur'
      //     },
      //     {
      //       min: 3,
      //       max: 5,
      //       message: '长度在 3 到 5 个字符',
      //       trigger: 'blur'
      //     }
      //   ],
      // },
      loginForm: {
        name: '',
        pass: '',
        code: ''
      },
      upload: {
        code: 0,
        msg: ''
      },
      showLogin: true,
      showRegister: false,
      username: '',
      password: '',
      checked: true,
      loginBtnTitle: '登 录',
      loginName: ['color-danger', ''],
      loginPass: ['color-danger', ''],
      loginCode: ['color-danger', ''],
      imgsrc: '',
    }
  },
  components: {
    foot,
    homenav
  },
  watch: {
    "$route": 'Enter'

  },
  created() {
    let self = this
    self.getCookie()
    self.LoginDialogOpen()
    self.ChangeCode()

  },
  methods: {
    LoginDialogOpen() {
      var self = this
      var urlRoot = self.$param.ApiRoot
      // self.reload()
      setTimeout(function () {
        // 验证码
        // var self = this
        // self.imgsrc = ' + urlRoot + self.$url.User.StrCode + '
        // console.log(self.imgsrc)
        var imgstr = '<img id="vimg" src="' + urlRoot + self.$url.User.StrCode + '">'
        document.getElementById('codeDiv').innerHTML = imgstr
        // console.log(imgstr)
      }, 300)
    },
    GoToIndexPage() {
      this.$router.replace({
        name: 'index'
      })
    },
    Enter() {
      var self = this
      var enter = true
      var name = self.loginForm.name;
      var pass = self.loginForm.pass;
      if (self.checked == true) {
        // alert(1111)
        self.setCookie(name, pass, 7);
        // console.log(self.checked);
      } else {
        //清空Cookie
        self.clearCookie()
        // console.log("清空Cookie");
        // alert(2222)
      }
      if (name.trim() === '') {
        self.loginPass = ['color-mInfo', '']
        self.loginCode = ['color-warning', '']
        self.loginName = ['color-warning', '请输入用户名']
        enter = false
        return
      } else if (name.trim() !== '') {
        self.loginPass = ['color-mInfo', '']
        self.loginName = ['color-warning', '']
        self.loginCode = ['color-warning', '']
        enter = true
      }
      if (pass.trim() === '') {
        self.loginName = ['color-mInfo', '']
        self.loginCode = ['color-warning', '']
        self.loginPass = ['color-warning', '请输入密码']
        enter = false
        return
      } else if (pass.trim() !== '') {
        self.loginName = ['color-mInfo', '']
        self.loginPass = ['color-warning', '']
        self.loginCode = ['color-warning', '']
        enter = true

      }
      if (self.loginForm.code.trim() === '') {
        self.loginName = ['color-mInfo', '']
        self.loginPass = ['color-warning', '']
        self.loginCode = ['color-warning', '请输入验证码']
        enter = false
        return
        // self.loginAlert = ['color-warning', '请输入验证码']
        // } else if (!codeDiv.validate(self.loginForm.code + '') && self.loginForm.code !== '1111') {
        // } else if (!codeDiv.validate(self.loginForm.code + '')) {
        //   self.loginAlert = ['color-warning', '验证码输入错误']
      } else if (self.loginForm.code.trim() !== '') {
        self.loginName = ['color-mInfo', '']
        self.loginPass = ['color-warning', '']
        self.loginCode = ['color-warning', '']
        enter = true
      }



      //

      if (enter = true) {
        self.loginName = ['color-mInfo', '']
        self.loginPass = ['color-mInfo', '']
        var password = sha1(self.loginForm.pass)
        this.onLogin = true
        this.loginBtnTitle = '正在登录'
        // 登录请求
        self.$api.Base({
          url: self.$url.User.Login,
          params: {
            vusercode: self.loginForm.name,
            vpassword: password,
            verifyCode: self.loginForm.code,
          },
          suc: function (result) {
            if (result.code === 0) {
              self.loginBtnTitle = '登录成功'
              window.sessionStorage.setItem('SESSION', result['refreshToken'])
              window.sessionStorage.setItem('ORISESSION', result.refreshToken)
              //console.log(window.sessionStorage.getItem('SESSION'))
              window.localStorage.setItem('updateSession', result.refreshToken)
              self.$router.replace({
                name: 'PersonalCenter'
              })
            } else {
              self.$alert(result.msg, '提示', {
                type: 'warning',
                callback: () => {
                  self.ChangeCode()
                }

              })
              // self.$message(result.msg)
              self.loginAlert = ['color-danger', result.msg]
              self.onLogin = false
              self.loginBtnTitle = '登录'
            }
          },
          err: function () {
            self.loginAlert = ['color-danger', '网络有点问题']
            self.onLogin = false
            self.loginBtnTitle = '登录'
            // codeDiv.refresh()

            self.ChangeCode()
          }
        })
      }
    },
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
      // alert(window.document.cookie)
    },
    //读取cookie
    getCookie() {
      // alert('22') 
      let self = this
      if (document.cookie.length > 0) {
        var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('='); //再次切割
          //判断查找相对应的值
          if (arr2[0] == 'userName') {
            self.loginForm.name = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == 'userPwd') {
            self.loginForm.pass = arr2[1];
          }
        }
        //alert(self.ruleForm.password)
      }
    },
    //清除cookie
    clearCookie: function () {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    },
    ChangeCode() {
      var self = this
      var urlRoot = this.$param.ApiRoot
      var imgNode = document.getElementById('vimg')
      //console.log(imgNode)
      imgNode.src = urlRoot + self.$url.User.StrCode + '?t=' + Math.random() // 防止浏览器缓存的问题
    },
  }
}
