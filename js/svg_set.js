$(function(){
  // 一定期間繰り返し
  setInterval(function(){ drawSvg(pathObj2); },3000);

});

//senngawo 
function drawSvg(pathObj){
  $('#draw_svg').show();
  $('#draw_svg').lazylinepainter( 
  {
    "svgData": pathObj,
    'duration':300, // path duration
    "strokeWidth": 2,　//線の太さ
    "strokeColor": "#FFF",　//線の色
    'onStrokeComplete':  function(){
      //遅延処理
       setTimeout(function() {
              // 線画消して元のロゴフェードインする
              drawComp();
        }, 1000);
    }
  }).lazylinepainter('paint');
}

//線が終了後の処理
function drawComp(){
  $('#draw_svg').fadeOut("2000");
}