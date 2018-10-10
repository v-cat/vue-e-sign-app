<template>
  <div class="inner draw">
    <!-- @mousemove="beginPath($event)" -->
    <div class="wrap">
      <canvas id="canvas" style="   border: 1px dashed;" class="fl" @mousedown="canvasDown($event)" @mouseup="canvasUp($event)" @mousemove="canvasMove($event)" @touchstart="canvasDown($event)" @touchend="canvasUp($event)" @touchmove="canvasMove($event)">
      </canvas>
      <div id="control" class="fl">
        <!--画笔颜色-->
        <div id="canvas-color">
          <h5>
            画笔颜色</h5>
          <ul>
            <li v-for="item in colors" :class="{'active':config.lineColor === item}" :style="{ background: item }" @click="setColor(item)"></li>
          </ul>
        </div>
        <!--画笔-->
        <div id="canvas-brush">
          <h5>画笔大小</h5>
          <span v-for="pen in brushs" :class="[pen.className,{'active': config.lineWidth === pen.lineWidth}]">{{pen.name}}</span>
          <!-- @click="setBrush(pen.lineWidth)" -->
        </div>
        <!--操作-->
        <div id="canvas-control">
          <h5>操作</h5>
          <span v-for="control in controls" :title="control.title" :class="control.className" @click="controlCanvas(control.action)">{{control.title}}</span>
        </div>
        <!-- 生成图像-->
        <div id="canvas-drawImage">
          <h5>生成图像</h5>
          <button class="drawImage" @click="getImage()">预览</button>
        </div>
        <!--存放图片-->
        <div id="img-box">
          <!--  v-show="imgUrl.length " -->
          <div class="img-item">
            <!--  v-for="src in Url" -->
            <img :src="Url">
            <span class="fa fa-close" @click="removeImg(src)"></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
/* @import url(./SignWriting.css); */
@media screen and (max-width: 700px) {
  #img-box,
  #canvas-drawImage h5,
  #canvas-brush {
    display: none;
  }
  #canvas-drawImage button {
    width: auto;
    position: absolute;
    flex: 1;
  }
  .wrap #control {
    width: 100%;
    height: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    text-align: center;
  }
}

.fix-body {
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}

.inner.draw {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

#control {
  width: 130px;
  height: 400px;
  position: absolute;
  /* margin-left: 4px; */
}

.draw h5 {
  margin-bottom: 10px;
}

#img-box {
  flex: 1;
  padding-left: 10px;
}

#img-box .img-item {
  position: relative;
  display: inline-block;
}

#img-box .img-item .fa {
  position: absolute;
  cursor: pointer;
  right: 1px;
  top: -1px;
  font-size: 12px;
  font-weight: 1;
  display: none;
  color: #ccc;
}

#img-box .img-item:hover .fa {
  display: block;
}

#img-box .img-item .fa:hover {
  color: #be926f;
}

#img-box img {
  border: 1px #ccc solid;
  width: 90px;
  height: 60px;
  margin: 5px;
}

.wrap {
  width: 100%;
  height: 100%;
  /* border: 1px #585858 solid; */
  overflow: hidden;
}

.fl {
  float: left;
  display: block;
}

#canvas {
  border-right: 1px #585858 solid;
  cursor: crosshair;
}

#control div {
  padding: 5px;
}

#canvas-color ul {
  overflow: hidden;
  margin: 0;
  padding: 0;
}

#canvas-color ul li {
  float: left;
  display: inherit;
  width: 13px;
  height: 13px;
  border: 3px #fff solid;
  margin: 8px;
  cursor: pointer;
}

#canvas-color .active {
  border: 1px solid #be926f;
}

#canvas-brush span {
  display: inline-block;
  width: 20px;
  height: 15px;
  margin-left: 10px;
  cursor: pointer;
}

#canvas-brush .small {
  font-size: 12px;
}

#canvas-brush .middle {
  font-size: 14px;
}

#canvas-brush .big {
  font-size: 16px;
}

#canvas-control span {
  /* display: inline-block; */
  font-size: 14px;
  width: 20px;
  height: 15px;
  margin-left: 10px;
  cursor: pointer;
}

#canvas-control .active,
#canvas-brush .active {
  color: #be926f;
}

