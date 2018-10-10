import foot from '../Foot/Foot.vue'
import homenav from '../BusinessUse/HomeNav/HomeNav.vue'
export default {

  data() {
    return {

      tabPosition: 'left'
    }
  },
  components: {

    foot,
    homenav

  },
  methods: {
    //页面跳转
    SelectMe(item) {
      let self = this
      var set = document.getElementsByClassName('e_contract-value-title')[item - 1].innerHTML
      // console.log(set)
      self.$router.push({
        // name: 'contractManagement',
        path: "/Business",
        query: {
          link: item,
          set: set
        }
      })

      // console.log(self.$route.query)
    },
  }
}
