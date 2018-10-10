export default {
  name: 'seal',
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
      show: true,
      activeKey: '4',
    }
  },


}
