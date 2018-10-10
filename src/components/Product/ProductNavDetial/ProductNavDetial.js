 export default {
   name: 'pane',
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
   methods: {
     updateNav() {
       this.$parent.updateNav();
     }
   },
   watch: {
     label() {
       this.updateNav();
     }

   },
   mounted() {
     this.updateNav();
   },

 }
