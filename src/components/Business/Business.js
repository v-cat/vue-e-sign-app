import financial from './financial/financial.vue' //金融行业
import ebusiness from './ebusiness/ebusiness.vue' //电子商务
import traditional from './traditional/traditional.vue' //传统企业
import humanResource from './humanResource/humanResource.vue' //人力资源
import express from './express/express.vue' //物流快递
import travel from './travel/travel.vue' //旅游行业
import insurance from './insurance/insurance.vue' //保险行业
import architecture from './architecture/architecture.vue' //建筑建材
import bank from './bank/bank.vue' //银行及贷款
import medical from './medical/medical.vue' //医疗健康行业
import government from './government/government.vue' //政府及事业单位
import commonality from './commonality/commonality.vue' //公共事业
import foot from '../Foot/Foot.vue'
import homenav from '../BusinessUse/HomeNav/HomeNav.vue'
export default {
  // name: 'hello',
  data() {
    return {
      // activeKey: '1',
      activeName: '1',
      tabPosition: 'left',
      activeIndex2: '2-3 ',
      business: {
        name: '金融行业'
      },
    }
  },
  created() {
    let self = this
    // console.log(this.$route.query.link)
    var link = this.$route.query.link
    var set = this.$route.query.set
    // console.log(link)
    self.activeName = link;
    // if (link == 1) {
    self.business.name = set

    // 

  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab);
      let self = this
      self.business.name = tab.label
    }
  },
  components: {
    financial,
    ebusiness,
    traditional,
    humanResource,
    travel,
    insurance,
    architecture,
    express,
    bank,
    medical,
    government,
    commonality,
    foot,
    homenav

  },

}
