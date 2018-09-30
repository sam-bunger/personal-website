
//Hover functions for menu items

$("#projects").hover(hoverA, unhoverA);
$("#experience").hover(hoverA, unhoverA);
$("#about-me").hover(hoverA, unhoverA);
$("#resume").hover(hoverA, unhoverA);

function hoverA(){
  $(this).animate({
    left: "+=0.5%",
    top: "-=0.5%"
  }, 200, function() {
  });
}

function unhoverA(){
  $(this).animate({
    left: "-=0.5%",
    top: "+=0.5%"
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
       scrollTop: $("#about-me-sec").offset().top},
  'slow');
});
$("#resume").click(function(){
  $('html,body').animate({
       scrollTop: $("#project-sec").offset().top},
  'slow');
});
