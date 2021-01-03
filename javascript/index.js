!(function($) {
    "use strict";
    var nav = $('nav');
    var navHeight = nav.outerHeight();

  // Testimonial carousel (uses the Owl Carousel library)
  $('.owl-client').owlCarousel({
    animateOut: 'fadeOut',
    dots : false ,
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 3,
      }
    }
  });


})(jQuery);
new WOW().init();
