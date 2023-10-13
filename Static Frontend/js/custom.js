$(document).ready(function(e) {
    $('.navbar-toggler').on('click', function(e) {
        $('body').toggleClass('nav-open');
        e.stopPropagation();
    });
    $('#nav_closer').on('click', function() {
        $('body').removeClass('nav-open');
    });
    $('#scrollDown').click(function(){
        $("html, body").animate({ scrollTop: $(window).height()}, 600);
        return false;
     });
});
// below function is to remove class from body clicking anywhere (it is optional)
// $(document).click(function(e) {
//     $('body').removeClass('nav-open');
// });

$('.product-slideshow').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.product-nav'
});
$('.product-nav').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-slideshow',
  dots: false,
  centerMode: false,
  focusOnSelect: false,
  arrows: false,
  focusOnSelect: true
});


