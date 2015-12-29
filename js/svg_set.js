$(function(){
  //効果音
  var se = $('#sound');
  // 一定期間繰り返し
  setInterval(drawSvg,3000);

  $("#btn_sound").css("cursor","pointer");
  $("#btn_sound").click(function(){
    if(soundFlag == true){
      soundFlag = false;
      $("#btn_sound").text("SOUND OFF");
    }else{
      $("#btn_sound").text("SOUND ON");
      soundFlag = true;
    }
  });
});

var soundFlag = true;

//senngawo 
function drawSvg(){
  //効果音
  var se = $('#sound');
  se[0].currentTime = 0;
  //false //sound stop
  if(soundFlag == true){
      se[0].play(); 
  }
  
  var rand = Math.floor( Math.random() * pathArray.length);
  $(draw_svg_array[rand]).show();
  $(draw_svg_array[rand]).fadeIn("500");
  $(draw_svg_array[rand]).lazylinepainter( 
  {
    "svgData": pathArray[rand],
    'duration':300, // path duration
    "strokeWidth": 1,　//線の太さ
    "strokeColor": "#FFF",　//線の色
    'onStrokeComplete':  function(){
      //遅延処理
       setTimeout(function() {
              // 線画消して元のロゴフェードインする
              drawComp(draw_svg_array[rand]);
        }, 1000);
    }
  }).lazylinepainter('paint');
}

//線が終了後の処理
function drawComp(target){
  $(target).fadeOut("2000");
}