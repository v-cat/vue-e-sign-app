// import storagedetial from './StNavDetial/StNavDetial.vue'
// import storagenav from './StNav/StNav.vue'
import ProduceSave from './ProduceSave/ProduceSave.vue'
import ProduceShow from './ProduceShow/ProduceShow.vue'
import ProduceRights from './ProduceRights/ProduceRights.vue'
import auther from './Auther/Auther.vue'
// import eleSeal from './EleSeal/EleSeal.vue'
import foot from '../Foot/Foot.vue'
import homenav from '../HomeNav/HomeNav.vue'
export default {
  // name: 'hello',
  data() {
    return {
      // activeKey: '1',
      tabPosition: 'left'
    }
  },
  components: {
    // HelloWorld
    // storagedetial,
    // storagenav,
    auther,
    ProduceShow,
    ProduceSave,
    ProduceRights,
    foot,
    homenav

  }
}
