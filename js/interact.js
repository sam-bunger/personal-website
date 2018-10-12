
//Hover functions for menu items

$("#projects").hover(hoverA, unhoverA);
$("#experience").hover(hoverA, unhoverA);
$("#about-me").hover(hoverA, unhoverA);
$("#resume").hover(hoverA, unhoverA);

function hoverA(){
  $(this).animate({
    marginLeft: "+=10px",
  }, 200, function() {
  });
}

function unhoverA(){
  $(this).animate({
    marginLeft: "-=10px",
  }, 200, function() {

  });
}

//Click functions for menu items
$("#projects").click(function(){
  $('html,body').animate({
       scrollTop: $("#project-sec").offset().top},
  'slow');
});
$("#experience").click(function(){
  $('html,body').animate({
       scrollTop: $("#experience-sec").offset().top},
  'slow');
});
$("#about-me").click(function(){
  $('html,body').animate({
       scrollTop: $("#about-me-sec").offset().top - $(window).height()/2 + $("#about-me-sec").height()/2 },
  'slow');
});
$("#resume").click(function(){
  window.open("downloads/resume.pdf", '_blank')
});


//Hover for social media icons
$("#git").hover(hoverB, unhoverB);
$("#email").hover(hoverB, unhoverB);
$("#linked").hover(hoverB, unhoverB);

function hoverB(){
  $(this).animate({
    opacity: 0,
  }, 100, function() {
    $(this).attr("src","assets/" + $(this).attr('id') + "2.png");
    $(this).animate({
      opacity: 1,
    }, 100, function() {
    });
  });
}

function unhoverB(){
  $(this).animate({
    opacity: 0,
  }, 100, function() {
    var str = $(this).attr('id');
    $(this).src="assets/" + $(this).attr("src","assets/" + str.substr(0, str.length) + ".png");
    $(this).animate({
      opacity: 1,
    }, 100, function() {
    });
  });
}


//Clicked functions for buttons
$("#git").click(function(){
   window.open("https://github.com/sam-bunger", '_blank');
});
$("#email").click(function(){
  window.location.href = "mailto:sam.bunger@gmail.com";
});
$("#linked").click(function(){
  window.open("https://www.linkedin.com/in/sam-bunger/", '_blank');
});












//image slideshow
