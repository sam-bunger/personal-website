
/*INITIAL VALUES*/
$("#name").css({marginLeft: "-300px"});
$("#email").css({marginLeft: "-100px"});
$("#linked").css({marginLeft: "0px"});
$("#git").css({marginLeft: "0px"});
$("#about-me").css({marginLeft: "300px"});
$("#experience").css({marginLeft: "300px"});
$("#projects").css({marginLeft: "300px"});
$("#resume").css({marginLeft: "300px"});


//var canvas = document.querySelector("#cover");
//var cover = $("#cover-container");
//var context = canvas.getContext("2d");
var scroll = false;

//canvas.height = cover.height();
//canvas.width = $(window).width();

$(function(){
  //draw();
  $(window).scrollTop(0);
  startAnimation();
});

$(window).scroll(function(){

  if(!scroll){
    $(window).scrollTop(0);
    return;
  }

  var percent = ($(window).scrollTop()-100)/900;
  $(".left").css({zIndex: 1});
  $(".right").css({zIndex: 1});
  var op = 1-percent;
  if(percent <= 0){
    percent = 0;
  }else if(percent > 1){
    percent = 1;
    $(".left").css({zIndex: -1});
    $(".right").css({zIndex: -1});
  }

  var s1 = (-1*percent*100) + "px";
  var s2 = (-1*percent*500 + 50) + "px";
  var s3 = (1*percent*100 + 50) + "px";
  var s4 = (1*percent*100 + 50) + "px";
  var s5 = (percent*300) + "px";
  var s6 = (percent*400) + "px";
  var s7 = (percent*500) + "px";
  var s8 = (percent*600) + "px";

  $("#name").css({marginLeft: s1, opacity: op});
  $("#email").css({marginLeft: s2, opacity: op});
  $("#linked").css({marginLeft: s3, opacity: op});
  $("#git").css({marginLeft: s4, opacity: op});
  $("#about-me").css({marginLeft: s5, opacity: op});
  $("#experience").css({marginLeft: s6, opacity: op});
  $("#projects").css({marginLeft: s7, opacity: op});
  $("#resume").css({marginLeft: s8, opacity: op});

});

var interval;

function startAnimation(){
  $( "#name" ).animate({
    opacity: 1,
    marginLeft: "0px",
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

    //$("#" + name).animateRotate(360, 600, "linear", function(){});

    $( "#" + name ).animate({
      opacity: 1,
      marginLeft: "50px",
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
    marginLeft: "0px",
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

/*
function draw(){

    var initialW = $(window).width()/32;
    var rowNum = 4;

    /*
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
*/
