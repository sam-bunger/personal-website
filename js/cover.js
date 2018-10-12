
/*INITIAL VALUES*/
$("#name").css({marginLeft: "-300px"});
$("#email").css({marginLeft: "-100px"});
$("#linked").css({marginLeft: "0px"});
$("#git").css({marginLeft: "0px"});
$("#about-me").css({marginLeft: "300px"});
$("#experience").css({marginLeft: "300px"});
$("#projects").css({marginLeft: "300px"});
$("#resume").css({marginLeft: "300px"});

var scroll = false;
var experienceH = $("#experience-sec").height()+60;
var aboutH = $("#about-me-sec").height()+60;

$(function(){
  adj();
  $(window).scrollTop(0);
  startAnimation();
});


$(window).scroll(function(){

  if(!scroll){
    $(window).scrollTop(0);
    return;
  }

  var st = $(window).scrollTop();

  parallax(st);
  parallaxIn(st, "sherlock-img", 10, 0);
  if($(window).width() < 800){
    parallaxIn(st, "profile", 10, 0);
  }else{
    parallaxIn(st, "profile", 10, -$("#profile").height()/4);
  }


  heroSlide(st);

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

function heroSlide(st){

  if(st > 1150){
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
  //if(st > 800){
    changeP = -1*((st-800)/8);
    $("#particles-js").css({marginTop: changeP});
  //}

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

    $("#"+name).css({marginTop: change});

  }
}


$( window ).resize(function() {
  adj();
});

function adj(){

  var width = $(window).width()*0.55;
  $("#s-1").width(width);
  var height = $("#s-1").height();
  $("#s-2").height(height);

  var p = getNum($(".images").css("padding"));
  var m = getNum($("#s-1").css("margin")) + getNum($("#s-2").css("margin"));
  var w = -1*(($(".images").width()+ p + m)/2);

  $(".images").css({marginLeft: w});


  //Sections sizes
  console.log("orig: " + experienceH + "\nadd: "+ $(".images").height());

  experienceH += $(".images").height();
  $("#experience-sec").css({height: experienceH});
  experienceH -= $(".images").height();

  if($(window).width() > 800){

    $("#profile").width($(window).width()*0.25);

    w = (($(window).width() - $(".special-me").width())/2) - $("#profile").width()/2 - 20;
    $("#profile").css({marginLeft: w});

  }else{
    $("#profile").width($(window).width()*0.60);

    w = $(window).width()/2 - ($("#profile").width()/2)-20;
    $("#profile").css({marginLeft: w});

    aboutH += $("#profile").height() - 10;
    $("#about-me-sec").css({height: aboutH});
    aboutH -= $("#profile").height() - 10;



  }

}

function getNum(s){
  return parseInt(s);
}
