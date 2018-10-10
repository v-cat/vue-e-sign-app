 export default {
   name: 'eleSign',
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
       activeKey: '3',
     }
   },


 }
