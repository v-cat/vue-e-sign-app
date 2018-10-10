 import utils from '../../../../utilPackage/utils.js'
 import sha1 from 'js-sha1'
 export default {
   name: 'overall',
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
       buy: 0,
       use: 0,
       percentage: 0,
       loading: false
     }
   },
   created() {
     let self = this
     self.getSelfProduct()
   },
   methods: {
     getSelfProduct() {
       let self = this
       self.loading = true
       var params = {}
       self.$api.Base({
         url: self.$url.Order.getSelfProduct,
         params: params,
         headers: {
           'WCOSIGNTOKEN': utils.Auth()
         },
         suc: function (result) {
           if (result.code === 0) {
             //  element.render('50');
             //console.log(result)
             var buys = result.rows.lavailableTimes
             var uses = result.rows.ltotalTimes
             self.buy = buys
             self.use = uses
             var persent = Math.ceil((buys / (buys + uses)) * 100)
             if (buys === 0) {
               self.percentage = 0
             } else {
               self.percentage = persent
             }
             self.loading = false
           } else {
             self.$alert('获取失败qww！', '提示', {
               type: 'warning',
               callback: () => {}
             })
             self.loading = false
           }
         },
         err: function () {
           self.$alert('获取ww失败，请检查网络!', '提示', {
             type: 'error',
             callback: () => {
               //  self.$router.replace({
               //    name: 'Error'
               //  })
             }
           })
           self.loading = false
         }
       })
     }
   }
 }
