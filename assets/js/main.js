(function($) {
  "use strict";

  $(document).ready(function() {
    /**-----------------------------
     *  Smooth scroll to section
     * ---------------------------*/
    $("a[href^='#']").on("click", function(e) {
      e.preventDefault();

      var position = $($(this).attr("href")).offset().top;

      $("body, html").animate(
        {
          scrollTop: position
        },
        800,
        "linear"
      );
    });
    /**-----------------------------
     *  Video Popup
     * ---------------------------*/
    var videoPop = $(".cdr-video__button");
    if (videoPop.length) {
      videoPop.magnificPopup({
        items: {
          src: "https://www.youtube.com/watch?v=kshIWIc15yg"
        },
        type: "iframe",
        iframe: {
          markup:
            '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            "</div>",
          patterns: {
            youtube: {
              index: "youtube.com/",
              id: "v=",
              src: "//www.youtube.com/embed/kshIWIc15yg"
            }
          },
          srcAction: "iframe_src"
        }
      });
    }

    /**-----------------------------
     *  Testimonial slider
     * ---------------------------*/

    var testimonialSlider = $(".cdr-testimonial__slider");
    if (testimonialSlider.length) {
      testimonialSlider.slick({
        slidesToShow: 1,
        mobileFirst: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3
              // centerMode: true
            }
          }
        ]
      });
    }

    /**-----------------------------
     *  Navbar fix
     * ---------------------------*/

    $(document).on("click", ".navbar-nav li.menu-item-has-children>a", function(
      e
    ) {
      e.preventDefault();
    });

    /*------------------
            back to top
        ------------------*/
    $(document).on("click", ".back-to-top", function() {
      $("html,body").animate(
        {
          scrollTop: 0
        },
        2000
      );
    });
  });

  var lastScrollTop = "";
  $(window).on("scroll", function() {
    /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/
    var st = $(this).scrollTop();

    lastScrollTop = st;

    var ScrollTop = $(".back-to-top");
    if ($(window).scrollTop() > 1000) {
      ScrollTop.fadeIn(1000);
    } else {
      ScrollTop.fadeOut(1000);
    }
  });

  $(window).on("load", function() {
    /*-----------------
            preloader
        ------------------*/
    var preLoder = $("#preloader");
    preLoder.fadeOut(1000);

    /*-----------------
            back to top
        ------------------*/
    var backtoTop = $(".back-to-top");
    backtoTop.fadeOut();

    /*---------------------
            Cancel Preloader
        ----------------------*/
    $(document).on("click", ".cancel-preloader a", function(e) {
      e.preventDefault();
      $("#preloader").fadeOut(0);
    });
  });
})(jQuery);
