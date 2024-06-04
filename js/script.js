
// slider js
$('#galleryslider').owlCarousel({
    loop:true,
    // margin:10,
    center: true,
    autoplay:true,
    loop:true,
    margin:40,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('#slider').owlCarousel({
    loop:true,
    // margin:10,
    center: true,
    autoplay:true,
    loop:true,
    margin:40,
    responsiveClass:true,
    items:1
    
})
// header js
$(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
        $('.sticky').addClass('fixed');
    } else {
        $('.sticky').removeClass('fixed');
    }
});

// loader js
$(document).ready(function () {
    
    setTimeout(function(){ // allowing 3 secs to fade out loader
    $('#preloader-back').fadeOut('slow');
    },2000);
    
});

// scroll to top js
var btn = $('.to_top');
btn.hide();
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.fadeIn();
  } else {
    btn.fadeOut();
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});