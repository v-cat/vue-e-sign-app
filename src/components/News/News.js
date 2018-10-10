import foot from '../Foot/Foot.vue'
import persenalnav from '../PersenCenterNav/PersenCenterNav.vue'
import contract from './contract/contract.vue'
import announcement from './announcement/announcement.vue'
import other from './other/other.vue'

export default {
  name: 'News',
  data() {
    return {
      paging: {
        current: 1, // 当前页数 从 1 开始
        limit: 20, // 数量
        total: 0 // 总数
      },

      value: '',
      multipleSelection: [],
      activeName: '1',
    }
  },
  components: {
    foot,
    persenalnav,
    contract,
    announcement,
    other
  },
  methods: {
    //分页改变
    // PagingChange(currentPage) {
    //   let self = this
    //   // self.paging.current = currentPage
    //   self.GetInformation(self.state)
    // },
    // PagingSizeChange(pageSize) {
    //   let self = this
    //   self.paging.limit = pageSize
    //   self.paging.current = 1
    //   self.GetInformation(self.state)
    // },
  },
}
