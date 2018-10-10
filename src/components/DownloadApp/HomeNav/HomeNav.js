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
      activeIndex2: '4-1',
      isFixed: false,
      isNavigation: true,
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
    // this.SelectMe()
  },

  methods: {

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
      let self = this;
      if (keyPath.length > 1) {
        self.activeIndex2 = keyPath[1]
      } else {
        self.activeIndex2 = keyPath[0]
      }
    }
  }
}
