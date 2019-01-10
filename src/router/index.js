// import Vue from 'vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home/Home.vue'
// 主页
import Home from '../components/Home/Home.vue'
// 注册
import Login from '../components/Login/Login.vue'
// 登录
import Enter from '../components/Enter/Enter.vue'
// 个人中心
import PersonalCenter from '../components/PersonalCenter/PersonalCenter.vue'
// 文件管理
import ContractManagement from '../components/ContractManagement/ContractManagement.vue'
// 上传文件
import UploadContracts from '../components/UploadContracts/UploadContracts.vue'
// 预览
import Preview from '../components/Preview/Preview.vue'
// 签署
import Sign from '../components/Sign/Sign.vue'
// 上传图片印章
import text from '../components/text/img.vue'
// 企业认证
// import Company from '../components/Company/Company.vue'
// 合同认证
import Contract from '../components/Contract/Contract.vue'
// 手写印章
import SignWebWriting from '../components/SignWebWriting/SignWebWriting.vue'
import SignHandWriting from '../components/SignHandWriting/SignHandWriting.vue'

// 产品介绍
import Product from '../components/Product/Product.vue'
// 手写印章
import SignWriting from '../components/SignWriting/SignWriting.vue'
// 服务介绍
import Service from '../components/Service/Service.vue'
// 数据存证
import StorageData from '../components/StorageData/StorageData.vue'
//行业应用
import BusinessUse from '../components/BusinessUse/BusinessUse.vue'
//行业
import Business from '../components/Business/Business.vue'
//未来签约
import Future from '../components/Future/Future.vue'
//App
import DownloadApp from '../components/DownloadApp/DownloadApp.vue'
import PersenCenterNav from '../components/PersenCenterNav/PersenCenterNav.vue'
import News from '../components/News/News.vue'
import HangSign from '../components/HangSign/HangSign.vue'
//Error
import Error from '../components/Error/Error.vue'
//Buy
import Buy from '../components/Buy/Buy.vue'
// 个人信息
import AccountManagement from '../components/AccountManagement/AccountManagement.vue'
import signature from '../components/AccountManagement/signature/signature.vue'
import account from '../components/AccountManagement/account/account.vue'
import company from '../components/AccountManagement/company/company.vue'
import personalinfor from '../components/AccountManagement/personalinfor/personalinfor.vue'
//签名设置
import seal from '../components/AccountManagement/signature/seal/seal.vue'
import signhand from '../components/AccountManagement/signature/signhand/signhand.vue'
import upload from '../components/AccountManagement/signature/upload/upload.vue'
//电信上传印章
import uploading from '../components/AccountManagement/signature/uploading/uploading.vue'
//签名设置
import signOcx from '../components/signOcx/signOcx.vue'
Vue.use(VueRouter)
const routes = [{
    name: 'AccountManagement',
    path: '/AccountManagement',
    component: AccountManagement,
    redirect: 'AccountManagement/personalinfor',
    children: [{
        path: 'signature',
        name: 'signature',
        component: signature,
        // redirect: 'signature/seal',
        children: [{
            path: 'seal',
            name: 'seal',
            component: seal
          }, {
            path: 'signhand',
            name: 'signhand',
            component: signhand
          },
          {
            path: 'upload',
            name: 'upload',
            component: upload
          },
          {
            path: 'uploading',
            name: 'uploading',
            component: uploading
          },
        ]
      },
      {
        path: 'account',
        name: 'account',
        component: account
      },
      {
        path: 'company',
        name: 'company',
        component: company
      },
      {
        path: 'personalinfor',
        name: 'personalinfor',
        component: personalinfor
      }
    ]
  }, {
    path: '/PersenCenterNav',
    name: 'PersenCenterNav',
    component: PersenCenterNav
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/PersonalCenter',
    name: 'PersonalCenter',
    component: PersonalCenter
  },
  {
    path: '/Enter',
    name: 'Enter',
    component: Enter
  },
  {
    path: '/ContractManagement',
    name: 'ContractManagement',
    component: ContractManagement
  },
  {
    path: '/UploadContracts',
    name: 'UploadContracts',
    component: UploadContracts
  },
  {
    path: '/Preview',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/Sign',
    name: 'Sign',
    component: Sign
  },

  {
    path: '/News',
    name: 'News',
    component: News
  },

  {
    path: '/Contract',
    name: 'Contract',
    component: Contract
  },
  {
    path: '/SignWebWriting',
    name: 'SignWebWriting',
    component: SignWebWriting
  },
  {
    path: '/SignHandWriting',
    name: 'SignHandWriting',
    component: SignHandWriting
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product
  },
  {
    path: '/SignWriting',
    name: 'SignWriting',
    component: SignWriting
  },
  {
    path: '/Service',
    name: 'Service',
    component: Service
  },
  {
    path: '/StorageData',
    name: 'StorageData',
    component: StorageData
  }, {
    path: '/BusinessUse',
    name: 'BusinessUse',
    component: BusinessUse
  },
  {
    path: '/Business',
    name: 'Business',
    component: Business
  },
  {
    path: '/Future',
    name: 'Future',
    component: Future
  },
  {
    path: '/DownloadApp',
    name: 'DownloadApp',
    component: DownloadApp
  },
  {
    path: '/text',
    name: 'text',
    component: text
  },
  {
    path: '/HangSign',
    name: 'HangSign',
    component: HangSign
  },
  {
    path: '/Error',
    name: 'Error',
    component: Error
  }, {
    path: '/Buy',
    name: 'Buy',
    component: Buy
  },
  {
    path: '/signOcx',
    name: 'signOcx',
    component: signOcx
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },

];
const routers = new VueRouter({
  routes
});
export default routers;
