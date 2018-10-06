
$(window).scroll(function(){

  var winH = $(window).height();

  //Background parallax
  var scrollTop = $(window).scrollTop();
  var changeP = 0;
  if(scrollTop > 500){
    changeP = -1*((scrollTop-500)/5);
  }
  $("#particles-js").css({marginTop: changeP});

  //Image parallax
  var scrollTop     = $(window).scrollTop(),
      elementOffset = $('#sherlock-img').offset().top,
      distance      = (elementOffset - scrollTop);

  var change = 0;
  var sherH = $('#sherlock-img').height();
  var vHeight = 8;

  if(distance < sherH + winH){
    change = ((distance - (winH/2) + (sherH/2))/vHeight);
  }

  $("#sherlock-img").css({marginTop: change});

});
