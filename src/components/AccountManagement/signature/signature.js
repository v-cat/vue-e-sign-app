 import signhand from './signhand/signhand.vue'
 import seal from './seal/seal.vue'
 import upload from './upload/upload.vue'
 import uploading from './uploading/uploading.vue'
 export default {
   name: 'signature',
   inject: ['reload'],
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

     }
   },
   components: {
     signhand,
     seal,
     upload,
     uploading,
   },
   created() {
     let self = this
     //  self.isActived2 = true

   },
   methods: {

   }
 }
