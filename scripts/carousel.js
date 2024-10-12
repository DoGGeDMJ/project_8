$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    centerMode: true,
    speed: 1000,
    cssEase: "ease-in-out",
    // autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
    prevArrow:
      '<button type="button" class="slick-prev"><span class="icon-arrow-left"></span></button>',
    nextArrow:
      '<button type="button" class="slick-next"><span class="icon-arrow-right"></span></button>',
  });
});

$(".slider").on("init", function (event, slick) {
  $(".slick-dots li button").each(function () {
    $(this).html('<span class="icon-star"></span>');
  });
});
