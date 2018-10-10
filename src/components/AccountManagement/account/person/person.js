 export default {
   name: 'person',
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
     }
   },
   created() {

   },
   methods: {
     SignMe(item) {
       let self = this
       self.$router.push({
         path: "/Buy",
         query: {
           order: item,
         }
       })
     },
   }
 }
