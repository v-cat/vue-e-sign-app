 function Draw(canvas, degree, config = {}) {
   if (!(this instanceof Draw)) {
     return new Draw(canvas, config);
   }
   if (!canvas) {
     return;
   }
   const width =
     window.innerWidth || d.documentElement.clientWidth || d.body.clientWidth
   const height =
     window.innerHeight ||
     d.documentElement.clientHeight ||
     d.body.clientHeight
   //  console.log(width, height)
   this.canvas = canvas;
   this.context = canvas.getContext('2d');
   this.width = width;
   this.height = height;
   const context = this.context;
   const container = $('.container').parent()
   container.width(width)
   container.height(height)
   //  console.log($('.container').parent().height())
   //  alert($('.container').parent().width())
   //  var combody = container.parent()
   //  console.log(width,height)
   //  combody.width(width)
   //  combody.height(height)
   //  alert(combody.width())
   //  var container$('div').height();
   var lastLineWidth = -1; //笔刷粗细
   // 根据设备像素比优化canvas绘图
   const devicePixelRatio = window.devicePixelRatio;
   if (devicePixelRatio) {
     canvas.style.width = `${width}px`;
     canvas.style.height = `${height}px`;
     canvas.height = height * devicePixelRatio; // 画布宽高放大
     canvas.width = width * devicePixelRatio;
     context.scale(devicePixelRatio, devicePixelRatio); // 画布内容放大相同的倍数
   } else {
     canvas.width = width;
     canvas.height = height;
   }

   context.lineWidth = this.lineWidth; // 直线宽度

   context.strokeStyle = '#656565'; // 路径的颜色
   context.lineCap = 'round'; // 直线首尾端圆滑
   context.lineJoin = 'round'; // 当两条线条交汇时，创建圆形边角
   context.shadowBlur = 1.2; // 边缘模糊，防止直线边缘出现锯齿
   context.shadowColor = '#656565'; // 边缘颜色
   Object.assign(context, config);
   const {
     left,
     top
   } = canvas.getBoundingClientRect();
   const point = {};
   const isMobile = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent);
   // 移动端性能太弱, 去掉模糊以提高手写渲染速度
   if (!isMobile) {
     context.shadowBlur = 1;
     context.shadowColor = '#656565';
     //  context.lineWidth = this.lineWidth
     // context.lineWidth = calcLineWidth(s,t);
     //  console.log(context.lineWidth)
   }
   let pressed = false; // 标示是否发生鼠标按下或者手指按下事件
   const paint = (signal) => {
     switch (signal) {
       case 1: // 开始路径
         //  this.canvas = canvas;
         context.beginPath();

         //  var canvasImg = canvas.toDataURL('image/png', 0.5);
         //  this.canvasImg = canvasImg
         //  var img = document.getElementsByClassName('img1')
         //  img.url = canvasImg
         //  var imgData = img.getImageData(0, 0, point.x, point.x);
         //  console.log(imgData)
         var curLoc = windowToCanvas(point.x, point.y); //当前坐标位置
         this.curLoc = curLoc

         var curTimestamp = new Date().getTime();
         this.curTimestamp = curTimestamp
         context.moveTo(point.x, point.y);
         break;
       case 2: // 前面之所以没有break语句，是为了点击时就能描画出一个点
         context.lineTo(point.x, point.y);

         context.stroke();
         var lastLoc = windowToCanvas(point.x, point.y); //上一次坐标位置

         this.lastLoc = lastLoc
         //  console.log(this.lastLoc, 'sssds')
         var lastTimestamp = new Date().getTime();
         this.lastTimestamp = lastTimestamp
         break;

       default:
     }
   };
   const create = signal => (e) => {
     e.preventDefault();
     if (signal === 1) {
       pressed = true;

     }
     if (signal === 1 || pressed) {
       e = isMobile ? e.touches[0] : e;
       point.x = e.clientX - left + 0.5; // 不加0.5，整数坐标处绘制直线，直线宽度将会多1px(不理解的不妨谷歌下)
       point.y = e.clientY - top + 0.5;
       paint(signal);

       var t = this.lastTimestamp - this.curTimestamp;
       this.t = t
       var s = calcDistance(this.curLoc, this.lastLoc);
       this.s = s
       //  console.log(this.s)

       context.lineWidth = calcLineWidth(this.s, this.t);
       this.lineWidth = context.lineWidth
       //  context.beginPath();
       //  context.moveTo(this.lastLoc.x, this.lastLoc.y);
       //  context.lineTo(this.curLoc.x, this.curLoc.y);
     }
   };
   const start = create(1);
   const move = create(2);
   //  const save = create(3);
   const requestAnimationFrame = window.requestAnimationFrame;
   const optimizedMove = requestAnimationFrame ? (e) => {
     requestAnimationFrame(() => {
       move(e);
     });
   } : move;
   // 速度
   function calcLineWidth(s, t) {
     var maxLineWidth = 10;
     var minLineWidth = 3;
     var maxStrokeV = 0.9;
     var minStrokeV = 0.15;
     var lastLineWidth = -1;
     var v = s / t;
     //  console.log(v)
     var resultLineWidth;
     var storkm = (v - minStrokeV) / (maxStrokeV - minStrokeV) * (maxLineWidth - minLineWidth);

     //v<0.15
     if (v <= minStrokeV / 2) {
       resultLineWidth = maxLineWidth
       //  console.log('1')
     } else if (v >= maxStrokeV / 2) {
       resultLineWidth = maxLineWidth - storkm;
       //  console.log('4')
     } else if (maxStrokeV / 2 >= v >= minStrokeV / 2) {
       resultLineWidth = minStrokeV
       //  console.log('2')
     }
     //  else if (0.5 >= v >= 0.2) {
     //    resultLineWidth = 0.5
     //    console.log('3')
     //  }
     if (lastLineWidth == 0)
       return resultLineWidth;
     return resultLineWidth * 1 / 5 + lastLineWidth * 2 / 5;
     //console.log(resultLineWidth);
   };
   //求两点之间距离
   function calcDistance(loc1, loc2) {
     if (loc2 != null && loc1 != null) {
       //  console.log(loc2.x, loc2.y, '11112233')
       //  var loc1 = loc1.x
       //  var loc3 = loc1.y
       //  var loc2 = loc2.x
       //  var loc4 = loc2.y
       //  return Math.sqrt((loc1 - loc2) * (loc1 - loc2) + (loc3 - loc4) * (loc3 - loc4));
       return Math.sqrt((loc1.x - loc2.x) * (loc1.x - loc2.x) + (loc1.y - loc2.y) * (loc1.y - loc2.y));
     }
   };


   //获得canvas坐标
   function windowToCanvas(x, y) {
     var bbox = canvas.getBoundingClientRect();
     return {
       x: Math.round(x - bbox.left),
       y: Math.round(y - bbox.top)
     }
   };

   if (isMobile) {
     canvas.addEventListener('touchstart', start);
     canvas.addEventListener('touchmove', optimizedMove);
   } else {
     canvas.addEventListener('mousedown', start);
     canvas.addEventListener('mousemove', optimizedMove);
     ['mouseup', 'mouseleave'].forEach((event) => {
       canvas.addEventListener(event, () => {
         pressed = false;
       });
     });
   }
   // 重置画布坐标系
   if (typeof degree === 'number') {
     this.degree = degree;
     context.rotate((degree * Math.PI) / 180);
     switch (degree) {
       case -90:
         context.translate(-height, 0);
         break;
       case 90:
         context.translate(0, -width);
         break;
       case -180:
       case 180:
         context.translate(-width, -height);
         break;
       default:
     }
   }
 };
 Draw.prototype = {
   datasave() {
     //  this.canvas = document.getElementsByClassName("canvas");
     //  this.context = this.canvas.getContext('2d');
     const context = canvas.getContext('2d');
    //  console.log('ww')
     //  var imgData = this.context.createImageData(width, height);
     //  console.log(imgData)
     //  this.preDrawAry = []
     //  this.preDrawAry.push(imgData)
     //  console.log(this.preDrawAry.length)

   },
   scale(width, height, canvas = this.canvas) {
     const w = canvas.width;
     const h = canvas.height;
    //  console.log(w, h, 'wh')
     width = width || w;
     height = height || h;
     if (width !== w || height !== h) {
       const tmpCanvas = document.createElement('canvas');
       const tmpContext = tmpCanvas.getContext('2d');
       tmpCanvas.width = width;
       tmpCanvas.height = height;
       tmpContext.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);

       canvas = tmpCanvas;
      //  console.log(canvas)
       //  this.preDrawAry.push(preData)
     }
     return canvas;
   },
   rotate(degree, image = this.canvas) {
     degree = ~~degree;
     if (degree !== 0) {
       const maxDegree = 180;
       const minDegree = -90;
       if (degree > maxDegree) {
         degree = maxDegree;
       } else if (degree < minDegree) {
         degree = minDegree;
       }

       const canvas = document.createElement('canvas');
       const context = canvas.getContext('2d');
       const height = image.height;
       const width = image.width;
       const degreePI = (degree * Math.PI) / 180;

       switch (degree) {
         // 逆时针旋转90°
         case -90:
           canvas.width = width;
           canvas.height = height;
           context.rotate(degreePI);
           context.drawImage(image, -width, 0);
           break;
           // 顺时针旋转90°
         case 90:
           canvas.width = width;
           canvas.height = height;
           context.rotate(degreePI);
           context.drawImage(image, 0, -height);
           break;
           // 顺时针旋转180°
         case 180:
           canvas.width = width;
           canvas.height = height;
           context.rotate(degreePI);
           context.drawImage(image, -width, -height);
           break;
         default:
       }
       image = canvas;
     }
     return image;
   },
   getPNGImage(canvas = this.canvas) {
     return canvas.toDataURL('image/png', 0.5);
   },

   getJPGImage(canvas = this.canvas) {
     return canvas.toDataURL('image/jpeg', 0.5);
   },
   downloadPNGImage(image) {
     const url = image.replace('image/png', 'image/octet-stream;Content-Disposition:attachment;filename=test.png');
     window.location.href = url;
   },

   dataURLtoBlob(dataURL) {
     const arr = dataURL.split(',');
     const mime = arr[0].match(/:(.*?);/)[1];
     const bStr = atob(arr[1]);
     let n = bStr.length;
     const u8arr = new Uint8Array(n);
     while (n--) {
       u8arr[n] = bStr.charCodeAt(n);
     }
     return new Blob([u8arr], {
       type: mime
     });
   },
   clear() {
     let width;
     let height;
     switch (this.degree) {
       case -90:
       case 90:
         width = this.height;
         height = this.width;
         break;
       default:
         width = this.width;
         height = this.height;
     }
     this.context.clearRect(0, 0, width, height);
   },
   upload(blob, url, success, failure) {
     const formData = new FormData();
     const xhr = new XMLHttpRequest();
     xhr.withCredentials = true;
     formData.append('image', blob, 'sign');
     xhr.open('POST', url, true);
     xhr.onload = () => {
       if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
         success(xhr.responseText);
       } else {
         failure();
       }
     };
     xhr.onerror = (e) => {
       if (typeof failure === 'function') {
         failure(e);
       } else {
         // console.log(`upload img error: ${e}`);
       }
     };
     xhr.send(formData);
   },
 };
 export default Draw;
