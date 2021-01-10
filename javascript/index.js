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


  // Stats carousel (uses the Owl Carousel library)
  $('.owl-stats').owlCarousel({
    animateOut: 'fadeOutLeft',
    dots : false ,
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 6000, 
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      992 : {
        items : 1,
      },
      1000: {
        items: 2,
      }
    }
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
  });

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(400).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  /*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () { 
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-lg').addClass('navbar-reduce');
			$('.navbar-expand-lg').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-lg').addClass('navbar-trans');
			$('.navbar-expand-lg').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })



  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });
  
  

})(jQuery);
new WOW().init();
