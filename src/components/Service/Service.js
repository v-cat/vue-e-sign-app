 import company from './company/company.vue'
 import person from './person/person.vue'
 import foot from '../Foot/Foot.vue'
 import homenav from '../HomeNav/HomeNav.vue'
 export default {
   // name: 'hello',
   data() {
     return {
       //   activeKey: '1',
       activeName2: 'first'
     }
   },
   components: {


     foot,
     homenav,
     person,
     company

   }
 }
