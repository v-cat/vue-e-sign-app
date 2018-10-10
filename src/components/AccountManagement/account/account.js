import utils from '../../../utilPackage/utils.js'
// import price from './price/price.vue'
import overall from './overall/overall.vue'
import order from './order/order.vue'
import person from './person/person.vue'
export default {
  name: 'account',
  inject: ['reload'],
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
      activeName2: '3',
      dialogImageUrl: '',
      dialogVisible: false,
      imageUrl: '',
      file: {
        file: undefined,
        name: '...',
        base64: ''
      },
      list: [],
      //   setDefault: '设为默认'
      delect: true,
      loading: false,
    }
  },
  components: {
    overall,
    order,
    person
  },
  created() {
    let self = this
    var details = self.$route.query.details
    // console.log(details)
    if (details == null) {} else {
      self.activeName2 = details;
    }
  },
}
