var canvas = document.querySelector("#cover");
var cover = $("#cover-container");
var context = canvas.getContext("2d");
var scroll = false;

canvas.height = cover.height();
canvas.width = $(window).width();

$(window).scroll(function(){

  if(!scroll){
    $(window).scrollTop(0);
    return;
  }

  var percent = ($(window).scrollTop()-100)/1000;
  if(percent < 0){
    percent = 0;
  }else if(percent > 1){
    percent = 1;
  }

  var p = 50*percent;
  var p1 = 60*percent;
  var p2 = 70*percent;
  var p3 = 80*percent;

  var s1 = (30 - p) + "%";
  var s2 = (70 + p) + "%";
  var s3 = (70 + p1) + "%";
  var s4 = (70 + p2) + "%";
  var s5 = (70 + p3) + "%";

  $("#name").css({left: s1});
  $("#about-me").css({left: s2});
  $("#experience").css({left: s3});
  $("#projects").css({left: s4});
  $("#resume").css({left: s5});

});

$(function(){
  draw();
  $(window).scrollTop(0);
  startAnimation();
});

function startAnimation(){
  $( "#name" ).animate({
    opacity: 1,
    left: "30%",
  }, 1000, function() {
    showMenu("about-me");
  });
}

function showMenu(name){
  if(name == "end"){
    scroll = true;
    return;
  }
  $( "#"+name ).animate({
    opacity: 1,
    left: "70%",
  }, 400, function() {
    if(name == "projects"){
      showMenu("resume");
    }else if(name == "experience"){
      showMenu("projects");
    }else if(name == "about-me"){
      showMenu("experience");
    }else{
      showMenu("end");
    }

  });


}

function draw(){

    var initialW = $(window).width()/32;
    var rowNum = 4;

    context.beginPath();
    context.rect(0, 0, $(window).width(), $(window).height());
    context.fillStyle = "#FFFFFF";
    context.fill();


    var height = tHeight(initialW);
    var totalH = $(window).height();

    for(var j = 0; j <= rowNum; j++){

      for(var i = 0; i <= canvas.width + initialW; i += initialW){


        context.moveTo(i, totalH);
        context.lineTo(i + initialW/2, totalH + height);
        context.lineTo(i + initialW, totalH);


        // the fill color
        context.fillStyle = "#FFFFFF";
        context.fill();

      }
        totalH += height;
        initialW = initialW*2;
        height = tHeight(initialW);
    }
    context.closePath();
    context.clip();

}

function tHeight(width){
  return (width/2)*(Math.sqrt(3));
}
