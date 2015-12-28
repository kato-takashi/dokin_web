$(function(){
  // //SVG設定
  // var $svg_elems = $('#svg, #arrow');　//タイトルSVG、矢印SVG
  // $svg_elems.lazylinepainter( 
  // {
  //   "svgData": pathObj,
  //   "strokeWidth": 2,　//線の太さ
  //   "strokeColor": "#fff"　//線の色
  // }).lazylinepainter('paint');

  // //顔文字SVG
  // $('#face').lazylinepainter( 
  // {
  //   "svgData": pathObj,
  //   "strokeWidth": 3,　//線の太さ
  //   "strokeColor": "#3EC7C2"　//線の色
  // }).lazylinepainter('paint');
//顔文字SVG
  drawSvg(pathObj2);
});

//senngawo 
function drawSvg(pathObj){
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