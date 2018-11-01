
/*INITIAL VALUES*/
$(window).scrollTop(0);

function onReady(callback) {

  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);

}

onReady(function() {
  $("#name").css({marginLeft: "-300px"});
  $("#email").css({marginLeft: "-100px"});
  $("#linked").css({marginLeft: "0px"});
  $("#git").css({marginLeft: "0px"});
  $("#about-me").css({marginLeft: "300px"});
  $("#experience").css({marginLeft: "300px"});
  $("#projects").css({marginLeft: "300px"});
  $("#resume").css({marginLeft: "300px"});

  $("body").show();
  $("#loader").hide();
  $("#particles-js").show();
  adj();

  startAnimation();
  $("body").css({width: "1vw", height:"1vh", overflow:"visible"});
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

$( window ).resize(function() {
  adj();
});

function adj(){

  //---------SHERLOCK Adjustments------------
  //Get image heights
  var width = $(window).width()*0.65;
  $("#s-1").width(width);
  var height = $("#s-1").height();
  $("#s-2").height(height);

  //Update the margins on images
  var p = getNum($("#sherlock-img").css("padding"));
  var m = getNum($("#s-1").css("margin")) + getNum($("#s-2").css("margin"));
  var w = -1*(($("#sherlock-img").width()+ 90)/2);
  $("#sherlock-img").css({marginLeft: w});

  //Height of experience secton
  $("#sherlock-spacer").css({height: $("#sherlock-img").height()+40});



  //----------------TIC TAC TOE----------------
  //Get image heights
  var width = $(window).width()*0.33;
  $("#t-1").width(width);
  $("#t-2").width(width);

  //Update the margins on images
  var p = getNum($("#tic-img").css("padding"));
  var m = getNum($("#t-1").css("margin")) + getNum($("#t-2").css("margin"));
  var w = -1*(($("#tic-img").width()+ 90)/2);
  $("#tic-img").css({marginLeft: w});

  $("#tic-spacer").css({height: $("#tic-img").height()+40});


  //----------SCREEN CONDITIONAL-------------

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
