
var scroll = false;
var val = 60;
if($(window).width() < 800){
  val = 40
}
var aboutH = $("#about-me-sec").height()+val;

$(function(){


});


$(window).scroll(function(){

  if(!scroll){
    $(window).scrollTop(0);
    return;
  }

  var st = $(window).scrollTop();

  parallax(st);
  parallaxIn(st, "sherlock-img", 12, -10);
  parallaxIn(st, "tic-img", 12, 0);
  if($(window).width() < 800){
    parallaxIn(st, "profile", 16, 0);
  }else{
    parallaxIn(st, "profile", 8, -$("#profile").height()/4);
  }

  heroSlide(st);

});

function heroSlide(st){

  if(st > 1500){
    return;
  }

  var percent = (st-100)/900;
  $(".left").css({zIndex: 1});
  $(".right").css({zIndex: 1});
  var op = 1-percent;
  if(percent <= 0){
    percent = 0;
  }else if(percent > 1){
    percent = 1;
    $(".left").css({zIndex: - 1});
    $(".right").css({zIndex: - 1});
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

}

function parallax(st){

  var winH = $(window).height();

  //Background parallax
  var changeP = 0;
  if(st > 800){
    changeP = -1*((st-800)/8);
    document.getElementById("particles-js").style.marginTop = changeP;
  }

}

function parallaxIn(st, name, vHeight, offset){

  var winH = $(window).height();
  var offsetS = $('#'+name).offset().top;
  var distanceS = (offsetS - st);
  if(Math.abs(distanceS) < winH){
    var change = 0;
    var sherH = $('#'+name).height();
    if(distanceS < sherH + winH){
      change = ((distanceS - (winH/2) + (sherH/2))/vHeight) + offset;
    }
    document.getElementById(name).style.marginTop = change;
  }
}
