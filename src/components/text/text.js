export default {
  name: 'text',
  data() {
    return {
      isMouseDown: false,
      width: '',
      height: '',
      //  canvasWidth:'',
      //  canvasHeight:'',
      context: {},
      images: [],
      maxLineWidth: 15,
      minLineWidth: 3,
      maxStrokeV: 1,
      minStrokeV: 0.15,
      lastTimestamp: 0, //上一次时间，与笔刷粗细有关
      lastLineWidth: -1, //笔刷粗细
      lastLoc: {
        x: 0,
        y: 0
      }, //鼠标上一次结束时的位置
      isMouseDown: false,
    }
  },
  created() {
    let self = this
    self.draw()
    self.beginStroke()
    self.moveStroke()
  },
  mounted() {
    var canvas = document.getElementById('canvas');
    self.context = canvas.getContext('2d');
    //  self.context.fillStyle = "red";
    //  self.context.fillRect(0, 0, 300, 150);
    var context = self.context
  },
  methods: {
    draw() {
      let self = this
      var canvasWidth = $(window).width();
      //    = document.getElementById('print')   
      //Math.min(2000, $(window).width()); //如果屏幕小于800px，则取值为屏幕大小宽度，便于移动端的展示，-20是为了使得米字格不紧贴于边缘  
      var canvasHeight = $(window).height();
      self.width = canvasWidth
      self.height = canvasHeight
      //  console.log(canvas)
      //  canvas.width = canvasWidth
      //  canvas.height = canvasHeight
      var strokeColor = "black";
      // var isMouseDown = false; //鼠标按下时候的状态  
      var lastLoc = {
        x: 0,
        y: 0
      }; //鼠标上一次结束时的位置  
      // var lastTimestamp = 0; //上一次时间，与笔刷粗细有关
      // var lastLineWidth = -1; //笔刷粗细

      //  self.context = canvas.getContext('2d');

    },
    clearBtn() {
      let self = this
      var context = self.context
      context.clearRect(0, 0, self.width, self.height)
    },
    SaveImg() {
      let self = this
      var img = self.convertCanvasToImage(canvas);
      var saveImg = document.getElementById("sign_show")
      var manyImg = saveImg.appendChild(img);
      self.images.push(manyImg)
      self.preview();
      //  self.rewrite();
      self.clearImg();
    },
    convertCanvasToImage(canvas) {
      var image = new Image();
      //image.width = self.width / 2;
      image.width = 104;
      // image.height = 153;
      image.src = canvas.toDataURL("i/png", 0.05);
      return image;
    },
    //填充生成的图片
    preview() {
      var show = document.getElementById("save-img")[0];
      $(show).remove()
    },
    //  rewrite() {
    //    let self = this
    //    //  linex = new Array();
    //    //  liney = new Array();
    //    //  linen = new Array();
    //    self.context.clearRect(0, 0, self.width, self.height);
    //  },
    //清理已生成照片
    clearImg() {
      var move = document.getElementById("sign_show").getElementsByTagName("img");

      for (var i = 0; i < move.length; i++) {
        if (i >= 1)
          $(move[0]).remove();
      }
    },
    beginStroke(point) {
      let self = this
      self.isMouseDown = true
      //console.log("mouse down!");  
      lastLoc = self.windowToCanvas(point.x, point.y); //上一次坐标位置  
      lastTimestamp = new Date().getTime();
      // console.log(111)

    },
    endStroke() {
      let self = this
      self.isMouseDown = false;
    },
    moveStroke(point) {
      let self = this
      var curLoc = self.windowToCanvas(point.x, point.y);
      var curTimestamp = new Date().getTime();
      var s = self.calcDistance(curLoc, lastLoc);
      var t = curTimestamp - self.lastTimestamp;

      var lineWidth = self.calcLineWidth(t, s);

      //draw  
      context.beginPath();
      context.moveTo(lastLoc.x, lastLoc.y);
      context.lineTo(curLoc.x, curLoc.y);

      context.strokeStyle = strokeColor;
      context.lineWidth = lineWidth;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.stroke();

      lastLoc = curLoc;
      lastTimestamp = curTimestamp;
      lastLineWidth = lineWidth;
    },
    onmousedown(e) {
      e.preventDefault();
      beginStroke({
        x: e.clientX,
        y: e.clientY
      });
    },
    onmouseup(e) {
      e.preventDefault();
      endStroke();
    },
    onmousemove(e) {
      e.preventDefault();
      if (isMouseDown) {
        moveStroke({
          x: e.clientX,
          y: e.clientY
        })
        // console.log(e.clientX);
        // console.log(e.clientY);
      }
    },
    touchstart(e) {
      e.preventDefault();
      touch = e.touches[0];
      beginStroke({
        x: touch.clientX,
        y: touch.clientY
        // x: touch.pageX,
        // y: touch.pageY
      })
    },
    touchmove(e) {
      e.preventDefault();
      if (isMouseDown) {
        touch = e.touches[0];
        moveStroke({
          x: touch.clientX,
          y: touch.clientY
        });
      }
    },
    touchend(e) {
      e.preventDefault();
      endStroke();
    },
    calcLineWidth(t, s) {
      let self = this
      var v = s / t;

      var resultLineWidth;
      var minStrokeV = this.minStrokeV
      if (v <= minStrokeV)
        resultLineWidth = self.maxLineWidth;
      else if (v >= maxStrokeV)
        resultLineWidth = self.minLineWidth;
      else {
        resultLineWidth = self.maxLineWidth - (v - minStrokeV) / (maxStrokeV - minStrokeV) * (self.maxLineWidth -
          self.minLineWidth);
      }
      if (self.lastLineWidth == 0)
        return resultLineWidth;

      return resultLineWidth * 1 / 5 + self.lastLineWidth * 2 / 5;
    },
    calcDistance(loc1, loc2) {

      return Math.sqrt((loc1.x - loc2.x) * (loc1.x - loc2.x) + (loc1.y - loc2.y) * (loc1.y - loc2.y));
    },
    windowToCanvas(x, y) {
      let self = this
      var canvas = document.getElementById("canvas");
      var bbox = canvas.getBoundingClientRect();
      return {
        // x: Math.round(x-100  ),
        // y: Math.round(y-100  )
        x: Math.round(x - bbox.left),
        y: Math.round(y - bbox.top)
      }
    }

  }
}
