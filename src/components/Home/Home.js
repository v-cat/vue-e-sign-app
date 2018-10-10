//  import utils from '../../../static/utilPackage/utils.js'
//  import sha1 from 'js-sha1'
// import homenav from '../HomeNav/HomeNav.vue'
export default {
  name: 'Home',
  data() {
    return {
      sessionFlag: false,
      isFixed: false,
      clientHeight: '',
      activeIndex: '1',
      activeIndex2: '1',

      imgList: [{
          id: 0,
          idView: require('../../assets/images/首页_01.jpg'),
          html: ' <div> <a class= "homePageWords1"> 便捷</a> <a class="homePageWords2">签章</a></div><div><a class="homePageWords3">电子合同服务</a> </div> <div> <a class="homePageWords5">高效便捷，专业可靠，合法有效</a> </div><div class="homePageBtn"><router-link to="/Enter" class="login-log">免费试用</router-link></div>'
        },
        {
          id: 1,
          name: '详情',
          idView: require('../../assets/images/首页003.jpg'),
          html: '  <a class="homePageWords4">专业的电子签约及印章管理平台</a>  '
        },

      ]
    }
  },
  created() {
    var session = window.sessionStorage.getItem('SESSION')
    if (session === undefined || session === null || session === '' || session === ' ' || session === 'null') {
      this.sessionFlag = false;
      // console.log(session)
    } else {
      this.sessionFlag = true;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)

  },
  // components: {
  //   homenav,
  // },
  methods: {
    //页面跳转
    //页面跳转
    ChooseMe(item) {
      let self = this
      var set = document.getElementsByClassName('names')[item - 1].innerHTML
      // console.log(set)
      self.$router.push({

        path: "/Business",
        query: {
          link: item,
          set: set
        }
      })

      // console.log(self.$route.query)
    },
    SelectMe(item) {
      let self = this
      self.$router.push({
        // name: 'contractManagement',
        path: "/Product",
        query: {
          link: item,
        }
      })
      // console.log(self.$route.query)
    },
    handleScroll() {
      var self = this
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

      var scrollTop = scrollTop + 55
      // console.log(scrollTop)
      var offsetTop = document.querySelector('#searchBar').offsetTop
      //console.log(offsetTop) //0
      self.clientHeight = `${document.documentElement.clientHeight}`
      // console.log(self.clientHeight)
      if (scrollTop > offsetTop) {
        self.isFixed = true
      }
      if (scrollTop < self.clientHeight) {
        self.isFixed = false
      }
    },


  }
}
