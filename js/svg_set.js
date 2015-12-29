$(function(){
  // 一定期間繰り返し
  // setInterval(function(){ drawSvg(); },3000);
  setInterval(drawSvg,3000);
});

//senngawo 
function drawSvg(){

  var rand = Math.floor( Math.random() * pathArray.length);
  console.log(pathArray[rand]);
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