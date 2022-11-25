//マウス、タップの座標
var position=[];
position.x=0; position.y=0;
position.px=0; position.py=0;
//横比率,縦比率
rate=[]; rate.x=0; rate.y=0;
var can = null;
var ctx = null;
var isMouseDown = false;

function draw_init(){
  can = document.getElementById("can");
  can.addEventListener("touchstart",onDown,false);
  can.addEventListener("touchmove",onMove,false);
  can.addEventListener("touchend",onUp,false);
  can.addEventListener("mousedown",onMouseDown,false);
  can.addEventListener("mousemove",onMouseMove,false);
  can.addEventListener("mouseup",onMouseUp,false);
  window.addEventListener("mousemove",stopShake,false);
  ctx=can.getContext("2d");
  ctx.strokeStyle="#000000";
  ctx.lineWidth=15;
  ctx.lineJoin="round";
  ctx.lineCap="round";
  clearCan();

  //スタイルシートの登録（MSのIE11、iOS等でドラッグ時に画面が揺れないように）
  let style = document.createElement("style");
  document.head.appendChild(style);
  style.sheet.insertRule('canvas#'+'can'+'{-ms-touch-action:none;touch-action:none;}',0);
  let s = window.getComputedStyle(can);
  //canvas.widthとcanvas.style.widthの比率を取得する
  rate.x = parseInt(can.width)/parseInt(s.width);
  //canvas.heightとcanvas.style.heightの比率を取得する
  rate.y = parseInt(can.height)/parseInt(s.height);
}


//TouchStart時
function onDown(event) {
  isMouseDown = true;
  position.px = event.touches[0].pageX-event.target.getBoundingClientRect().left-getScrollPosition().x;
  position.py = event.touches[0].pageY-event.target.getBoundingClientRect().top -getScrollPosition().y;
  position.x = position.px;
  position.y = position.py;
  drawLine();
  event.preventDefault();
  event.stopPropagation();
}
  //TouchMove時
function onMove(event) {
  if(isMouseDown){
    position.x = event.touches[0].pageX-event.target.getBoundingClientRect().left-getScrollPosition().x;
    position.y = event.touches[0].pageY-event.target.getBoundingClientRect().top -getScrollPosition().y;
    drawLine();
    position.px = position.x;
    position.py = position.y;
    event.stopPropagation();
  };
}
  //TouchEnd時
function onUp(event) {
  isMouseDown = false;
  event.stopPropagation();
}


  //MouseDown時
function onMouseDown(event) {
  position.px = event.clientX-event.target.getBoundingClientRect().left;
  position.py = event.clientY-event.target.getBoundingClientRect().top ;
  position.x = position.px;
  position.y = position.py;
  drawLine();
  isMouseDown = true;
  event.stopPropagation();
}
//MouseMove時
function onMouseMove(event) {
  if(isMouseDown){
    position.x = event.clientX-event.target.getBoundingClientRect().left;
    position.y = event.clientY-event.target.getBoundingClientRect().top ;
    drawLine();
    position.px = position.x;
    position.py = position.y;
    event.stopPropagation();
  }
}
//MouseUp時
function onMouseUp(event) {
  isMouseDown=false;
  event.stopPropagation();
}
function stopShake(event) {
  isMouseDown=false;
  event.stopPropagation();
}


//スクロール位置を取得する
function getScrollPosition() {
  return {
    "x":document.documentElement.scrollLeft || document.body.scrollLeft,
    "y":document.documentElement.scrollTop  || document.body.scrollTop
  }
}


function drawLine() {
  ctx.beginPath();
  ctx.moveTo(position.px*rate.x,position.py*rate.y);
  ctx.lineTo(position.x*rate.x,position.y*rate.y);
  ctx.stroke();
}
function clearCan() {
  ctx.fillStyle = "rgb(255,255,255)";
  ctx.fillRect(
    0,0,
    can.getBoundingClientRect().width*rate.x,
    can.getBoundingClientRect().height*rate.y
  );
}


function sendImage() {
  var img = document.getElementById("can").toDataURL('image/png');
  img = img.replace('image/png', 'image/octet-stream');
  $.ajax({
      type: "POST",
      url: "http://localhost:5000",
      data: {
          "img": img
      }
  })
  .done( (data) => {
      $('#answer').html('予測結果:<span class="answer">'+data['ans']+'</span>')
  });
}

