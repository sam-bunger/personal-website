$(function(){
    var canvas = document.querySelector("#cover");
    var cover = $("#cover-container");
    var context = canvas.getContext("2d");

    canvas.height = cover.height();
    canvas.width = $(window).width();

    var initialW = $(window).width()/32;
    var rowNum = 4;


    context.rect(0, 0, $(window).width(), $(window).height());
    context.fillStyle = "#111111";
    context.fill();

    var height = tHeight(initialW);
    var totalH = $(window).height();

    for(var j = 0; j <= rowNum; j++){

      for(var i = 0; i <= canvas.width + initialW; i += initialW){

        context.beginPath();
        context.moveTo(i, totalH);
        context.lineTo(i + initialW/2, totalH + height);
        context.lineTo(i + initialW, totalH);
        context.closePath();

        // the fill color
        context.fillStyle = "#111111";
        context.fill();



      }
        totalH += height;
        initialW = initialW*2;
        height = tHeight(initialW);


    }

});


function tHeight(width){
  return (width/2)*(Math.sqrt(3));
}
