export default {
  name: 'homenav',
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
      //    show: true,

      activeIndex2: '3-1',
      isFixed: false,
      isNavigation: true,
    }
  },
  created() {
    var session = window.sessionStorage.getItem('SESSION')
    if (session === undefined || session === null || session === '' || session === ' ' || session === 'null') {
      this.sessionFlag = false;
      console.log(session)
    } else {
      this.sessionFlag = true;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)

  },
  methods: {
    handleScroll() {
      var self = this
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //console.log(scrollTop)
      // var offsetTop = document.querySelector('#searchBar').offsetTop      
      // console.log(offsetTop)
      // self.clientHeight = `${document.documentElement.clientHeight}`
      //   console.log(self.clientHeight)
      if (scrollTop > 0) {
        self.isFixed = true
        self.isNavigation = false
      }
      if (scrollTop < 10) {
        self.isFixed = false
        self.isNavigation = true
      }
    },
    //页面跳转
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
    handleSelect(key, keyPath) {
      // console.log(keyPath);
      let self = this;
      if (keyPath.length > 1) {
        self.activeIndex2 = keyPath[1]
      } else {
        self.activeIndex2 = keyPath[0]
      }
      //self.activeIndex2 = keyPath[1]
      // console.log(self.activeIndex2)
    }
  }
}
