
<template>
  <div class="container" v-if="select">
    <div class="greet">
      <div>
        <a type="button" class="login-log" @mousedown="clear">重写</a>
        <!--  @touchstart="clear" -->
        <a type="button" class="login-log" @mousedown="savePNG">保存</a>
        <!-- @touchstart="savePNG" -->
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
  <div v-else>
    <div class="message">
      <div>
        <svg class="writing-Icon" aria-hidden="true" color='black'>
          <use class="white" xlink:href="#icon-qianshu1"></use>
        </svg>
      </div>
      <div class="writing-words">
        签名成功!
      </div>
      <div class="writing-tips">
        您的签名已经提交，请等待页面刷新!
      </div>
    </div>
  </div>
</template>
<style>
@import './SignHandWriting.css';
</style>
<script>
import Draw from './SignHandWriting.js'
import utils from '../../utilPackage/utils.js'
export default {
  name: 'canvas',
  inject: ['reload'],
  data() {
    return {
      select: true,
      degree: 0,
      signImage: '',
      canvasImg: null,
      showBox: false,
      screenWidth: '',
      screenHeight: '',
      preDrawAry: [],
      t_id: ''
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
  created() {
    let self = this
    var t_id = this.$route.query.t_id
    self.t_id = t_id
    // self.getUpload()
    // self.getHorizontalStyle()
    // alert('请横屏签字')
  },
  watch() {
    this.getHorizontalStyle()
  },
  computed: {
    getHorizontalStyle() {
      // alert('qwdaedee')
      let self = this
      const d = document
      const w =
        window.innerWidth || d.documentElement.clientWidth || d.body.clientWidth
      const h =
        window.innerHeight ||
        d.documentElement.clientHeight ||
        d.body.clientHeight
      const canvas = document.getElementsByClassName('canvas')
      let length = (h - w) / 2
      let width = w
      let height = h
      // alert(window.orientation)
      // 判断手机横竖屏状态：
      function hengshuping() {
        if (window.orientation == 180 || window.orientation == 0) {
          // alert('shuedee')

          window.location.reload()
          // alert('请横屏签字')
          // this.reload()
          // width = w
          // height = h
          // const canvas = document.getElementsByClassName('canvas')
          // canvas[0].width = 2 * height
          // canvas[0].height = width
        }
        if (window.orientation == 90 || window.orientation == -90) {
          // alert('heng')
          window.location.reload()
          // this.reload()
          // width = h
          // height = w / 2
        }
      }
      window.addEventListener(
        'onorientationchange' in window ? 'orientationchange' : 'resize',
        hengshuping,
        false
      )
    }
  },

  methods: {
    getUpload() {
      var self = this
      setTimeout(function() {
        alert('ddddd')
      }, 300)
    },
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
      var params = {
        xsourceimgstr: self.signImage
      }
      self.$api.Json({
        url: self.$url.SignHandWriting.Upload,
        params: params,
        headers: {
          t_id: self.t_id
        },
        suc: function(result) {
          if (result.code === 0) {
            self.$message('签名上传成功')
            self.select = false
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
  }
}
</script>


