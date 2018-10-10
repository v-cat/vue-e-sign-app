 export default {
   name: 'introduce',
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
       activeKey: '1',
     }
   },


 }
