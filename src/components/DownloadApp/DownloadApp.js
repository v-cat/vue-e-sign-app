 import foot from '../Foot/Foot.vue'
 import homenav from './HomeNav/HomeNav.vue'
 export default {
   // name: 'hello',
   data() {
     return {
       // activeKey: '1',
       activeName: '1',
       tabPosition: 'left',
       activeIndex2: '4-1 ',
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
     //  console.log(link)
     self.activeName = link;
     // if (link == 1) {
     self.business.name = set

     // 
     var session = window.sessionStorage.getItem('SESSION')
     if (session === undefined || session === null || session === '' || session === ' ' || session === 'null') {
       this.sessionFlag = false;
       console.log(session)
     } else {
       this.sessionFlag = true;
     }
     // this.SelectMe()
   },


   methods: {
     handleClick(tab, event) {
       // console.log(tab);
       let self = this
       self.business.name = tab.label
     }

   },
   components: {

     foot,
     homenav

   },

 }
