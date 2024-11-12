(function ($) {
    "use strict";
  
    new WOW().init();
  
   //navbar cart
  $(".cart_link > a").on("click", function () {
    $(".mini_cart").addClass("active");
  });

  $(".mini_cart_close > a").on("click", function () {
    $(".mini_cart").removeClass("active");
  });

   //sticky navbar
   $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".sticky-header").removeClass("sticky");
    } else {
      $(".sticky-header").addClass("sticky");
    }
  });

   // background image
   function dataBackgroundImage() {
    $("[data-bgimg]").each(function () {
      var bgImgUrl = $(this).data("bgimg");
      $(this).css({
        "background-image": "url(" + bgImgUrl + ")", // concatenation
      });
    });
  }

  $(window).on("load", function () {
    dataBackgroundImage();
  });

  //for carousel slider of the slider section
  $(".slider_area").owlCarousel({
    animateOut: "fadeOut",
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 6000,
    items: 1,
    dots: true,
  });

  //product column responsive
  $(".product_column3").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    arrows: true,
    rows: 2,
    prevArrow:
      '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
    nextArrow:
      '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
    responsive: [
      {
        breakpoints: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoints: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoints: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoints: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

})(jQuery); 
