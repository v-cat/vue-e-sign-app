import utils from '../../utilPackage/utils.js'
import sha1 from 'js-sha1'
import persenalnav from '../PersenCenterNav/PersenCenterNav.vue'
import personalinfor from './personalinfor/personalinfor.vue'
import signature from './signature/signature.vue'
import company from './company/company.vue'
import foot from '../Foot/Foot.vue'
import account from './account/account.vue'
export default {
  inject: ['reload'],
  data() {
    return {
      // activeName: '1',
      isActived: true,
      isActived1: false,
      // isActived2: true
    };
  },
  components: {
    persenalnav,
    personalinfor,
    signature,
    company,
    foot,
    account
  },
  created() {
    let self = this
    var details = self.$route.query.details
    if (details == null) {} else {
      self.isActived = false
      self.isActived1 = true
    }
  },
  methods: {
    Choose() {
      let self = this
      self.isActived = false
      self.isActived1 = false
      $(".acc-signature").removeClass("select-signature");

    },
    Chooseperson() {
      let self = this
      self.isActived1 = false
      self.isActived2 = false
    }
  },

}
