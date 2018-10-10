
<template>

  <div class="container">
    <div class="greet">
      <div>
        <a type="button" class="login-log" @mousedown="clear">重写</a>
        <a type="button" class="login-log" @mousedown="savePNG">保存</a>
      </div>
      <div class="img">
        <img :src="signImage">
        <img id="img1" crossOrigin="anonymous">
      </div>
    </div>
    <div id="canvasBox" :style="getHorizontalStyle">
      <canvas class="canvas"></canvas>
    </div>
  </div>
</template>
<style>
@import './SignWebWriting.css';
</style>
<script>
import Draw from './SignWebWriting.js'
import utils from '../../utilPackage/utils.js'
export default {
  name: 'canvas',
  inject: ['reload'],
  data() {
    return {
      degree: 0,
      signImage: '',
      canvasImg: null,
      showBox: false,
      screenWidth: '',
      screenHeight: '',
      preDrawAry: []
    }
  },
  components: {
    Draw
  },
  beforeCreate() {
    document.title = '手写签名'
  },
  mounted() {
    this.canvasBox = document.getElementById('canvasBox')
    this.initCanvas()
  },
  watch() {
    this.getHorizontalStyle()
  },
  computed: {
    getHorizontalStyle() {
      let self = this
      const d = document
      const w =
        window.innerWidth || d.documentElement.clientWidth || d.body.clientWidth
      const h =
        window.innerHeight ||
        d.documentElement.clientHeight ||
        d.body.clientHeight
      // console.log(w, h, 'wh')
      const canvas = document.getElementsByClassName('canvas')
      let length = (h - w) / 2
      let width = w
      // self.screenWidth = width
      let height = h
      self.screenHeight = height
      // 判断手机横竖屏状态：
      // function hengshuping() {
      //   if (window.orientation == 180 || window.orientation == 0) {
      //     window.location.reload()
      //     // this.reload()
      //     width = w
      //     height = h
      //     const canvas = document.getElementsByClassName('canvas')
      //     canvas[0].width = 2 * height
      //     canvas[0].height = width
      //     alert('横edee')
      //   }
      //   if (window.orientation == 90 || window.orientation == -90) {
      //     window.location.reload()
      //     // this.reload()
      //     width = h
      //     height = w / 2
      //     alert('竖')
      //     this.clear()
      //   }
      // }
      // window.addEventListener(
      //   'onorientationchange' in window ? 'orientationchange' : 'resize',
      //   hengshuping,
      //   false
      // )
    }
  },

  methods: {
    initCanvas() {
      const canvas = document.querySelector('canvas')
      this.draw = new Draw(canvas, -this.degree)
    },
    clear() {
      this.draw.clear()
    },
    download() {
      this.draw.downloadPNGImage(this.draw.getPNGImage())
    },
    savePNG() {
      var self = this
      self.signImage = this.draw.getPNGImage()

      this.showBox = true

      // console.log(self.$route.query)
      var params = {
        xsourceimgstr: self.signImage
      }

      self.$api.Json({
        url: self.$url.SignHandWriting.Upload,
        params: params,
        headers: {
          WCOSIGNTOKEN: utils.Auth()
        },
        suc: function(result) {
          if (result.code === 0) {
            self.$alert('手写签名上传成功,' + result.msg, '提示', {
              type: 'success',
              callback: () => {
                self.$router.push({
                  // name: 'contractManagement',
                  path: '/AccountManagement',
                  query: {
                    // details: '1',
                    link: '3'
                  }
                })
              }
            })
          } else {
            self.$alert('手写签名上传失败,' + result.msg, '提示', {
              type: 'warning',
              callback: () => {}
            })
          }
        },
        err: function() {
          self.$alert('手写签名上传错误，请检查网络!', '提示', {
            type: 'error',
            callback: () => {
              self.$router.replace({
                name: 'Error'
              })
            }
          })
        }
      })
    },
    upload() {
      const image = this.draw.getPNGImage()
      const blob = this.draw.dataURLtoBlob(image)

      const url = ''
      const successCallback = response => {}
      const failureCallback = error => {}
      this.draw.upload(blob, url, successCallback, failureCallback)
    },
    datasave() {
      this.draw.datasave()
    }
    // 操作上一步、下一步、删除
    // controlCanvas(action) {
    //   switch (action) {
    //     case 'prev':
    //       console.log(this.preDrawAry.length, 'ww')
    //       if (this.preDrawAry.length) {
    //         const popData = this.preDrawAry.pop()
    //         const midData = this.middleAry[this.preDrawAry.length + 1]
    //         this.nextDrawAry.push(midData)
    //         this.context.putImageData(popData, 0, 0)
    //       }
    //       break
    //     case 'next':
    //       if (this.nextDrawAry.length) {
    //         const popData = this.nextDrawAry.pop()
    //         const midData = this.middleAry[
    //           this.middleAry.length - this.nextDrawAry.length - 2
    //         ]
    //         console.log(midData)
    //         this.preDrawAry.push(midData)
    //         this.context.putImageData(popData, 0, 0)
    //       }
    //       break
    //   }
    // }
  }
}
</script>
 