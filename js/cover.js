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
  var s11 = (23 - p3) + "%";
  var s12 = (29 - p2) + "%";
  var s13 = (35 - p1) + "%";
  var s2 = (70 + p) + "%";
  var s3 = (70 + p1) + "%";
  var s4 = (70 + p2) + "%";
  var s5 = (70 + p3) + "%";

  $("#name").css({left: s1});
  $("#email").css({left: s11});
  $("#linked").css({left: s12});
  $("#git").css({left: s13});
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

var interval;

function startAnimation(){
  $( "#name" ).animate({
    opacity: 1,
    left: "30%",
  }, 800, function() {
    showMenu("about-me");
    interval = setInterval(showSocial, 300);
  });
}

var counter = 0;

function showSocial(){
  if(counter == 3){
    clearInterval(interval);
  }else{
    var name;
    if(counter == 0){
      name = "git";
    }else if(counter == 1){
      name = "linked";
    }else{
      name = "email";
    }

    $("#" + name).animateRotate(360, 750, "linear", function(){});

    $( "#" + name ).animate({
      opacity: 1,
      left: (35-(counter*6)) + "%",
    }, 800, function() {

    });

    counter++;
  }
}

$.fn.animateRotate = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
        args.step = function(now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(this, arguments);
        };

        $({deg: 0}).animate({deg: angle}, args);
    });
};

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