.drawImage {
  width: 100px;
  height: 30px;
  font-size: 12px;
  line-height: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      colors: ['#be926f', '#0018ba', '#ffc200', '#f32f15', '#000', '#5ab639'],
      brushs: [
        {
          name: '○',
          className: 'small fa fa-paint-brush',
          lineWidth: 1
        },
        {
          name: '○',
          className: 'middle fa fa-paint-brush',
          lineWidth: 1.1
        },
        {
          name: '○',
          className: 'big fa fa-paint-brush',
          lineWidth: 1.2
        }
      ],
      context: {},
      imgUrl: [],
      Url: [],
      canvasMoveUse: false,
      // 存储当前表面状态数组-上一步
      preDrawAry: [],
      // 存储当前表面状态数组-下一步
      nextDrawAry: [],
      // 中间数组
      middleAry: [],
      // 配置参数
      config: {
        lineWidth: '',
        lineColor: '#000',
        // strokeStyle: '#be926f',
        shadowBlur: 0
        // shadowColor: '#be926f'
      },
      curTimestamp: '',
      lastTimestamp: '',
      signTime: '',
      curLoc: '',
      lastLoc: '',
      signDistance: ''
    }
  },

  mounted() {
    const wrap = document.querySelector('.wrap')
    var X = wrap.clientWidth
    var Y = wrap.clientHeight
    // console.log(X, Y)
    const canvas = document.querySelector('#canvas')
    canvas.height = Y
    canvas.width = X
    this.context = canvas.getContext('2d')
    // this.initDraw()
    this.setCanvasStyle(this.context)
    // document.querySelector('#footer').classList.add('hide-footer')
    // document.querySelector('body').classList.add('fix-body')
  },
  destroyed() {
    // document.querySelector('#footer').classList.remove('hide-footer')
    // document.querySelector('body').classList.remove('fix-body')
  },
  computed: {
    controls() {
      return [
        {
          title: '上一步',
          action: 'prev',
          className: this.preDrawAry.length
            ? 'active fa fa-reply'
            : 'fa fa-reply'
        },
        {
          title: '下一步',
          action: 'next',
          className: this.nextDrawAry.length
            ? 'active fa fa-share'
            : 'fa fa-share'
        },
        {
          title: '清除',
          action: 'clear',
          className:
            this.preDrawAry.length || this.nextDrawAry.length
              ? 'active fa fa-trash'
              : 'fa fa-trash'
        }
      ]
    }
  },
  methods: {
    isPc() {
      const userAgentInfo = navigator.userAgent
      const Agents = [
        'Android',
        'iPhone',
        'SymbianOS',
        'Windows Phone',
        'iPad',
        'iPod'
      ]
      let flag = true
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    },
    removeImg(src) {
      this.imgUrl = this.imgUrl.filter(item => item !== src)
    },
    initDraw() {
      const canvas = document.querySelector('#canvas')
      // console.log(canvas.clientHeight)
      const widthX = canvas.clientWidth
      //console.log(widthX)
      const heightY = canvas.clientHeight
      //console.log(heightY)
      const preData = this.context.getImageData(0, 0, widthX, heightY)
      // console.log(preData)
      // 空绘图表面进栈
      this.middleAry.push(preData)
    },
    canvasMove(e) {
      // this.canvasMoveUse = false
      if (this.canvasMoveUse) {
        const t = e.target
        let canvasX
        let canvasY
        if (this.isPc()) {
          canvasX = e.clientX - t.parentNode.offsetLeft
          canvasY = e.clientY - t.parentNode.offsetTop
        } else {
          canvasX = e.changedTouches[0].clientX - t.parentNode.offsetLeft
          canvasY = e.changedTouches[0].clientY - t.parentNode.offsetTop
        }
        this.context.lineTo(canvasX, canvasY)
        this.context.stroke()
      }
    },
    beginPath(e) {
      const canvas = document.querySelector('#canvas')
      // console.log(canvas)
      if (e.target !== canvas) {
        // console.log('beginPath')
        // this.context.beginPath()
      }
    },
    // mouseup
    canvasUp(e) {
      // console.log('canvasUp')

      const curTimestamp = new Date().getTime()
      this.curTimestamp = curTimestamp
      // console.log('up', curTimestamp)
      const canvas = document.querySelector('#canvas')
      const widthX = canvas.clientWidth
      const heightY = canvas.clientHeight
      const preData = this.context.getImageData(0, 0, widthX, heightY)
      if (!this.nextDrawAry.length) {
        // 当前绘图表面进栈
        this.middleAry.push(preData)
      } else {
        this.middleAry = []
        this.middleAry = this.middleAry.concat(this.preDrawAry)
        this.middleAry.push(preData)
        this.nextDrawAry = []
      }
      this.canvasMoveUse = false
      const canvasX = e.clientX - e.target.parentNode.offsetLeft
      const canvasY = e.clientY - e.target.parentNode.offsetTop
      var curLoc = this.windowToCanvas(canvasX, canvasY) //当前坐标位置
      this.curLoc = curLoc
      var signTime = this.curTimestamp - this.lastTimestamp
      this.signTime = signTime
      // console.log(curLoc)
    },
    // mousedown
    canvasDown(e) {
      this.canvasMoveUse = true
      const lastTimestamp = new Date().getTime()
      this.lastTimestamp = lastTimestamp
      // console.log('dowmn', lastTimestamp)

      // client是基于整个页面的坐标
      // offset是cavas距离顶部以及左边的距离
      const canvasX = e.clientX - e.target.parentNode.offsetLeft
      // console.log('canvasX', canvasX)
      const canvasY = e.clientY - e.target.parentNode.offsetTop
      this.setCanvasStyle()
      // 清除子路径
      // this.context.beginPath()
      this.context.moveTo(canvasX, canvasY)
      //console.log('moveTo', canvasX, canvasY)
      //上一次坐标位置
      var lastLoc = this.windowToCanvas(canvasX, canvasY)
      this.lastLoc = lastLoc
      // console.log(lastLoc)
      // 当前绘图表面状态
      const canvas = document.querySelector('#canvas')
      const widthX = canvas.clientWidth
      // console.log(widthX)
      const heightY = canvas.clientHeight
      const preData = this.context.getImageData(0, 0, widthX, heightY)
      // const preData = this.context.getImageData(0, 0, 1600, 1400)
      // 当前绘图表面进栈
      var signDistance = this.calcDistance(this.curLoc, this.lastLoc)
      this.signDistance = signDistance

      this.config.lineWidth = this.calcLineWidth(
        this.signDistance,
        this.signTime
      )
      // console.log('w1', this.config.lineWidth)
      this.preDrawAry.push(preData)
      // console.log(preData)
    },
    windowToCanvas(x, y) {
      var bbox = canvas.getBoundingClientRect()
      var x = Math.round(x - bbox.width)
      var y = Math.round(y - bbox.height)
      // console.log(x, y)
      return {
        x,
        y
      }
      // return {
      //   x: Math.round(x - bbox.width),
      //   y: Math.round(y - bbox.height)
      // }
    },
    calcDistance(loc1, loc2) {
      // console.log(loc1.x, loc2.x)
      return Math.sqrt(
        (loc1.x - loc2.x) * (loc1.x - loc2.x) +
          (loc1.y - loc2.y) * (loc1.y - loc2.y)
      )
    },

    // 设置颜色
    setColor(color) {
      this.config.lineColor = color
    },
    // 设置笔刷大小
    // setBrush(type) {
    //   this.config.lineWidth = type
    // },
    calcLineWidth(s, t) {
      var maxLineWidth = 15
      var minLineWidth = 3
      var maxStrokeV = 0.9
      var minStrokeV = 0.15
      var lastLineWidth = -1
      var v = s / t
      // console.log('v', v)
      var resultLineWidth
      var storkm =
        (v - minStrokeV) /
        (maxStrokeV - minStrokeV) *
        (maxLineWidth - minLineWidth)
      // console.log(storkm)
      //v<0.15
      if (v <= 0.05) {
        resultLineWidth = 15.5
      } else if (v >= 0.9) {
        resultLineWidth = 0.2
      } else {
        resultLineWidth = 1
      }
      // if (0.5 >= v >= 0.05) {
      //   resultLineWidth = 1
      // } else if (0.9 >= v >= 0.5) {
      //   resultLineWidth = 0.7
      // }
      if (lastLineWidth == 0) return resultLineWidth
      return resultLineWidth * 1 / 5 + lastLineWidth * 2 / 5
      //console.log(resultLineWidth);
    },
    // 操作上一步、下一步、删除
    controlCanvas(action) {
      switch (action) {
        case 'prev':
          if (this.preDrawAry.length) {
            const popData = this.preDrawAry.pop()
            const midData = this.middleAry[this.preDrawAry.length + 1]
            this.nextDrawAry.push(midData)
            this.context.putImageData(popData, 0, 0)
          }
          break
        case 'next':
          if (this.nextDrawAry.length) {
            const popData = this.nextDrawAry.pop()
            const midData = this.middleAry[
              this.middleAry.length - this.nextDrawAry.length - 2
            ]
            // console.log(midData)
            this.preDrawAry.push(midData)
            this.context.putImageData(popData, 0, 0)
          }
          break
        case 'clear':
          this.context.clearRect(
            0,
            0,
            this.context.canvas.width,
            this.context.canvas.height
          )
          this.preDrawAry = []
          this.nextDrawAry = []
          this.middleAry = [this.middleAry[0]]
          break
      }
    },
    // 生成图片
    getImage() {
      const canvas = document.querySelector('#canvas')
      const src = canvas.toDataURL('image/png')
      // console.log(src.length)
      // this.url = ''
      this.imgUrl.push(src)
      // console.log(this.imgUrl.length)
      // if (this.imgUrl.length)
      var img = this.imgUrl[this.imgUrl.length - 1]
      this.Url = img
      // console.log(this.Url.length)
      if (!this.isPc()) {
        // window.open(`data:text/plain,${src}`)
        window.location.href = src
      }
    },
    // 设置绘画配置
    setCanvasStyle() {
      // console.log('w2', this.config.lineWidth)
      this.context.lineWidth = this.config.lineWidth
      this.context.shadowBlur = this.config.shadowBlur
      this.context.shadowColor = this.config.lineColor
      this.context.strokeStyle = this.config.lineColor
      this.context.strokeStyle = this.config.strokeStyle
    }
  }
}
</script>

