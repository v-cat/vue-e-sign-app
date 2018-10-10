import pane from './ProductNavDetial/ProductNavDetial.vue'
import tabs from './ProductNav/ProductNav.vue'
import introduce from './Introduce/Introduce.vue'
import eleContract from './EleContract/EleContract.vue'
import eleSign from './EleSign/EleSign.vue'
import eleSeal from './EleSeal/EleSeal.vue'
import seal from './Seal/Seal.vue'
import foot from '../Foot/Foot.vue'
import homenav from '../HomeNav/HomeNav.vue'
export default {
  // name: 'hello',
  data() {
    return {
      activeKey: ' ',


    }
  },
  created() {
    let self = this
    // console.log(this.$route.query.link)
    var link = this.$route.query.link
    // console.log(link)
    self.activeKey = link;
    // if (link == '') {
    //   self.activeKey = 1;
    // } else {

    // }
  },
  components: {
    // HelloWorld
    pane,
    tabs,
    introduce,
    eleContract,
    eleSign,
    eleSeal,
    seal,
    foot,
    homenav

  }
}
