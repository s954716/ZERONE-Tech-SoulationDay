$(document).ready(function () {
  //講師介紹內容收合展開
  $(".more").click(function () {
    $(this).toggleClass("open");
  });

  //點擊tab選單的其中一項，被點擊的那個字變顏色且有下底線
  $(".tab-title").click(function () {
    $(".tab-title").removeClass("curr-title-item");
    $(this).addClass("curr-title-item");
  });

  $(".pro-title").click(function () {
    $(".pro-title").removeClass("curr-pro-item");
    $(this).addClass("curr-pro-item");
  });

  var sections = [
    "cdr-homepage",
    "cdr-features",
    "cdr-overview",
    "cdr-product",
    "cdr-contact",
  ];
  var positions = [];
  //計算每個section距離頂端多少px
  for (var i = 0; i < sections.length; i++) {
    positions[i] = $(`#${sections[i]}`).position().top;
  }

  $(window).scroll(function () {
    //當下滑到超過cdr-features的距離，將右下角的選單顯現
    $(window).scrollTop() > positions[1] - 400
      ? $("#slider").addClass("show")
      : $("#slider").removeClass("show");

    //當下滑到每個section，先把綠字綠線樣式拿掉，再加到目前所停留的section上
    for (var i = 0; i < sections.length; i++) {
      var target = `#${sections[i]}`;
      $(window).scrollTop() > positions[i] - 100 &&
      $("#slider li a").removeClass("showcolor scrollline") &&
      $(`#slider li a[href='${target}']`).addClass("showcolor scrollline");
    }
  });

  // if($(window).width() < "768"){

  //     $(".act-card").addClass("swiper-container") ;
  //     $(".arrow-left").addClass("swiper-button-prev") ;
  //     $(".arrow-right").addClass("swiper-button-next") ;

  //     var mySwiper = new Swiper ('.swiper-container', {
  //       navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //       }
  //     })
  // }

if ($(window).width() <= "768") {
    //使用slick
    $(".sec-pad").addClass("single-item");
    $(".single-item").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    //點擊黃金級三個字，
    //1.讓裡面的整個內容slick-track隱藏
    //2.點最左邊的dot(slick-slide-control00)一次
    //3.0.3秒後讓slick-track整個內容再顯現出來
    $("a[aria-controls='menu1']").click(function () {
      $(".slick-track").css({
        visibility: "hidden",
      });

      $("#slick-slide-control00").click();

      setTimeout(function () {
        $(".slick-track").css({
          visibility: "visible",
        });
      }, 300);
    });
}
//使用fancybox
  for (var i = 1; i <= 16; i++) {
    $(`#product${i}`).fancybox();
  }
});
